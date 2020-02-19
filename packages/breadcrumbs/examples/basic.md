The `Breadcrumb` component follows the
[W3C breadcrumb accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
and applies the correct accessibility attributes to the `Breadcrumb` listed below. It acts
as a high-abstraction API over the [useBreadcrumb()](https://www.npmjs.com/package/@zendeskgarden/container-breadcrumb)
hook. Implementations are expected to override `aria-label` with a translated value describing usage.

```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<Breadcrumb>
  <Anchor href="/">Home</Anchor>
  <Anchor href="..">React Components</Anchor>
  <span>Breadcrumbs</span>
</Breadcrumb>;
```
