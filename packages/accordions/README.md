# @zendeskgarden/react-accordions [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-accordions.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-accordions)

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
import { Stepper, Step, StepLabel, StepContent } from '@zendeskgarden/react-accordions';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Stepper activeIndex={1}>
    <Stepper.Step>
      <Stepper.StepLabel>Brussels</Stepper.Label>
      <Stepper.StepContent>
        Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish artichoke.
      </Stepper.Content>
    </Stepper.Step>
    <Stepper.Step>
      }>
      <Stepper.StepLabel>Beetroot</Stepper.Label>
      <Stepper.StepContent>
        Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean turnip greens.
      </Stepper.Content>
    </Stepper.Step>
    <Stepper.Step>
      <Stepper.StepLabel>Turnip</Stepper.Label>
      <Stepper.StepContent>
        Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea.
      </Stepper.Content>
    </Stepper.Step>
  </Stepper>
</ThemeProvider>;
```
