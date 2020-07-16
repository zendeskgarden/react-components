```jsx
const { KEY_CODES } = require('@zendeskgarden/container-utilities');
const { Field, Checkbox, Label } = require('@zendeskgarden/react-forms/src');

const StyledCaption = styled(Caption)`
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.space.sm};
`;

const data = [];

for (let x = 0; x < 10; x++) {
  data.push({
    id: `row-${x}`,
    selected: false,
    title: `[${x + 1}] Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  });
}

initialState = {
  rows: data,
  shiftEnabled: false,
  focusedRowIndex: undefined
};

const isSelectAllIndeterminate = rows => {
  const numSelectedRows = rows.reduce((accumulator, row) => {
    if (row.selected) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  return numSelectedRows > 0 && numSelectedRows < rows.length;
};

const isSelectAllChecked = rows => {
  return rows.every(row => row.selected);
};

<Table>
  <StyledCaption>Selectable Ticket View</StyledCaption>
  <Head>
    <HeaderRow>
      <HeaderCell isMinimum>
        <Field>
          <Checkbox
            indeterminate={isSelectAllIndeterminate(state.rows)}
            checked={isSelectAllChecked(state.rows)}
            onChange={e => {
              if (e.target.checked) {
                const updatedRows = state.rows.map(row => ({ ...row, selected: true }));

                setState({ rows: updatedRows });
              } else {
                const updatedRows = state.rows.map(row => ({ ...row, selected: false }));

                setState({ rows: updatedRows });
              }
            }}
          >
            <Label hidden>Select all tickets</Label>
          </Checkbox>
        </Field>
      </HeaderCell>
      <HeaderCell scope="col">Long Truncated Title</HeaderCell>
    </HeaderRow>
  </Head>
  <Body>
    {state.rows.map((row, index) => (
      <Row key={row.id} isSelected={row.selected}>
        <Cell isMinimum>
          <Field>
            <Checkbox
              checked={row.selected ? true : false}
              onKeyDown={e => {
                if (e.keyCode === KEY_CODES.SHIFT) {
                  setState({ shiftEnabled: true });
                }
              }}
              onKeyUp={() => {
                setState({ shiftEnabled: false });
              }}
              onChange={e => {
                console.log('onChange', state.shiftEnabled, state.focusedRowIndex);

                const updatedRows = [...state.rows];

                if (state.shiftEnabled && state.focusedRowIndex !== undefined) {
                  const startIndex = Math.min(state.focusedRowIndex, index);
                  const endIndex = Math.max(state.focusedRowIndex, index);

                  const isAllChecked = updatedRows
                    .slice(startIndex, endIndex + 1)
                    .every(row => row.selected);

                  console.log(isAllChecked);

                  for (let x = startIndex; x <= endIndex; x++) {
                    if (x === index && isAllChecked) {
                      updatedRows[x].selected = true;
                      continue;
                    }

                    updatedRows[x].selected = !isAllChecked;
                  }
                } else {
                  if (e.target.checked) {
                    updatedRows[index].selected = true;
                  } else {
                    updatedRows[index].selected = false;
                  }
                }

                setState({ rows: updatedRows, focusedRowIndex: index });
              }}
            >
              <Label hidden>Select ticket</Label>
            </Checkbox>
          </Field>
        </Cell>
        <Cell isTruncated title={row.title}>
          <span>{row.title}</span>
        </Cell>
      </Row>
    ))}
  </Body>
</Table>;
```
