The `TooltipContainer` component uses the render prop pattern to apply events and
accessibility props to any element.

Follows the [W3C Tooltip accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#tooltip):

* Applies the necessary `wai-aria` attributes
* Content within the tooltip is screen-readable using `aria-describedby`

### Uncontrolled Usage

All state is handled internally in the component.

```jsx
<TooltipContainer
  trigger={({ getTriggerProps }) => (
    <button {...getTriggerProps()}>Hover or Focus to trigger tooltip</button>
  )}
>
  {({ getTooltipProps, placement }) => (
    <TooltipView {...getTooltipProps({ placement, size: 'small' })}>
      Example tooltip content
    </TooltipView>
  )}
</TooltipContainer>
```

### Controlled Usage

If you need to fully control the state of the container (i.e. if used in another component) you can
control the tooltip visibility with the `isVisible` and `onStateChange` props.

This example defaults the tooltip to the `visible` state.

```jsx
initialState = {
  isVisible: true
};

<TooltipContainer
  isVisible={state.isVisible}
  placement="right"
  onStateChange={newState => setState(newState)}
  trigger={({ getTriggerProps }) => (
    <button {...getTriggerProps()}>Hover to trigger tooltip</button>
  )}
>
  {({ getTooltipProps, placement }) => (
    <TooltipView {...getTooltipProps({ placement })}>Example content</TooltipView>
  )}
</TooltipContainer>;
```

### Custom Elements

You can apply this container to _any_ UI element.

```jsx
const CustomElement = styled.div`
  padding: 25px;
  color: white;
  background-color: blue;
  display: inline-block;
`;

const CustomTooltip = styled.div`
  padding: 2em;
  background-color: grey;
  color: white;
  max-width: 150px;
  margin: 8px;
`;

<TooltipContainer
  placement="right"
  trigger={({ getTriggerProps }) => (
    <CustomElement {...getTriggerProps({ refKey: 'innerRef' })}>
      Custom content and placement
    </CustomElement>
  )}
>
  {({ getTooltipProps, placement }) => (
    <CustomTooltip {...getTooltipProps({ placement })}>
      <p>
        This is an example of of a long form tooltip. Users are able to interact with this tooltip
        by hovering, selecting, or focusing it's content.
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum...
      </p>
    </CustomTooltip>
  )}
</TooltipContainer>;
```

### Disabling Opening on Hover

This example uses a native input, which doesn't open it's tooltip `onMouseEnter`.

```jsx
<TooltipContainer
  trigger={({ getTriggerProps }) => (
    <input
      {...getTriggerProps({
        onMouseEnter: event => event.preventDefault(), // stop our default logic
        placeholder: 'Hover does not trigger me, but focus does',
        style: { width: 250 }
      })}
    />
  )}
>
  {({ getTooltipProps, placement }) => (
    <TooltipView {...getTooltipProps({ placement })}>Example tooltip</TooltipView>
  )}
</TooltipContainer>
```
