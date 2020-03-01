# @zendeskgarden/react-steppers [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-steppers.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-steppers)

This package includes components related to steppers in the
[Garden Design System](https://zendeskgarden.github.io/).

The `Stepper` component accepts an `activeIndex` prop and determines the current step and computes
the completed steps. The `activeIndex` can be used to help communicate to assistive devices in
which step the user is currently on using
[ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

The default layout of the `Stepper` is vertical, and renders step content using `StepContent`.
A horizontal `Stepper` uses the `isHorizontal` prop to render a horizontal layout. For a horizontal
`Stepper`, consumers should render step content outside of the `Stepper` component instead of using
`StepContent`.

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
