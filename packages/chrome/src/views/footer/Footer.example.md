```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<Chrome style={{ height: 200 }}>
  <Body hasFooter>
    <Header>
      <HeaderItem maxX>
        <HeaderItemText>Header</HeaderItemText>
      </HeaderItem>
    </Header>
    <Content />
    <Footer>
      <FooterItem>
        <Button basic>Cancel</Button>
      </FooterItem>
      <FooterItem>
        <Button primary>Save</Button>
      </FooterItem>
    </Footer>
  </Body>
</Chrome>;
```
