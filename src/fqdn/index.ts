import * as route53 from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

export interface FQDNProps {
  zone: route53.IHostedZone;
  subdomain?: string;
}


export class FQDN extends Construct {

  readonly value: string;

  constructor(scope: Construct, id: string, props: FQDNProps) {
    super(scope, id);

    if (typeof props.subdomain !== 'string') {
      this.value = props.zone.zoneName;
      return;
    }

    // format subdomain with a trailing dot and remove double dot
    // if trailing dot was provided by user
    const subdomain = `${props.subdomain}.`.replace('..', '');


    this.value = `${subdomain}${props.zone.zoneName}`;
  }
}
