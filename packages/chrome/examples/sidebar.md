```jsx
const TalkIcon = require('@zendeskgarden/svg-icons/src/26/relationshape-talk.svg').default;

<Chrome style={{ height: 500 }}>
  <Body>
    <Header isStandalone>
      <HeaderItem hasLogo product="talk">
        <HeaderItemIcon>
          <TalkIcon />
        </HeaderItemIcon>
        <HeaderItemText>Zendesk Support</HeaderItemText>
      </HeaderItem>
    </Header>
    <Content>
      <Sidebar style={{ padding: 28 }}>
        <h2>Example Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Sidebar>
      <Main style={{ padding: 28 }}>
        <h2>Main Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </Main>
    </Content>
  </Body>
</Chrome>;
```
