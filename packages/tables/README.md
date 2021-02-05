# @zendeskgarden/react-tables [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-tables)](https://www.npmjs.com/package/@zendeskgarden/react-tables)

This package includes components relating to tables in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-tables

# Peer Dependencies - Also Required
npm install react react-dom styled-components @zendeskgarden/react-theming
```

## Usage

```jsx
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
        <HeaderCell>Subject</HeaderCell>
        <HeaderCell>Requester</HeaderCell>
        <HeaderCell>Requested</HeaderCell>
        <HeaderCell>Type</HeaderCell>
      </HeaderRow>
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
