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
      subject: 'Was charged twice',
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

const StyledRow = styled(Layout.Row)`
  margin-bottom: 20px;
`;

<Layout.Grid>
  <StyledRow>
    <Layout.Col md>
      <Checkbox checked={state.striped} onChange={e => setState({ striped: e.target.checked })}>
        <CheckboxLabel>Striped Styling</CheckboxLabel>
        <Hint>Applied to every other Row</Hint>
      </Checkbox>
    </Layout.Col>
    <Layout.Col md>
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
    </Layout.Col>
  </StyledRow>
  <Layout.Row>
    <Layout.Col>
      <Table size={state.rowSize === 'default' ? undefined : state.rowSize}>
        <StyledCaption>Your Unsolved Tickets</StyledCaption>
        <Head>
          <Row header>
            <HeaderCell scope="col">Subject</HeaderCell>
            <HeaderCell scope="col">Requester</HeaderCell>
            <HeaderCell scope="col">Requested</HeaderCell>
            <HeaderCell scope="col">Type</HeaderCell>
          </Row>
        </Head>
        <Body>
          {state.data.map((row, index) => (
            <Row key={index} striped={state.striped && index % 2 === 0}>
              <Cell>{row.subject}</Cell>
              <Cell>{row.requester}</Cell>
              <Cell>{row.requested}</Cell>
              <Cell>{row.type}</Cell>
            </Row>
          ))}
        </Body>
      </Table>
    </Layout.Col>
  </Layout.Row>
</Layout.Grid>;
```
