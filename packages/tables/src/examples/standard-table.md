```jsx
const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');
const { SelectField, Select, Label, Item } = require('@zendeskgarden/react-select');
const { Checkbox, Label: CheckboxLabel, Hint } = require('@zendeskgarden/react-checkboxes');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

initialState = {
  rowSize: 'default',
  striped: false,
  data: [
    {
      subject: 'Where are my shoes?',
      requester: 'John Smith',
      requested: '15 minutes ago',
      type: 'Ticket'
    },
    {
      subject: 'Wash chared twice',
      requester: 'Jane Doe',
      requested: '25 minutes ago',
      type: 'Call'
    },
    {
      subject: 'Ticket 1',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    },
    {
      subject: 'Ticket 2',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    },
    {
      subject: 'Ticket 3',
      requester: 'Unknown',
      requested: '2 months ago',
      type: 'Ticket'
    }
  ]
};

const StyledRow = styled(SudoGrid.Row)`
  margin-bottom: 20px;
`;

<SudoGrid.Grid>
  <StyledRow>
    <SudoGrid.Col md>
      <Checkbox checked={state.striped} onChange={e => setState({ striped: e.target.checked })}>
        <CheckboxLabel>Striped Styling</CheckboxLabel>
        <Hint>Applied to every other Row</Hint>
      </Checkbox>
    </SudoGrid.Col>
    <SudoGrid.Col md>
      <SelectField>
        <Label>Row Size</Label>
        <Select
          small
          selectedKey={state.rowSize}
          onChange={rowSize => setState({ rowSize })}
          options={[
            <Item key="small">small</Item>,
            <Item key="default">default</Item>,
            <Item key="large">large</Item>
          ]}
        >
          {state.rowSize}
        </Select>
      </SelectField>
    </SudoGrid.Col>
  </StyledRow>
  <SudoGrid.Row>
    <SudoGrid.Col>
      <Table size={state.rowSize === 'default' ? undefined : state.rowSize}>
        <StyledCaption>Your Unsolved Tickets</StyledCaption>
        <Head>
          <Row header>
            <HeaderCell>Subject</HeaderCell>
            <HeaderCell>Requester</HeaderCell>
            <HeaderCell>Requested</HeaderCell>
            <HeaderCell>Type</HeaderCell>
          </Row>
        </Head>
        <Body>
          {state.data.map((row, index) => (
            <Row striped={state.striped && index % 2 === 0}>
              <Cell>{row.subject}</Cell>
              <Cell>{row.requester}</Cell>
              <Cell>{row.requested}</Cell>
              <Cell>{row.type}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </SudoGrid.Col>
  </SudoGrid.Row>
</SudoGrid.Grid>;
```
