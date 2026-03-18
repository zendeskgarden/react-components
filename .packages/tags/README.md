# @zendeskgarden/react-tags [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tags)](https://www.npmjs.com/package/@zendeskgarden/react-tags)

This package includes components relating to tags in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tags

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Tag } from '@zendeskgarden/react-tags';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Tag pill>
    <Tag.Avatar>
      <img alt="" src="images/user.png" />
    </Tag.Avatar>
    Example User
    <Tag.Close
      aria-label="press delete to remove Example User tag"
      onClick={() => alert('remove tag')}
    />
  </Tag>
</ThemeProvider>;
```
