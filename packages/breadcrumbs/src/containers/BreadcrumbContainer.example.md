```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<BreadcrumbContainer>
  {({ getContainerProps }) => (
    /* role not needed as `BreadcrumbView` is a navigation landmark. */
    <BreadcrumbView {...getContainerProps({ role: null })}>
      <List>
        <Item>
          <Anchor>One</Anchor>
        </Item>
        <Item>
          <Anchor>Two</Anchor>
        </Item>
        <Item current>Three</Item>
      </List>
    </BreadcrumbView>
  )}
</BreadcrumbContainer>;
```
