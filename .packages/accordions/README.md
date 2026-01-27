# @zendeskgarden/react-accordions [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-accordions)](https://www.npmjs.com/package/@zendeskgarden/react-accordions)

This package includes components related to accordions in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-accordions

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### Accordion

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Accordion } from '@zendeskgarden/react-accordions';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Accordion level={3}>
    <Accordion.Section>
      <Accordion.Header>
        <Accordion.Label>Turnip greens yarrow</Accordion.Label>
      </Accordion.Header>
      <Accordion.Panel>
        Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth
        water spinach avocado daikon napa cabbage asparagus winter purslane kale.
      </Accordion.Panel>
    </Accordion.Section>
    <Accordion.Section>
      <Accordion.Header>
        <Accordion.Label>Corn amaranth salsify</Accordion.Label>
      </Accordion.Header>
      <Accordion.Panel>
        Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
      </Accordion.Panel>
    </Accordion.Section>
    <Accordion.Section>
      <Accordion.Header>
        <Accordion.Label>Celery quandong swiss</Accordion.Label>
      </Accordion.Header>
      <Accordion.Panel>
        Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram
        celery bitterleaf wattle seed collard greens nori.
      </Accordion.Panel>
    </Accordion.Section>
  </Accordion>
</ThemeProvider>;
```

### Stepper

```jsx
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
