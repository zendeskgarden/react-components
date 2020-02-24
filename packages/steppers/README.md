# @zendeskgarden/react-steppers [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-steppers.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-steppers)

This package includes components related to steppers in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-steppers

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Stepper, Step, StepLabel, StepContent } from '@zendeskgarden/react-steppers';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Stepper activeIndex={1}>
    <Step>
      <StepLabel>Brussels</StepLabel>
      <StepContent>
        Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish artichoke.
      </StepContent>
    </Step>
    <Step>
      }>
      <StepLabel>Beetroot</StepLabel>
      <StepContent>
        Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean turnip greens.
      </StepContent>
    </Step>
    <Step>
      <StepLabel>Turnip</StepLabel>
      <StepContent>
        Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea.
      </StepContent>
    </Step>
  </Stepper>
</ThemeProvider>;
```
