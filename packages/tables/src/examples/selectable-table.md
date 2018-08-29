```jsx
const { zdFontSizeBeta, zdFontWeightSemibold, zdSpacingSm } = require('@zendeskgarden/css-variables');
const { Checkbox, Label } = require('@zendeskgarden/react-checkboxes/src');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

const data = [];

for(let x = 0; x < 5; x++) {
  data.push({
    id: `row-${x}`,
    title: `[${x+1}] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
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
}

<Table>
  <StyledCaption>Selectable Ticket View</StyledCaption>
  <Head>
    <Row header>
      <HeaderCell minimum>
        <Checkbox checked={isSelectAllChecked(state.selectedRows, state.rows)}
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
          }}>
          <Label
            hidden
            indeterminate={isSelectAllIndeterminate(state.selectedRows, state.rows)}>
            Select all tickets
          </Label>
        </Checkbox>
      </HeaderCell>
      <HeaderCell scope="col">Long Truncated Title</HeaderCell>
    </Row>
  </Head>
  <Body>
    {state.rows.map(row => (
      <Row key={row.id} selected={state.selectedRows[row.id]}>
        <Cell minimum>
          <Checkbox checked={state.selectedRows[row.id] ? true : false}
            onChange={e => {
              const selectedRows = Object.assign({}, state.selectedRows);

              if (e.target.checked) {
                selectedRows[row.id] = true;
              } else {
                delete selectedRows[row.id];
              }


              setState({ selectedRows });
            }}>
            <Label hidden>Select ticket</Label>
          </Checkbox>
        </Cell>
        <Cell truncate title={row.title}>{row.title}</Cell>
      </Row>
    ))}
  </Body>
</Table>
```
