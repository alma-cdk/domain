import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface DomainProps {
  readonly zone: string | route53.IHostedZone;
  readonly subdomain?: string;
  readonly region?: string;
  readonly disableIpV6?: boolean;
  readonly certificate?: acm.ICertificate;
}
