# @zendeskgarden/react-drag-drop [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-drag-drop
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-drag-drop

This package includes components related to drag and drop in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-drag-drop

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Draggable, DraggableList, Dropzone } from '@zendeskgarden/react-drag-drop';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <DraggableList>
    <DraggableList.Item>
      <Draggable>
        <Draggable.Grip />
        <Draggable.Content>Petunia</Draggable.Content>
      </Draggable>
    </DraggableList.Item>
  </DraggableList>

  <Dropzone>
    <Dropzone.Message>Drag items here</Dropzone.Message>
  </Dropzone>
</ThemeProvider>;
```
