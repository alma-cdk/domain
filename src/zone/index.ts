import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export interface DomainZoneProps {
  zone: string | route53.IHostedZone;
}

export abstract class DomainZone {

  public static define(scope: Construct, props: DomainZoneProps): route53.IHostedZone {
    if (DomainZone.isZone(props.zone)) {
      return props.zone;
    }
    return route53.PublicHostedZone.fromLookup(scope, 'Zone', {
      domainName: props.zone,
    });
  }

  private static isZone(value: any): value is route53.IHostedZone {
    return (
      typeof value !== 'undefined'
      && 'hostedZoneId' in value
      && 'zoneName' in value
      && 'hostedZoneArn' in value
    );
  }

}
