# @zendesk/garden-react-radios

This package includes components relating to radio buttons in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-radios
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
