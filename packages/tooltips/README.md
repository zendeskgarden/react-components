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
<Tooltip trigger={<button>Trigger top placement</button>}>This an small tooltip</Tooltip>
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

### RTL Locale Layouts

The `Tooltip` and `TooltipContainer` components automatically handle RTL layouts based on
their parent [ThemeProvider](https://garden.zendesk.com/react-components/next/theming/#themeprovider).

#### English (LTR) Placements

```bash static
                  TOP_START     TOP        TOP_END
       START_TOP  +------------------------------+  END_TOP
                  |   ---inline direction --->   |
                  |  |                           |
           START  |  | block      * horizontal * |  END
                  |  | direction  *writing mode* |
                  |  V                           |
    START_BOTTOM  +------------------------------+  END_BOTTOM
                  BOTTOM_START BOTTOM   BOTTOM_END
```

#### Arabic/Hebrew (RTL) Placements

```bash static
                  TOP_END     TOP        TOP_START
         END_TOP  +------------------------------+  START_TOP
                  |  <--- inline direction---    |
                  |  |                           |
             END  |  | block      * horizontal * |  START
                  |  | direction  *writing mode* |
                  |  V                           |
      END_BOTTOM  +------------------------------+  START_BOTTOM
                  BOTTOM_END   BOTTOM BOTTOM_START
```
