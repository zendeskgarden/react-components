# @zendeskgarden/react-grid [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-grid.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-grid) [![Dependency Status](https://img.shields.io/david/zendeskgarden/react-components.svg?path=packages/grid&style=flat-square)](https://david-dm.org/zendeskgarden/react-components?path=packages/grid) <!-- markdownlint-disable -->

<!-- markdownlint-enable -->

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
import ThemeProvider from '@zendeskgarden/react-theming/ThemeProvider';
import Grid from '@zendeskgarden/react-grid/Grid';
import Row from '@zendeskgarden/react-grid/Row';
import Col from '@zendeskgarden/react-grid/Col';

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
