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
| <code><a href="#@alma-cdk/domain.Domain.assign">assign</a></code> | *No description.* |

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

###### `alias`<sup>Required</sup> <a name="alias" id="@alma-cdk/domain.Domain.assign.parameter.alias"></a>

- *Type:* aws-cdk-lib.aws_route53.IAliasRecordTarget

---

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
| <code><a href="#@alma-cdk/domain.Domain.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.Domain.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.Domain.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |

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

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@alma-cdk/domain.Domain.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.Domain.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

---


## Structs <a name="Structs" id="Structs"></a>

### DomainProps <a name="DomainProps" id="@alma-cdk/domain.DomainProps"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/domain.DomainProps.Initializer"></a>

```typescript
import { DomainProps } from '@alma-cdk/domain'

const domainProps: DomainProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.DomainProps.property.zone">zone</a></code> | <code>string \| aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.DomainProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.DomainProps.property.disableIpV6">disableIpV6</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.DomainProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.DomainProps.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.DomainProps.property.zone"></a>

```typescript
public readonly zone: string | IHostedZone;
```

- *Type:* string | aws-cdk-lib.aws_route53.IHostedZone

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@alma-cdk/domain.DomainProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `disableIpV6`<sup>Optional</sup> <a name="disableIpV6" id="@alma-cdk/domain.DomainProps.property.disableIpV6"></a>

```typescript
public readonly disableIpV6: boolean;
```

- *Type:* boolean

---

##### `region`<sup>Optional</sup> <a name="region" id="@alma-cdk/domain.DomainProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subdomain`<sup>Optional</sup> <a name="subdomain" id="@alma-cdk/domain.DomainProps.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IDomain <a name="IDomain" id="@alma-cdk/domain.IDomain"></a>

- *Implemented By:* <a href="#@alma-cdk/domain.Domain">Domain</a>, <a href="#@alma-cdk/domain.IDomain">IDomain</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/domain.IDomain.assign">assign</a></code> | *No description.* |

---

##### `assign` <a name="assign" id="@alma-cdk/domain.IDomain.assign"></a>

```typescript
public assign(target: IAliasRecordTarget): void
```

###### `target`<sup>Required</sup> <a name="target" id="@alma-cdk/domain.IDomain.assign.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_route53.IAliasRecordTarget

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/domain.IDomain.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.IDomain.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/domain.IDomain.property.zone">zone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | *No description.* |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@alma-cdk/domain.IDomain.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@alma-cdk/domain.IDomain.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@alma-cdk/domain.IDomain.property.zone"></a>

```typescript
public readonly zone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

---

