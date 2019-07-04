### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-breadcrumb](https://garden.zendesk.com/react-containers/storybook/?path=/story/breadcrumb-container--usebreadcrumb).

This container will be removed in a future major release.

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
