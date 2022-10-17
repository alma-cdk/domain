import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';

export interface IDomain {
  readonly zone: route53.IHostedZone;
  readonly fqdn: string;
  readonly certificate: acm.ICertificate;
  assign(target: route53.IAliasRecordTarget): void;
}
