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
import { Modal } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Modal onClose={() => alert('modal closing')}>
    <Modal.Header>Example Header</Modal.Header>
    <Modal.Body>Some content</Modal.Body>
    <Modal.Footer>
      <Modal.FooterItem>
        <Button isBasic>Cancel</Button>
      </Modal.FooterItem>
      <Modal.FooterItem>
        <Button isPrimary>Confirm</Button>
      </Modal.FooterItem>
    </Modal.Footer>
    <Modal.Close aria-label="Close modal" />
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

### TooltipDialog

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { TooltipDialog } from '@zendeskgarden/react-modals';
import { Button } from '@zendeskgarden/react-buttons';

const [isOpen, setIsOpen] = useState(false);
const buttonRef = useRef(null);

<ThemeProvider>
  <Button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
    Open
  </Button>
  <TooltipDialog
    onClose={() => setIsOpen(false)}
    referenceElement={isOpen && buttonRef.current ? buttonRef.current : undefined}
  >
    <TooltipDialog.Title>Example Title</TooltipDialog.Title>
    <TooltipDialog.Body>Some content</TooltipDialog.Body>
    <TooltipDialog.Footer>
      <TooltipDialog.FooterItem>
        <Button>Click</Button>
      </TooltipDialog.FooterItem>
    </TooltipDialog.Footer>
    <TooltipDialog.Close aria-label="Close" />
  </TooltipDialog>
</ThemeProvider>;
```
