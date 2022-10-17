import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';
import { DomainCertificate } from './certificate';
import { IDomain } from './contract';
import { FQDN } from './fqdn';
import { DomainProps } from './props';
import { DomainZone } from './zone';


export class Domain extends Construct implements IDomain {
  readonly zone: route53.IHostedZone;
  readonly fqdn: string;
  readonly certificate: acm.ICertificate;

  private disableIpV6: boolean;
  private region: string;

  constructor(scope: Construct, id: string, props: DomainProps) {
    super(scope, id);

    const {
      certificate,
      disableIpV6 = false,
      region = 'us-east-1',
      subdomain,
      zone,
    } = props;

    this.disableIpV6 = disableIpV6;

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

  public assign(alias: route53.IAliasRecordTarget): void {
    new route53.ARecord(this, 'AliasRecordIpV4', {
      zone: this.zone,
      target: route53.RecordTarget.fromAlias(alias),
    });
    if (!this.disableIpV6) {
      new route53.AaaaRecord(this, 'AliasRecordIpV6', {
        zone: this.zone,
        target: route53.RecordTarget.fromAlias(alias),
      });
    }
  }
}
