import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { DomainCertificate } from './certificate';
import { ICloudFrontConfiguration, IDomain } from './contract';
import { addError } from './errors/add';
import { FQDN } from './fqdn';
import { DomainProps } from './props';
import { DomainZone } from './zone';


export class Domain extends Construct implements IDomain {

  /**
   * Route53 hosted zone used to assign the domain into.
   */
  readonly zone: route53.IHostedZone;

  /**
   * Fully-qualified domain name.
   */
  readonly fqdn: string;

  /**
   * Certificate Manager certificate.
   */
  readonly certificate: acm.ICertificate;

  /**
   * Has IPv6 AAAA records been created.
   * Can be used to conditionally configure IPv6 support
   * to CloudFront distribution.
   */
  readonly enableIpv6: boolean;

  private region: string;
  private assigned: boolean = false;

  /**
   * Initializing a `new Domain` construct instance will lookup the Route53 hosted zone
   * and define ACM DNS-validated certificate.
   *
   * After initialization you must use `assign(alias)` method to to configure `A`/`AAAA` records
   * with the `alias` as the record value.
   */
  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    const {
      certificate,
      enableIpv6 = true,
      region = 'us-east-1',
      subdomain,
      zone,
    } = props;

    this.enableIpv6 = enableIpv6;

    this.zone = DomainZone.define(this, { zone });

    this.region = region;

    this.fqdn = new FQDN(this, 'FQDN', {
      zone: this.zone,
      subdomain,
    }).value;

    this.certificate = DomainCertificate.define(this, {
      certificate,
      region: this.region,
      zone: this.zone,
      fqdn: this.fqdn,
    });
  }

  /**
   * Assign an alias as record target with the fully-qualified domain name.
   * This will create both `A` & `AAAA` DNS records, unless `disableIpV6` was set to `true`
   * during initialization of `Domain` construct (resulting in only `A` record being created).
   *
   * @param alias Route53 alias record target used to assign as A/AAAA record value.
   *
   * @example
   * domain.addTarget(new targets.CloudFrontTarget(distribution))
   */
  public addTarget(alias: route53.IAliasRecordTarget): void {

    // prevent accidental reassignment
    if (this.assigned) {
      addError(this, `Domain already assigned: ${this.fqdn}`);
      return;
    }

    // set assigned state flag
    this.assigned = true;

    // set IPv4 record
    new route53.ARecord(this, 'AliasRecordIpV4', {
      zone: this.zone,
      recordName: this.fqdn,
      target: route53.RecordTarget.fromAlias(alias),
    });

    // return early if IPv6 is disabled
    if (!this.enableIpv6) return;

    // set IPv6 record
    new route53.AaaaRecord(this, 'AliasRecordIpV6', {
      zone: this.zone,
      recordName: this.fqdn,
      target: route53.RecordTarget.fromAlias(alias),
    });

  }

  /**
   * Helper method to configure CloudFront distribution with the domain,
   * certificate and IPv6 support.
   *
   * @returns CloudFront configuration for certificate, domainNames and IPv6
   */
  public configureCloudFront(): ICloudFrontConfiguration {
    return {
      certificate: this.certificate,
      domainNames: [this.fqdn],
      enableIpv6: this.enableIpv6,
    };
  }
}
