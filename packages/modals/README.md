# @zendeskgarden/react-modals [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-modals.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-modals)

This package includes components relating to modals in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-modals
```

## Usage

```jsx static
import Modal from '@zendeskgarden/react-modals/Modal';
import Header from '@zendeskgarden/react-modals/Header';
import Body from '@zendeskgarden/react-modals/Body';
import Footer from '@zendeskgarden/react-modals/Footer';
import Modal from '@zendeskgarden/react-modals/Close';
import Close from '@zendeskgarden/react-buttons/Button';

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
