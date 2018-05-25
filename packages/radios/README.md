# @zendeskgarden/react-radios [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-radios.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-radios)

This package includes components relating to radio buttons in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-radios
```

## Usage

Our `Radio` component is a simple abstraction around the
native `<input type="radio" />` element.

```jsx static
<form>
  <Radio name="options" value="option-1">
    <RadioLabel>Option 1</RadioLabel>
  </Radio>
  <Radio name="options" value="option-2" disabled>
    <RadioLabel>Disabled Option</RadioLabel>
  </Radio>
  <Radio name="options" value="option-3">
    <RadioLabel>Option 3</RadioLabel>
  </Radio>
</form>
```
