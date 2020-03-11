# @zendeskgarden/react-accordions [![npm version][npm version badge]][npm version link]

[npm version badge]: https://flat.badgen.net/npm/v/@zendeskgarden/react-accordions
[npm version link]: https://www.npmjs.com/package/@zendeskgarden/react-accordions

This package includes components related to accordions in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-accordions

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Stepper } from '@zendeskgarden/react-accordions';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Stepper>
    <Stepper.Step>
      <Stepper.Label>Brussels</Stepper.Label>
      <Stepper.Content>
        Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish artichoke.
      </Stepper.Content>
    </Stepper.Step>
    <Stepper.Step>
      <Stepper.Label>Beetroot</Stepper.Label>
      <Stepper.Content>
        Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean turnip greens.
      </Stepper.Content>
    </Stepper.Step>
    <Stepper.Step>
      <Stepper.Label>Turnip</Stepper.Label>
      <Stepper.Content>
        Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea.
      </Stepper.Content>
    </Stepper.Step>
  </Stepper>
</ThemeProvider>;
```
