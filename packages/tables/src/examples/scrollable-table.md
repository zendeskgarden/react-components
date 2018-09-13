Scrollable tables can be enabled with the `scrollable` prop. This defines the
height of the `<Body>` element.

```jsx
const { zdSpacingSm } = require('@zendeskgarden/css-variables');
const { XL } = require('@zendeskgarden/react-typography/src');

const rowData = [];

for (let x = 0; x < 100; x++) {
  rowData.push({
    id: x,
    subject: 'Example subject',
    requester: 'John Doe',
    requested: '15 minutes ago',
    type: 'Ticket'
  });
}

<Table scrollable="200px">
  <XL tag={Caption} style={{ marginBottom: zdSpacingSm }}>
    Your Scrollable Tickets
  </XL>
  <Head>
    <HeaderRow>
      <HeaderCell truncate width="25%">
        Subject
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Requester
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Requested
      </HeaderCell>
      <HeaderCell truncate width="25%">
        Type
      </HeaderCell>
    </HeaderRow>
  </Head>
  <Body>
    {rowData.map(data => (
      <Row key={data.id}>
        <Cell truncate width="25%">
          {data.subject}
        </Cell>
        <Cell truncate width="25%">
          {data.requester}
        </Cell>
        <Cell truncate width="25%">
          {data.requested}
        </Cell>
        <Cell truncate width="25%">
          {data.type}
        </Cell>
      </Row>
    ))}
  </Body>
</Table>;
```
