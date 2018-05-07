# @zendesk/garden-react-modals

This package includes components relating to modals in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-modals
```

## Usage

```jsx static
import Modal from '@zendesk/garden-react-modals/Modal';
import Header from '@zendesk/garden-react-modals/Header';
import Body from '@zendesk/garden-react-modals/Body';
import Footer from '@zendesk/garden-react-modals/Footer';
import Modal from '@zendesk/garden-react-modals/Close';
import Close from '@zendesk/garden-react-buttons/Button';

<Modal onClose={() => alert('modal closing'))}>
  <Header>Example Header</Header>
  <Body>
    Some content
  </Body>
  <Footer>
    <Button>Cancel</Button>
    <Button primary>
      Confirm
    </Button>
  </Footer>
  <Close />
</Modal>
```
