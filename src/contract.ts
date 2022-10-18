import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

/**
 * Interface contract implemented by Domain construct.
 */
export interface IDomain {

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

  /**
   * Assign an alias record target with the fully-qualified domain name.
   * This will create both `A` & `AAAA` DNS records, unless `disableIpV6` was set to `true`
   * during initialization of `Domain` construct (resulting in only `A` record being created).
   *
   * @param alias Route53 alias record target used to assign as A/AAAA record value.
   *
   * @example
   * domain.assign(new targets.CloudFrontTarget(distribution))
   */
  assign(alias: route53.IAliasRecordTarget): void;
}

export interface ICloudFrontConfiguration {

  /**
   * 	Alternative domain names for this distribution.
   */
  readonly domainNames: string[];

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
}
