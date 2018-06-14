# @zendeskgarden/react-selection [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-selection.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-selection)

This package contains utilities and components related to
selection in the [Garden Design System](https://zendeskgarden.github.io/).

## Installation

```bash
npm install @zendeskgarden/react-selection

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Basic Usage

This package contains several selection components that use the
render prop (child-as-a-function) design pattern.

This allows the consumer to create accessible, performant interactions
against _any_ UI Components. Regardless of whether they are wrapped
in a specific higher-order-component or styling.

This API style is very structured and is meant as an abstraction
for Garden to be able to provide simple APIs while still allowing
the possibility for consumers to _eject_ into a render prop container
for any advanced usages.

View the [React render prop documentation](https://reactjs.org/docs/render-props.html)
for a more in-depth example of usage.

```jsx static
import { KeyboardFocusContainer } from '@zendeskgarden/react-components';

<KeyboardFocusContainer>
  {({ getFocusProps, focused }) => (
    <button {...getFocusProps()}>{focused ? 'Keyboard focused!' : 'Not keyboard focused'}</button>
  )}
</KeyboardFocusContainer>;
```

## Render Props in Garden

All render prop components within Garden follow this structure:

### Their name will end with `Container`

- `SelectionContainer`, `MenuContainer`, etc.

### They will render no UI

- The purpose of the render prop container is
  to manage state and apply props to any DOM elements given to it.

<!-- markdownlint-disable -->

### They will accept their render function from both the `render` prop as well as the `children` prop

<!-- markdownlint-enable -->

```jsx static
<Container>
    {({ getItemProps() }) => (
        <div {...getItemProps()}>Test</div>
    )}
</Container>

// is the same as

<Container
    render={({ getItemProps() }) => (
        <div {...getItemProps()}>Test</div>
    )}
/>
```

### All containers will support both `Uncontrolled` and `Controlled` state management

- `Uncontrolled`
  - State is managed entirely within the component. "it just works" mode
- `Controlled`
  - All stateful properties available within a render prop
    can be controlled with a prop on the container.
  - All state changes are provided to the `onStateChange`
    callback to allow the consumer to fully controll the state.
    - This is useful for components that leverage other containers internally.
    - Also useful if you need to control state in Redux or another store.

```jsx static
// Uncontrolled Usage
<Container>
  {({ getTriggerProps, numClicks }) => <button {...getTriggerProps()}>Clicks {numClicks}</button>}
</Container>;

// Controlled Usage
initialState = {
  numClicks: 5
};

<Container numClicks={state.numClicks} onStateChange={newState => setState(newState)}>
  {({ getTriggerProps, numClicks }) => <button {...getTriggerProps()}>Clicks {numClicks}</button>}
</Container>;
```

### All render props will respect Event Composition

- During development it is common to have to apply events and props to the same
  elements that the render prop is interacting with.
- To help prevent conflicts between the render prop and your own logic, pass
  all events and attributes through the render prop function.
- All render props will be able to respect any `event.preventDefault()` calls
  and overrides you provide.

```jsx static
<Container>
  {({ getTriggerProps, numClicks }) => (
    <button
      {...getTriggerProps({
        onClick: event => {
          /**
           * This onClick event will be called before being passed to
           * the onClick defined within the example container
           */
          alert('clicked');

          /**
           * Possible to not allow the event to continue
           */
          // event.preventDefault();
        },
        autofocus // We want to use HTML5 autofocus
      })}
    >
      Clicks {numClicks}
    </button>
  )}
</Container>
```
