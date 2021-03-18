# @zendeskgarden/react-grid [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-grid)](https://www.npmjs.com/package/@zendeskgarden/react-grid)

This package includes components relating to layout grids in the
[Garden Design System](https://zendeskgarden.github.io/).

The `Grid` component is inspired by the Bootstrap flexbox
[grid](https://getbootstrap.com/docs/4.3/layout/grid/). With Garden, all of
the features are dynamic (based on props) – including the number of grid
columns and gutter width. The result is an incredibly powerful grid system
that will be immediately familiar to users of Bootstrap.

## Installation

```sh
npm install @zendeskgarden/react-grid

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
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
