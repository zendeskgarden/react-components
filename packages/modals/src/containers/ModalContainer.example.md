```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isModalVisible: false
};

const onModalClose = () => setState({ isModalVisible: false });

<div>
  <Button onClick={() => setState({ isModalVisible: true })}>Click to open Modal</Button>
  {state.isModalVisible && (
    <ModalContainer onClose={onModalClose}>
      {({
        getBackdropProps,
        getModalProps,
        getTitleProps,
        getContentProps,
        getCloseProps,
        modalRef,
        closeModal
      }) => (
        <Backdrop {...getBackdropProps({ animate: true, center: true })}>
          <ModalView {...getModalProps({ animate: true })} ref={modalRef}>
            <Header {...getTitleProps()}>Example Header</Header>
            <Body {...getContentProps()}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </Body>
            <Footer>
              <FooterItem>
                <Button onClick={closeModal} basic>
                  Cancel
                </Button>
              </FooterItem>
              <FooterItem>
                <Button onClick={closeModal} primary>
                  Confirm
                </Button>
              </FooterItem>
            </Footer>
            <Close {...getCloseProps({ 'aria-label': 'Close modal' })} />
          </ModalView>
        </Backdrop>
      )}
    </ModalContainer>
  )}
</div>;
```
