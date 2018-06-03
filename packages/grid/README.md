# @zendeskgarden/react-grid [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-grid.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-grid)

This package includes components relating to layout grids in the
[Garden Design System](https://zendeskgarden.github.io/).

The `Grid` component is an implementation over the
[Bootstrap v4 Flexbox Grid](http://getbootstrap.com/docs/4.0/layout/overview/).
Their documentation is a great resource to explore all of the unique customizations
available within this package.

## Installation

```sh
npm install @zendeskgarden/react-grid

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include grid styling at the root of your application
 */
import '@zendeskgarden/react-grid/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Grid, Row, Col } from '@zendeskgarden/react-grid';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Grid>
    <Row>
      <Col md={4}>1 of 3</Col>
      <Col md={4}>2 of 3</Col>
      <Col md={4}>3 of 3</Col>
    </Row>
    <Row>
      <Col md={6}>1 of 2</Col>
      <Col md={6}>2 of 2</Col>
    </Row>
  </Grid>
</ThemeProvider>;
```
