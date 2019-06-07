The `TooltipContainer` component uses the render prop pattern to apply events and
accessibility props to any element.

Follows the [W3C Tooltip accessibility pattern](https://www.w3.org/TR/wai-aria-practices/#tooltip):

- Applies the necessary `wai-aria` attributes
- Content within the tooltip is screen-readable using `aria-describedby`

### Uncontrolled Usage

All state is handled internally in the component.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

<TooltipContainer
  trigger={({ getTriggerProps, ref }) => (
    <Button {...getTriggerProps({ ref })}>Hover or Focus to trigger tooltip</Button>
  )}
>
  {({ getTooltipProps, placement }) => (
    <TooltipView {...getTooltipProps({ placement, size: 'small' })}>
      Example tooltip content
    </TooltipView>
  )}
</TooltipContainer>;
```

### Controlled Usage

If you need to fully control the state of the container (i.e. if used in another component) you can
control the tooltip visibility with the `isVisible` and `onStateChange` props.

This example defaults the tooltip to the `visible` state.

```jsx
const { Button } = require('@zendeskgarden/react-buttons/src');

initialState = {
  isVisible: true
};

<TooltipContainer
  isVisible={state.isVisible}
  placement="end"
  onStateChange={newState => setState(newState)}
  trigger={({ getTriggerProps, ref }) => (
    <Button {...getTriggerProps({ ref })}>Hover to trigger tooltip</Button>
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
  placement="end"
  trigger={({ getTriggerProps, ref }) => (
    <CustomElement {...getTriggerProps({ refKey: 'ref', ref })}>
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
const { Field, Input } = require('@zendeskgarden/react-forms/src');

<TooltipContainer
  placement="end"
  trigger={({ getTriggerProps, ref }) => (
    <Field>
      <Input
        {...getTriggerProps({
          onMouseEnter: event => event.preventDefault(), // stop our default logic
          onMouseLeave: event => event.preventDefault(), // stop our default logic
          'aria-label': 'Example hover only input',
          placeholder: 'Hover does not trigger me, but focus does',
          ref,
          style: { width: 500 }
        })}
      />
    </Field>
  )}
>
  {({ getTooltipProps, placement }) => (
    <TooltipView
      {...getTooltipProps({
        onMouseLeave: event => event.preventDefault(), // stop our default logic
        placement
      })}
    >
      Example tooltip
    </TooltipView>
  )}
</TooltipContainer>;
```

### Placements

```jsx
const { ThemeProvider } = require('@zendeskgarden/react-theming/src');
const { Field, Toggle, Label } = require('@zendeskgarden/react-forms/src');

const MarginGrid = styled(Grid)`
  margin: 20px;
  text-align: center;
`;

const TriggerDiv = styled.div`
  background-color: grey;
  width: 80px;
  height: 40px;
  margin: auto;
`;

initialState = {
  isRtl: false
};

<div>
  <Field>
    <Toggle checked={state.isRtl} onChange={event => setState({ isRtl: event.target.checked })}>
      <Label style={{ marginBottom: 16 }}>RTL Locale Placement</Label>
    </Toggle>
  </Field>
  <ThemeProvider rtl={state.isRtl}>
    <MarginGrid>
      <Row>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="top-start"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>top-start</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="top"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>top</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="top-end"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>top-end</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="start"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>start</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <div />
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="end"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>end</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="bottom-start"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>bottom-start</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="bottom"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>bottom</TooltipView>
            )}
          </TooltipContainer>
        </Col>
        <Col md={4}>
          <TooltipContainer
            isVisible
            appendToBody
            placement="bottom-end"
            trigger={({ getTriggerProps, ref }) => <TriggerDiv {...getTriggerProps({ ref })} />}
          >
            {({ getTooltipProps, placement }) => (
              <TooltipView {...getTooltipProps({ placement })}>bottom-end</TooltipView>
            )}
          </TooltipContainer>
        </Col>
      </Row>
    </MarginGrid>
  </ThemeProvider>
</div>;
```
