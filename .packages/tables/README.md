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
import { Table } from '@zendeskgarden/react-tables';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Table>
    <Table.Caption>Your Unsolved Tickets</Table.Caption>
    <Table.Head>
      <Table.HeaderRow>
        <Table.HeaderCell>Subject</Table.HeaderCell>
        <Table.HeaderCell>Requester</Table.HeaderCell>
        <Table.HeaderCell>Requested</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
      </Table.HeaderRow>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Where are my shoes?</Table.Cell>
        <Table.Cell>John Smith</Table.Cell>
        <Table.Cell>15 minutes ago</Table.Cell>
        <Table.Cell>Ticket</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>I was charged twice!</Table.Cell>
        <Table.Cell>Jane Doe</Table.Cell>
        <Table.Cell>25 minutes ago</Table.Cell>
        <Table.Cell>Call</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</ThemeProvider>;
```
