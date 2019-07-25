When creating a sortable table, use the `SortableCell` component
to ensure that the header is interactable and all accessibility attributes are applied.

```jsx
const { XL } = require('@zendeskgarden/react-typography/src');

const data = [];

for (let x = 0; x < 10; x++) {
  data.push({
    id: `row-${x}`,
    subject: `Custom ticket view ${x + 1}`,
    requester: x % 2 === 0 ? 'John Smith' : 'Jane Doe',
    type: x % 3 === 0 ? 'Ticket' : 'Incident'
  });
}

initialState = {
  data,
  requesterSort: 'asc',
  typeSort: undefined
};

const sortData = (data, requesterSort, typeSort) => {
  if (!requesterSort && !typeSort) {
    return data;
  }

  let field, sortValue;

  if (requesterSort) {
    field = 'requester';
    sortValue = requesterSort;
  } else {
    field = 'type';
    sortValue = typeSort;
  }

  return data.sort((a, b) => {
    const aValue = a[field],
      bValue = b[field];

    if (aValue > bValue) {
      return sortValue === 'asc' ? 1 : -1;
    } else if (aValue < bValue) {
      return sortValue === 'asc' ? -1 : 1;
    } else {
      return 0;
    }
  });
};

<Table>
  <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
    Sortable Ticket View
  </XL>
  <Head>
    <HeaderRow>
      <HeaderCell width="33%">Subject</HeaderCell>
      <SortableCell
        scope="col"
        width="33%"
        onClick={() => {
          const { requesterSort } = state;

          if (requesterSort === 'asc') {
            setState({ requesterSort: 'desc', typeSort: undefined });
          } else if (requesterSort === 'desc') {
            setState({ requesterSort: undefined, typeSort: undefined });
          } else {
            setState({ requesterSort: 'asc', typeSort: undefined });
          }
        }}
        sort={state.requesterSort}
      >
        Requester
      </SortableCell>
      <SortableCell
        width="33%"
        onClick={() => {
          const { typeSort } = state;

          if (typeSort === 'asc') {
            setState({ typeSort: 'desc', requesterSort: undefined });
          } else if (typeSort === 'desc') {
            setState({ typeSort: undefined, requesterSort: undefined });
          } else {
            setState({ typeSort: 'asc', requesterSort: undefined });
          }
        }}
        sort={state.typeSort}
      >
        Type
      </SortableCell>
    </HeaderRow>
  </Head>
  <Body>
    {sortData(state.data.slice(), state.requesterSort, state.typeSort).map(row => (
      <Row key={row.id}>
        <Cell width="33%">{row.subject}</Cell>
        <Cell width="33%">{row.requester}</Cell>
        <Cell width="33%">{row.type}</Cell>
      </Row>
    ))}
  </Body>
</Table>;
```
