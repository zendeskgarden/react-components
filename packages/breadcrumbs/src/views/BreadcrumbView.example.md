The `BreadcrumbView` is a presentation component used to wrap breadcrumb
`Item` components.

```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<BreadcrumbView>
  <Item>
    <Anchor>Alpha</Anchor>
  </Item>
  <Item>
    <Anchor>Beta</Anchor>
  </Item>
  <Item current>Gamma</Item>
</BreadcrumbView>;
```
