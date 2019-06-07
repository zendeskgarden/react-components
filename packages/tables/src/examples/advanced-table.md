```jsx
const { zdSpacingSm, zdSpacingXxs } = require('@zendeskgarden/css-variables');
const { XL } = require('@zendeskgarden/react-typography/src');

<Table>
  <XL tag={Caption} style={{ marginBottom: zdSpacingSm }}>
    Your Unsolved Tickets
  </XL>
  <Head>
    <HeaderRow>
      <HeaderCell width="25%">Subject</HeaderCell>
      <HeaderCell width="25%">Requester</HeaderCell>
      <HeaderCell width="25%">Requested</HeaderCell>
      <HeaderCell width="25%">Type</HeaderCell>
    </HeaderRow>
  </Head>
  <Body>
    <GroupRow>
      <Cell width="100%">
        Status <strong style={{ marginLeft: zdSpacingXxs }}>Open</strong>
      </Cell>
    </GroupRow>
    <Row>
      <Cell width="25%">Where are my shoes?</Cell>
      <Cell width="25%">John Smith</Cell>
      <Cell width="25%">15 minutes ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Was charged twice</Cell>
      <Cell width="25%">Jane Doe</Cell>
      <Cell width="25%">25 minutes ago</Cell>
      <Cell width="25%">Call</Cell>
    </Row>
    <GroupRow>
      <Cell width="100%">
        Status <strong style={{ marginLeft: zdSpacingXxs }}>Closed</strong>
      </Cell>
    </GroupRow>
    <Row>
      <Cell width="25%">Ticket 1</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 2</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
    <Row>
      <Cell width="25%">Ticket 3</Cell>
      <Cell width="25%">Unknown</Cell>
      <Cell width="25%">2 months ago</Cell>
      <Cell width="25%">Ticket</Cell>
    </Row>
  </Body>
</Table>;
```
