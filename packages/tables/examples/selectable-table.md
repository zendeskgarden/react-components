```jsx
const { XL } = require('@zendeskgarden/react-typography/src');
const { Field, Checkbox, Label } = require('@zendeskgarden/react-forms/src');

const data = [];

for (let x = 0; x < 5; x++) {
  data.push({
    id: `row-${x}`,
    title: `[${x + 1}] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  });
}

initialState = {
  selectedRows: {},
  rows: data
};

const isSelectAllIndeterminate = (selectedRows, rows) => {
  const numSelectedRows = Object.keys(selectedRows).length;
  return numSelectedRows > 0 && numSelectedRows < rows.length;
};

const isSelectAllChecked = (selectedRows, rows) => {
  return Object.keys(selectedRows).length === rows.length;
};

<Table>
  <XL tag={Caption} style={{ marginBottom: DEFAULT_THEME.space.sm }}>
    Selectable Ticket View
  </XL>
  <Head>
    <HeaderRow>
      <HeaderCell isMinimum>
        <Field>
          <Checkbox
            checked={isSelectAllChecked(state.selectedRows, state.rows)}
            onChange={e => {
              if (e.target.checked) {
                const selectedRows = state.rows.reduce((accum, value) => {
                  accum[value.id] = true;

                  return accum;
                }, {});

                setState({ selectedRows });
              } else {
                setState({ selectedRows: {} });
              }
            }}
          >
            <Label hidden indeterminate={isSelectAllIndeterminate(state.selectedRows, state.rows)}>
              Select all tickets
            </Label>
          </Checkbox>
        </Field>
      </HeaderCell>
      <HeaderCell scope="col">Long Truncated Title</HeaderCell>
    </HeaderRow>
  </Head>
  <Body>
    {state.rows.map(row => (
      <Row key={row.id} selected={state.selectedRows[row.id]}>
        <Cell isMinimum>
          <Field>
            <Checkbox
              checked={state.selectedRows[row.id] ? true : false}
              onChange={e => {
                const selectedRows = Object.assign({}, state.selectedRows);

                if (e.target.checked) {
                  selectedRows[row.id] = true;
                } else {
                  delete selectedRows[row.id];
                }

                setState({ selectedRows });
              }}
            >
              <Label hidden>Select ticket</Label>
            </Checkbox>
          </Field>
        </Cell>
        <Cell isTruncated title={row.title}>
          {row.title}
        </Cell>
      </Row>
    ))}
  </Body>
</Table>;
```
