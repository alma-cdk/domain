import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export interface DomainCertificateProps {
  certificate?: acm.ICertificate;
  zone: route53.IHostedZone;
  region: string;
  fqdn: string;
}

export abstract class DomainCertificate extends Construct {

  public static define(scope: Construct, props: DomainCertificateProps): acm.ICertificate {
    if (DomainCertificate.isCertificate(props.certificate)) {
      return props.certificate;
    }
    return new acm.DnsValidatedCertificate(scope, 'Certificate', {
      region: props.region,
      hostedZone: props.zone,
      domainName: props.fqdn,
    });
  }

  private static isCertificate(value: any): value is acm.ICertificate {
    return (
      typeof value !== 'undefined'
      && 'certificateArn' in value
    );
  }

}
