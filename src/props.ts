import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

/**
 * Properties to configure the domain (zone and certificate).
 */
export interface DomainProps {

  /**
   * Provide either a fully-qualified domain name as string to perform a hosted zone lookup or
   * a previously defined hosted zone as `route53.IHostedZone`.
   */
  readonly zone: string | route53.IHostedZone;

  /**
   * Provide subdomain or leave undefined to use the zone apex domain.
   * If subdomain provided, the resulting FQDN will be `subdomain.zone`.
   */
  readonly subdomain?: string;

  /**
   * AWS Region to deploy the certificate into.
   * Defaults to `us-east-1` which is the only region where
   * ACM certificates can be deployed to CloudFront.
   *
   * @default
   * "us-east-1"
   */
  readonly region?: string;

  /**
   * Set to true to disable IPv6 `AAAA` record creation.
   *
   * @default
   * false
   */
  readonly disableIpV6?: boolean;

  /**
   * Provide your own pre-existing certificate.
   * If not provided, a new certificate will be created
   * by default.
   */
  readonly certificate?: acm.ICertificate;
}
