```jsx
const { Anchor } = require('@zendeskgarden/react-buttons/src');

<BreadcrumbContainer>
  {({ getContainerProps }) => (
    <BreadcrumbView {...getContainerProps()}>
      <Item>
        <Anchor>One</Anchor>
      </Item>
      <Item>
        <Anchor>Two</Anchor>
      </Item>
      <Item current>Three</Item>
    </BreadcrumbView>
  )}
</BreadcrumbContainer>;
```
