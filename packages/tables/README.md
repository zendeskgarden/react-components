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
import {
  Table,
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@zendeskgarden/react-tables';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Table>
    <Caption>Your Unsolved Tickets</Caption>
    <Head>
      <HeaderRow>
        <HeaderCell width="25%">Subject</HeaderCell>
        <HeaderCell width="25%">Requester</HeaderCell>
        <HeaderCell width="25%">Requested</HeaderCell>
        <HeaderCell width="25%">Type</HeaderCell>
      </HeaderRow>
    </Head>
    <Body>
      <Row>
        <Cell width="25%">Where are my shoes?</Cell>
        <Cell width="25%">John Smith</Cell>
        <Cell width="25%">15 minutes ago</Cell>
        <Cell width="25%">Ticket</Cell>
      </Row>
      <Row>
        <Cell width="25%">I was charged twice!</Cell>
        <Cell width="25%">Jane Doe</Cell>
        <Cell width="25%">25 minutes ago</Cell>
        <Cell width="25%">Call</Cell>
      </Row>
    </Body>
  </Table>
</ThemeProvider>;
```
