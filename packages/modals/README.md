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

### Modal

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

### Drawer

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Drawer } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

const [isOpen, setIsOpen] = useState(false)

<ThemeProvider>
  <Button onClick={() => setIsOpen(true)}>
    Open
  </Button>
  <Drawer isOpen={state.isOpen} onClose={() => setIsOpen(false)}>
    <Drawer.Header>Example Title</Drawer.Header>
    <Drawer.Body>Some content</Drawer.Body>
    <Drawer.Footer>
      <Drawer.FooterItem>
        <Button>Click</Button>
      </Drawer.FooterItem>
    </Drawer.Footer>
    <Drawer.Close aria-Label="Close" />
  </Drawer>
</ThemeProvider>
```

### TooltipModal

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

const [isOpen, setIsOpen] = useState(false);
const buttonRef = useRef(null);

<ThemeProvider>
  <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
    Open
  </Button>
  <TooltipModal
    onClose={() => setIsOpen(false)}
    referenceElement={isOpen && buttonRef.current ? buttonRef.current : undefined}
  >
    <TooltipModal.Title>Example Title</TooltipModal.Title>
    <TooltipModal.Body>Some content</TooltipModal.Body>
    <TooltipModal.Footer>
      <TooltipModal.FooterItem>
        <Button>Click</Button>
      </TooltipModal.FooterItem>
    </TooltipModal.Footer>
    <TooltipModal.Close aria-label="Close" />
  </TooltipModal>
</ThemeProvider>;
```
