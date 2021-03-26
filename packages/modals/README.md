# @zendeskgarden/react-modals [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-modals)](https://www.npmjs.com/package/@zendeskgarden/react-modals)

This package includes components relating to modals in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-modals

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Modal onClose={() => alert('modal closing')}>
    <Header>Example Header</Header>
    <Body>Some content</Body>
    <Footer>
      <FooterItem>
        <Button isBasic>Cancel</Button>
      </FooterItem>
      <FooterItem>
        <Button isPrimary>Confirm</Button>
      </FooterItem>
    </Footer>
    <Close aria-label="Close modal" />
  </Modal>
</ThemeProvider>;
```
