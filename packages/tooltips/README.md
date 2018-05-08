# @zendeskgarden/react-tooltips [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tooltips.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tooltips) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/tooltips&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/tooltips) <!-- markdownlint-disable -->
<!-- markdownlint-enable -->

This package includes presentation components and render prop containers relating to Tooltips
in the Garden Design System.

## Installation

```sh
npm install @zendeskgarden/react-tooltips
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
their parent [ThemeProvider](https://zendeskgarden.github.io/react-components/theming/#themeprovider).

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
