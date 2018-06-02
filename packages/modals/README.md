# @zendeskgarden/react-modals [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-modals.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-modals) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/modals&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/modals) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

This package includes components relating to modals in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-modals

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include modal styling at the root of your application
 */
import '@zendeskgarden/react-modals/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Modal, Header, Body, Footer, Close } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
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
</ThemeProvider>
```
