# @zendeskgarden/react-grid [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-grid)](https://www.npmjs.com/package/@zendeskgarden/react-grid)

This package includes components relating to layout grids in the
[Garden Design System](https://zendeskgarden.github.io/).

## Grid

The `Grid` component is inspired by the Bootstrap flexbox
[grid](https://getbootstrap.com/docs/4.3/layout/grid/). With Garden, all of
the features are dynamic (based on props) – including the number of grid
columns and gutter width. The result is an incredibly powerful grid system
that will be immediately familiar to users of Bootstrap.

## Pane

The `Pane.Splitter` component enables resizable-layouts between one or
more panes. `PaneProvider` and `Pane`
coordinate multiple `Pane.Splitter` components in a
[CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) or
[CSS Flex](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
layout. The `PaneProvider` and `Pane.Splitter` components receive `fr` units as
values for building responsive resizable layouts by default.

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

```jsx
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { PaneProvider, Pane } from '@zendeskgarden/react-grid';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <PaneProvider
    totalPanesHeight={1000}
    totalPanesWidth={1000}
    defaultColumnValues={{ 'col-1': 1, 'col-2': 1 }}
    defaultRowValues={{ 'row-1': 1, 'row-2': 1 }}
  >
    {({ getGridTemplateColumns, getGridTemplateRows }) => (
      <div
        style={{
          display: 'grid',
          width: '1000px',
          height: '1000px',
          gridTemplateRows: getGridTemplateRows(),
          gridTemplateColumns: getGridTemplateColumns()
        }}
      >
        <Pane>
          <Pane.Content>Pane 1</Pane.Content>
          <Pane.Splitter layoutKey="col-1" min={0} max={2} orientation="end" />
        </Pane>
        <Pane>
          <Pane.Content>Pane 2</Pane.Content>
          <Pane.Splitter layoutKey="row-1" min={0} max={2} orientation="bottom">
            <Pane.SplitterButton label="toggle row-1" />
          </Pane.Splitter>
        </Pane>
        <Pane>
          <Pane.Content>Pane 3</Pane.Content>
          <Pane.Splitter layoutKey="row-2" min={0} max={2} orientation="top">
            <Pane.SplitterButton label="toggle row-2" placement="end" />
          </Pane.Splitter>
        </Pane>
        <Pane>
          <Pane.Content>Pane 4</Pane.Content>
          <Pane.Splitter layoutKey="col-2" min={0} max={2} orientation="start" />
        </Pane>
      </div>
    )}
  </PaneProvider>
</ThemeProvider>;
```

> the `Pane` component uses [`ResizeObserver`](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
> which is not available in node.js or other server side environments (if testing with Jest) - please
> make sure to polyfill as needed. Since the ref used internally is not created when server side rendering,
> the ResizeObserver API will not be invoked and should not pose an issue when doing so.
