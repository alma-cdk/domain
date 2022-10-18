# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Domain <a name="Domain" id="@alma-cdk/domain.Domain"></a>

- *Implements:* <a href="#@alma-cdk/domain.IDomain">IDomain</a>

#### Initializers <a name="Initializers" id="@alma-cdk/domain.Domain.Initializer"></a>

```typescript
import { Domain } from '@alma-cdk/domain'

new Domain(scope: Construct, id: string, props: DomainProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.Domain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.Domain.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.Domain.Initializer.parameter.props">props</a></code> | <code><a href="#@alma-cdk/domain.DomainProps">DomainProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@alma-cdk/domain.Domain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@alma-cdk/domain.Domain.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@alma-cdk/domain.Domain.Initializer.parameter.props"></a>

- *Type:* <a href="#@alma-cdk/domain.DomainProps">DomainProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/domain.Domain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@alma-cdk/domain.Domain.assign">assign</a></code> | Assign an alias record target with the fully-qualified domain name. |
| <code><a href="#@alma-cdk/domain.Domain.configureCloudFront">configureCloudFront</a></code> | Helper method to configure CloudFront distribution with the domain, certificate and IPv6 support. |

---

##### `toString` <a name="toString" id="@alma-cdk/domain.Domain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `assign` <a name="assign" id="@alma-cdk/domain.Domain.assign"></a>

```typescript
public assign(alias: IAliasRecordTarget): void
```

Assign an alias record target with the fully-qualified domain name.

This will create both `A` & `AAAA` DNS records, unless `disableIpV6` was set to `true`
during initialization of `Domain` construct (resulting in only `A` record being created).

*Example*

```typescript
domain.assign(new targets.CloudFrontTarget(distribution))
```


###### `alias`<sup>Required</sup> <a name="alias" id="@alma-cdk/domain.Domain.assign.parameter.alias"></a>

- *Type:* aws-cdk-lib.aws_route53.IAliasRecordTarget

Route53 alias record target used to assign as A/AAAA record value.

---

##### `configureCloudFront` <a name="configureCloudFront" id="@alma-cdk/domain.Domain.configureCloudFront"></a>

```typescript
public configureCloudFront(): ICloudFrontConfiguration
```

Helper method to configure CloudFront distribution with the domain, certificate and IPv6 support.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/domain.Domain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@alma-cdk/domain.Domain.isConstruct"></a>

```typescript
import { Domain } from '@alma-cdk/domain'

Domain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/domain.Domain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.Domain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@alma-cdk/domain.Domain.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate. |
| <code><a href="#@alma-cdk/domain.Domain.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Has IPv6 AAAA records been created. |
| <code><a href="#@alma-cdk/domain.Domain.property.fqdn">fqdn</a></code> | <code>string</code> | Fully-qualified domain name. |
| <code><a href="#@alma-cdk/domain.Domain.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Route53 hosted zone used to assign the domain into. |

---

##### `node`<sup>Required</sup> <a name="node" id="@alma-cdk/domain.Domain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@alma-cdk/domain.Domain.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

Certificate Manager certificate.

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@alma-cdk/domain.Domain.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean

Has IPv6 AAAA records been created.

Can be used to conditionally configure IPv6 support
to CloudFront distribution.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@alma-cdk/domain.Domain.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully-qualified domain name.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.Domain.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

Route53 hosted zone used to assign the domain into.

---


## Structs <a name="Structs" id="Structs"></a>

### DomainProps <a name="DomainProps" id="@alma-cdk/domain.DomainProps"></a>

Properties to configure the domain (zone and certificate).

#### Initializer <a name="Initializer" id="@alma-cdk/domain.DomainProps.Initializer"></a>

```typescript
import { DomainProps } from '@alma-cdk/domain'

const domainProps: DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.DomainProps.property.zone">zone</a></code> | <code>string \| aws-cdk-lib.aws_route53.IHostedZone</code> | Provide either a fully-qualified domain name as string to perform a hosted zone lookup or a previously defined hosted zone as `route53.IHostedZone`. |
| <code><a href="#@alma-cdk/domain.DomainProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Provide your own pre-existing certificate. |
| <code><a href="#@alma-cdk/domain.DomainProps.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Set to false to disable IPv6 `AAAA` record creation. |
| <code><a href="#@alma-cdk/domain.DomainProps.property.region">region</a></code> | <code>string</code> | AWS Region to deploy the certificate into. |
| <code><a href="#@alma-cdk/domain.DomainProps.property.subdomain">subdomain</a></code> | <code>string</code> | Provide subdomain or leave undefined to use the zone apex domain. |

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.DomainProps.property.zone"></a>

```typescript
public readonly zone: string | IHostedZone;
```

- *Type:* string | aws-cdk-lib.aws_route53.IHostedZone

Provide either a fully-qualified domain name as string to perform a hosted zone lookup or a previously defined hosted zone as `route53.IHostedZone`.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@alma-cdk/domain.DomainProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

Provide your own pre-existing certificate.

If not provided, a new certificate will be created
by default.

---

##### `enableIpv6`<sup>Optional</sup> <a name="enableIpv6" id="@alma-cdk/domain.DomainProps.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean
- *Default:* true

Set to false to disable IPv6 `AAAA` record creation.

---

##### `region`<sup>Optional</sup> <a name="region" id="@alma-cdk/domain.DomainProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* "us-east-1"

AWS Region to deploy the certificate into.

Defaults to `us-east-1` which is the only region where
ACM certificates can be deployed to CloudFront.

---

##### `subdomain`<sup>Optional</sup> <a name="subdomain" id="@alma-cdk/domain.DomainProps.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

Provide subdomain or leave undefined to use the zone apex domain.

If subdomain provided, the resulting FQDN will be `subdomain.zone`.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ICloudFrontConfiguration <a name="ICloudFrontConfiguration" id="@alma-cdk/domain.ICloudFrontConfiguration"></a>

- *Implemented By:* <a href="#@alma-cdk/domain.ICloudFrontConfiguration">ICloudFrontConfiguration</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.ICloudFrontConfiguration.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate. |
| <code><a href="#@alma-cdk/domain.ICloudFrontConfiguration.property.domainNames">domainNames</a></code> | <code>string[]</code> | Alternative domain names for this distribution. |
| <code><a href="#@alma-cdk/domain.ICloudFrontConfiguration.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Has IPv6 AAAA records been created. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@alma-cdk/domain.ICloudFrontConfiguration.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

Certificate Manager certificate.

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@alma-cdk/domain.ICloudFrontConfiguration.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

Alternative domain names for this distribution.

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@alma-cdk/domain.ICloudFrontConfiguration.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean

Has IPv6 AAAA records been created.

Can be used to conditionally configure IPv6 support
to CloudFront distribution.

---

### IDomain <a name="IDomain" id="@alma-cdk/domain.IDomain"></a>

- *Implemented By:* <a href="#@alma-cdk/domain.Domain">Domain</a>, <a href="#@alma-cdk/domain.IDomain">IDomain</a>

Interface contract implemented by Domain construct.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/domain.IDomain.assign">assign</a></code> | Assign an alias record target with the fully-qualified domain name. |

---

##### `assign` <a name="assign" id="@alma-cdk/domain.IDomain.assign"></a>

```typescript
public assign(alias: IAliasRecordTarget): void
```

Assign an alias record target with the fully-qualified domain name.

This will create both `A` & `AAAA` DNS records, unless `disableIpV6` was set to `true`
during initialization of `Domain` construct (resulting in only `A` record being created).

*Example*

```typescript
domain.assign(new targets.CloudFrontTarget(distribution))
```


###### `alias`<sup>Required</sup> <a name="alias" id="@alma-cdk/domain.IDomain.assign.parameter.alias"></a>

- *Type:* aws-cdk-lib.aws_route53.IAliasRecordTarget

Route53 alias record target used to assign as A/AAAA record value.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.IDomain.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | Certificate Manager certificate. |
| <code><a href="#@alma-cdk/domain.IDomain.property.enableIpv6">enableIpv6</a></code> | <code>boolean</code> | Has IPv6 AAAA records been created. |
| <code><a href="#@alma-cdk/domain.IDomain.property.fqdn">fqdn</a></code> | <code>string</code> | Fully-qualified domain name. |
| <code><a href="#@alma-cdk/domain.IDomain.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | Route53 hosted zone used to assign the domain into. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@alma-cdk/domain.IDomain.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

Certificate Manager certificate.

---

##### `enableIpv6`<sup>Required</sup> <a name="enableIpv6" id="@alma-cdk/domain.IDomain.property.enableIpv6"></a>

```typescript
public readonly enableIpv6: boolean;
```

- *Type:* boolean

Has IPv6 AAAA records been created.

Can be used to conditionally configure IPv6 support
to CloudFront distribution.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@alma-cdk/domain.IDomain.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Fully-qualified domain name.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.IDomain.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

Route53 hosted zone used to assign the domain into.

---

