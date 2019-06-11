# @zendeskgarden/react-radios [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-radios.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-radios)

This package includes components relating to radio buttons in the
[Garden Design System](https://zendeskgarden.github.io/).

## DEPRECATION WARNING

This package has been deprecated in favor of the API provided in the
[@zendeskgarden/react-forms](https://garden.zendesk.com/react-components/forms/) package.

This package will stop receiving updates in a future major release.

## Installation

```sh
npm install @zendeskgarden/react-radios

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

Our `Radio` component is a simple abstraction around the
native `<input type="radio" />` element.

```jsx static
/**
 * Include radio styling at the root of your application
 */
import '@zendeskgarden/react-radios/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Radio, Label } from '@zendeskgarden/react-radios';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <form>
    <Radio name="options" value="option-1">
      <Label>Option 1</Label>
    </Radio>
    <Radio name="options" value="option-2" disabled>
      <Label>Disabled Option</Label>
    </Radio>
    <Radio name="options" value="option-3">
      <Label>Option 3</Label>
    </Radio>
  </form>
</ThemeProvider>;
```
