# @zendeskgarden/react-loaders [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-loaders)](https://www.npmjs.com/package/@zendeskgarden/react-loaders)

This package includes components relating to loaders in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-loaders

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

### Dots

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Dots } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Dots />;
</ThemeProvider>;
```

### Inline

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Inline } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Inline />
</ThemeProvider>;
```

### Progress

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Progress } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Progress value={40} />
</ThemeProvider>;
```

### Skeleton

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Skeleton } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Skeleton />;
</ThemeProvider>;
```

### Spinner

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Spinner } from '@zendeskgarden/react-loaders';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Spinner />;
</ThemeProvider>;
```
