# Garden Component Design

The goal of the React components is to provide flexible abstractions that are

* **Designed**
  * Modern, intuitive, consistent, and visually attractive
* **Keyboard Navigable**
  * Consistent navigation and component interaction strategy
* **Accessible**
  * Built-in accessibility for standard and custom visualizations
* **Localizable**
  * Built-in RTL aware and localizable components

Our packages follow a consistent [architecture](#architecture) allowing consumers to create common UI with minimal effort. The architecture also has the flexibility to accommodate custom components with containers for consistent keyboard navigation, accessibility, and localization.

## Architecture

All `@zendeskgarden/react-*` packages provide 3 types of React components: `elements`, `containers`, and `views`.

### Elements

An `Element` is a high-abstraction API around a common pattern of interaction (container) and its associated visual elements (views).

An example of this would be a `Tabs` component with the following API:

```jsx
<Tabs>
  <TabPanel label="Tab 1">Tab 1 content</TabPanel>
  <TabPanel label="Tab 2">Tab 2 content</TabPanel>
</Tabs>
```

This relatively simple API abstracts

* **DOM structure**
  * A valid tabs implementation needs several DOM nodes including tabs, tablists, and other nested visualizations
  * The `Element` abstracts the DOM structure that is used in common visualizations
* **Keyboard Navigation**
  * The `Element` manages the focused and selected states of the current tab in a manor that is consistent with other composite components
* **Accessibility**
  * The `Element` implements the applicable [W3C WAI-ARIA Design Pattern](https://www.w3.org/TR/wai-aria-practices/#aria_ex) for users that require screen-assistive technologies
* **Localization**
  * The `Element` is [locale aware](#theming) and changes its visualization for RTL if needed
* **State Management**
  * All `Element` components allow [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) and [controlled](https://reactjs.org/docs/forms.html#controlled-components) state management using the `onStateChanged` prop

This high-abstraction API allows 90% of UIs to be created with as little code as possible. To help the remaining 10%, all `Element` components are implemented with the [Container](#containers) and [View](#views) components listed below.

If the `Element` component you're attempting to use isn't flexible enough for your needs you can use the `Container` and/or `View` components.

### Containers

A `Container` component is an abstraction of the state and accessibility logic of a composite component. Think of it as the "common pattern of interaction" within our `Element` components.

These Containers are implemented with the [render prop pattern](https://reactjs.org/docs/render-props.html) and **do not provide any UI**. They simply provide attributes, events, and internal state to a function which applies the information to any elements of its choosing.

For the `Tabs` example above, it would have a corresponding `TabsContainer`

```jsx
<TabsContainer>
  {({ getTabListProps, getTabProps, getTabPanelProps, selectedKey, focusedKey }) => (
    <div>
      <div {...getTabListProps()}>
        <div {...getTabProps({ key: 'tab-1' })}>
          Tab 1
          {'tab-1' === selectedKey && 'SELECTED'}
          {'tab-1' === focusedKey && 'FOCUSED'}
        </div>
        <div {...getTabProps({ key: 'tab-2' })}>
          Tab 2
          {'tab-2' === selectedKey && 'SELECTED'}
          {'tab-2' === focusedKey && 'FOCUSED'}
        </div>
      </div>
      <div {...getTabPanelProps({ key: 'tab-1' })}>Tab 1 content</div>
      <div {...getTabPanelProps({ key: 'tab-2' })}>Tab 2 content</div>
    </div>
  )}
</TabsContainer>
```

The `Container` implementation has the following requirements

* Accepts both the `render` and `children` props as valid render-props
* All collections of props that are meant to be spread to an element have the signature `getFooProps()`
  * These props include all events necessary for component interaction as well as required accessibility roles and information
  * To allow chaining of props and events, apply all props within the method. This allows the container to still apply any events if needed in the interaction model.
  * Example implementation
    ```jsx
    <div
      {...getFooProps({
        onClick: event => alert('clicked!'),
        'data-clicked': true,
        selected: 'all props are proxied through'
      })}
    />
    ```
  * You are able to prevent an event from being handled within the container by calling `event.preventDefault()`
* All internal state is provided within the render prop
* All `Container` components allow [uncontrolled](https://reactjs.org/docs/uncontrolled-components.html) and [controlled](https://reactjs.org/docs/forms.html#controlled-components) state management using the `onStateChanged` prop.
  * An example `controlled` usage would be
  ```jsx
  <TabsContainer
    selectedKey={state.selectedKey}
    focusedKey={state.focusedKey}
    onStateChange={setState}
  >
    ...
  </TabsContainer>
  ```

`Container` components ensure that **ANY UI** is able to provide a consistent keyboard navigation and accessibility experience.

The render prop pattern is incredibly flexible in that it only enforces accessibility. If you find that the Containers are not flexible enough for your implementation, take a hard look at any negative accessiblity side-effects you would be introducing... then use the container :smile:

### Views

The `View` components are the visual primitives of the design system. These components provide the following:

* They are [functional presentation components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components) with no internal state
* They have no DOM abstraction. A single `View` is a single DOM element.
  * `<Button>` :arrow_right: `<button>`, `<Input>` :arrow_right: `<input>`, `<TabList>` :arrow_right: `<div>`
* They proxy all props
  * i.e. if you want to provide the `[type]` attribute to an input the implementation would be `<Input type="datetime-local" />`

## Supporting Architecture

### Selection

All keyboard navigation is provided by the `<SelectionContainer />` component within the [@zendeskgarden/react-selection](../packages/selection) package.

This abstraction provides a base level of accessible keyboard navigation that is consumed within the other packages, but can also be used for custom components that require keyboard integration.

### Theming

All `Views` and `Containers` can be themed using the `<ThemeProvider />` component within the [@zendeskgarden/react-theming](../packages/theming) package.

`ThemeProvider` components can be nested for custom visual treatment, but it is suggested to provide a single provider at the root of your application for RTL management.
