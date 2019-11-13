```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

const Container = styled.div`
  height: 450px;
  overflow: auto;
`;

const ScrollBox = styled.div`
  height: 250%;
  display: flex;
  align-content: center;
  align-items: center;
`;

<Container>
  <ScrollBox>
    <Tooltip type="light" content="Boundary recognition tooltip">
      <Button>Scroll to view trigger changes</Button>
    </Tooltip>
  </ScrollBox>
</Container>;
```
