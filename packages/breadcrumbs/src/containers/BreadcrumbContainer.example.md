```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<BreadcrumbContainer>
  {({ getContainerProps }) => (
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
