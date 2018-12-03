The breadcrumb `List` is a presentation component used to wrap `Item`
components.

```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<List>
  <Item>
    <Anchor>Alpha</Anchor>
  </Item>
  <Item>
    <Anchor>Beta</Anchor>
  </Item>
  <Item current>Gamma</Item>
</List>;
```
