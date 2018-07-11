```jsx
const { Pagination } = require('@zendeskgarden/react-pagination');
const { Avatar } = require('@zendeskgarden/react-avatars');
const {
  zdFontSizeBeta,
  zdFontSizeEpsilon,
  zdColorGrey500,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');

const StyledCaption = styled.div`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

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

const CurrentPages = styled.div`
  color: ${zdColorGrey500};
  font-size: ${zdFontSizeEpsilon};
`;

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
      <StyledCaption>Paginated Tickets</StyledCaption>
      <CurrentPages>
        {(state.currentPage - 1) * state.pageSize + 1}-{state.currentPage * state.pageSize} of{' '}
        {data.length}
      </CurrentPages>
    </Caption>
    <Head>
      <Row header>
        <HeaderCell scope="col" style={{ width: 45 }} />
        <HeaderCell scope="col" style={{ width: 100 }}>Name</HeaderCell>
        <HeaderCell>Description</HeaderCell>
      </Row>
    </Head>
    <Body>
      {getPagedData(data, state.currentPage, state.pageSize).map(row => (
        <Row key={row.id}>
          <Cell style={{ width: 45 }}>
            <Avatar size="small">
              <img src={row.avatar} alt="Example Avatar" />
            </Avatar>
          </Cell>
          <Cell truncate style={{ width: 100 }}>
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
