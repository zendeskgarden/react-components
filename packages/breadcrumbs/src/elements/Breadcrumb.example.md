The `Breadcrumb` component follows the
[W3C breadcrumb accessibility design pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb)
and applies the correct accessibility attributes to the `BreadcrumbView` listed below.

```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<Breadcrumb>
  <Anchor href="/">Home</Anchor>
  <Anchor href="..">React Components</Anchor>
  <Item>Breadcrumbs</Item>
</Breadcrumb>;
```
