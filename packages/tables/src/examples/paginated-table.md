```jsx
const { Pagination } = require('@zendeskgarden/react-pagination/src');
const { Avatar } = require('@zendeskgarden/react-avatars/src');
const { zdColorGrey600, zdSpacingSm } = require('@zendeskgarden/css-variables');
const { XL, MD } = require('@zendeskgarden/react-typography/src');

const data = [];
for (let x = 0; x < 70; x++) {
  data.push({
    id: `unique-id-${x}`,
    name: x % 2 === 0 ? 'John Doe' : 'Jane Doe',
    avatar: x % 2 === 0 ? 'images/jason.png' : 'images/amir.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  });
}

initialState = {
  currentPage: 1,
  pageSize: 5
};

const getPagedData = (data, currentPage, pageSize) => {
  const output = [];

  for (
    let x = (currentPage - 1) * pageSize;
    (x < data.length) & (x < currentPage * pageSize);
    x++
  ) {
    output.push(data[x]);
  }

  return output;
};

<div>
  <Table size="small">
    <Caption>
      <XL tag={Caption} style={{ marginBottom: zdSpacingSm }}>
        Paginated Tickets
      </XL>
      <MD style={{ color: zdColorGrey600 }}>
        {(state.currentPage - 1) * state.pageSize + 1}-{state.currentPage * state.pageSize} of{' '}
        {data.length}
      </MD>
    </Caption>
    <Head>
      <HeaderRow>
        <HeaderCell width="45px" />
        <HeaderCell width="100px">Name</HeaderCell>
        <HeaderCell>Description</HeaderCell>
      </HeaderRow>
    </Head>
    <Body>
      {getPagedData(data, state.currentPage, state.pageSize).map(row => (
        <Row key={row.id}>
          <Cell width="56px">
            <Avatar size="small">
              <img src={row.avatar} alt="Example Avatar" />
            </Avatar>
          </Cell>
          <Cell truncate width="100px">
            {row.name}
          </Cell>
          <Cell truncate>{row.description}</Cell>
        </Row>
      ))}
    </Body>
  </Table>
  <div style={{ height: 16 }} />
  <Pagination
    totalPages={Math.floor(data.length / state.pageSize)}
    currentPage={state.currentPage}
    onStateChange={setState}
  />
</div>;
```
