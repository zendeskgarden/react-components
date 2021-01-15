# @zendeskgarden/react-tooltips [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tooltips)](https://www.npmjs.com/package/@zendeskgarden/react-tooltips)

This package includes presentation components and render prop containers relating to Tooltips
in the Garden Design System.

## Installation

```sh
npm install @zendeskgarden/react-tooltips

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

### TooltipElement

Standard tooltip usages.

```jsx
import { ThemingProvider } from '@zendeskgarden/react-theming';
import { Tooltip } from '@zendeskgarden/react-tooltips';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tooltip content="This is a small tooltip">
    <button>Trigger top placement</button>
  </Tooltip>
</ThemeProvider>;
```

### RTL Locale Layouts

The `Tooltip` component automatically handles RTL layouts based on
their parent [ThemeProvider](https://zendeskgarden.github.io/react-components/theming/#themeprovider).

#### English (LTR) Placements

```bash
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

```bash
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
