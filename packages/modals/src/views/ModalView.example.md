This is a visual only example. For an accessible, complete implementation
[use the ModalContainer](#modalcontainer) component.

```jsx
const { Button } = require('@zendeskgarden/react-buttons');

const ExampleModalContainer = styled.div`
  position: relative;
  width: 100%;
  height 500px;
`;

/**
 * The inline styles are necessary to limit the modal
 * to the styleguide example sandbox
 */
<ExampleModalContainer>
  <Backdrop style={{ position: 'absolute' }} center>
    <ModalView style={{ position: 'absolute' }}>
      <Header>Example Header</Header>
      <Body>Example content goes here</Body>
      <Footer>
        <Button>Cancel</Button>
        <Button primary>Submit</Button>
      </Footer>
      <Close />
    </ModalView>
  </Backdrop>
</ExampleModalContainer>;
```
