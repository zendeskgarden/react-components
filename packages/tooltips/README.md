# @zendesk/garden-react-tooltips

This package includes presentation components and render prop containers relating to Tooltips
in the Garden Design System.

## Installation

```sh
npm install --save-dev @zendesk/garden-react-tooltips
```

## Usages

### TooltipElement

Standard tooltip usages.

```jsx static
<Tooltip trigger={<button>Trigger top placement</button>}>
  This an small tooltip
</Tooltip>
```

### TooltipContainer

Advanced tooltip usages.

```jsx static
<TooltipContainer
  trigger={({ getTriggerProps }) => (
    <button {...getTriggerProps()}>Hover or Focus to trigger tooltip</button>
  )}
>
  {({ getTooltipProps, placement }) => (
    <LightTooltip {...getTooltipProps({ placement })}>Example tooltip content</LightTooltip>
  )}
</TooltipContainer>
```
