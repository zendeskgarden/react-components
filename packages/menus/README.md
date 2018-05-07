# @zendesk/garden-react-menus

This package includes components relating to menus in the
[Garden Design System](http://zendeskgarden.github.io/).

## Installation

```sh
npm install --save-dev @zendesk/garden-react-menus
```

## Usage

```jsx static
import Menu from '@zendesk/garden-react-menus/Menu';
import Item from '@zendesk/garden-react-menus/Item';

<Menu
  onChange={selectedKey => console.log(`Item selected: "${selectedKey}"`)}
  trigger={({ ref }) => <button ref={ref}>Simple Example</button>}
>
  <Item key="item-1">Item 1</Item>
  <Item key="item-2">Item 2</Item>
  <Item key="item-3">Item 3</Item>
</Menu>;
```
