# @zendeskgarden/react-tables [![npm version](https://img.shields.io/npm/v/@zendeskgarden/react-tables.svg?style=flat-square)](https://www.npmjs.com/package/@zendeskgarden/react-tables)

This package includes components relating to tables in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tables

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
/**
 * Include tables styling at the root of your application
 */
import '@zendeskgarden/react-tables/dist/styles.css';

import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Table, Caption, Head, Body, Row, HeaderCell, Cell } from '@zendeskgarden/react-tables';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Table>
    <Caption>Your Unsolved Tickets</Caption>
    <Head>
      <Row header>
        <HeaderCell>Subject</HeaderCell>
        <HeaderCell>Requester</HeaderCell>
        <HeaderCell>Requested</HeaderCell>
        <HeaderCell>Type</HeaderCell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>Where are my shoes?</Cell>
        <Cell>John Smith</Cell>
        <Cell>15 minutes ago</Cell>
        <Cell>Ticket</Cell>
      </Row>
      <Row>
        <Cell>I was charged twice!</Cell>
        <Cell>Jane Doe</Cell>
        <Cell>25 minutes ago</Cell>
        <Cell>Call</Cell>
      </Row>
    </Body>
  </Table>
</ThemeProvider>;
```
