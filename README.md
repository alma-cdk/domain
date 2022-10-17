<div align="center">
	<br/>
	<br/>
  <h1>
	<img height="140" src="assets/alma-cdk-domain.svg" alt="Alma CDK Domain" />
  <br/>
  <br/>
  </h1>

  ```sh
  npm i -D @alma-cdk/domain
  ```

  <div align="left">

  Simplifies creation of subdomain with a TLS certificate and configuration with services like AWS CloudFront.

  </div>
  <br/>
</div>


<br/>


## 🚧 &nbsp; Project Stability

![experimental](https://img.shields.io/badge/stability-experimental-yellow "Stability: Experimental")

This construct is still versioned with `v0` major version and breaking changes might be introduced if necessary (without a major version bump), though we aim to keep the API as stable as possible (even within `v0` development). We aim to publish `v1.0.0` soon and after that breaking changes will be introduced via major version bumps.


<br/>

## Getting Started

```ts
import { Domain } from '@alma-cdk/domain';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
```
```ts
const domain = new Domain(this, 'Domain', {
  zone: 'example.com', // retrieve the zone via lookup, or provide IHostedZone
  subdomain: 'foobar', // optional subdomain
});

const distribution = new cloudfront.Distribution(this, 'Distribution', {
  /* other cloudfront configuration values removed for brevity */

  certificate: domain.certificate, // reference to created ICertificate
  domainNames: [domain.fqdn], // foobar.example.com
})

// assign CloudFront distribution to given fqdn with A + AAAA records
domain.assign(new targets.CloudFrontTarget(distribution))
```



