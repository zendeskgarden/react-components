When building a table with the `react-tables` package follow the
[MDN Table Accessibility Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#Tables_for_visually_impaired_users)
guidelines to ensure your implementation is accessible to screen-readers.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Field,
  Label,
  Select,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const { Field: FormsField, Toggle, Label: ToggleLabel } = require('@zendeskgarden/react-forms/src');

initialState = {
  rowSize: 'medium',
  isStriped: false,
  isGrouped: false,
  isReadOnly: false,
  showCaption: true,
  data: [
    {
      content: (
        <>
          Status <strong style={{ marginLeft: DEFAULT_THEME.space.xxs }}>Open</strong>
        </>
      ),
      isGroupedRow: true
    },
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
      content: (
        <>
          Status <strong style={{ marginLeft: DEFAULT_THEME.space.xxs }}>Closed</strong>
        </>
      ),
      isGroupedRow: true
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

const StyledSpacer = styled.div`
  margin-bottom: ${props => props.theme.space.sm};
`;

const StyledCaption = styled(Caption)`
  line-height: ${props => props.theme.lineHeights.xl};
  font-size: ${props => props.theme.fontSizes.xl};
  margin-bottom: ${props => props.theme.space.sm};
`;

<Layout.Grid>
  <Well isRecessed>
    <Layout.Row>
      <Layout.Col md>
        <Dropdown selectedItem={state.rowSize} onSelect={rowSize => setState({ rowSize })}>
          <Field>
            <Label>Row Size</Label>
            <Select isCompact>{state.rowSize}</Select>
          </Field>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
      </Layout.Col>
    </Layout.Row>
    <Layout.Row>
      <Layout.Col>
        <FormsField>
          <Toggle
            checked={state.isStriped}
            onChange={e => setState({ isStriped: e.target.checked, isGrouped: false })}
          >
            <ToggleLabel>Striped rows</ToggleLabel>
          </Toggle>
        </FormsField>
      </Layout.Col>
      <Layout.Col>
        <FormsField>
          <Toggle
            checked={state.isGrouped}
            onChange={e => setState({ isGrouped: e.target.checked, isStriped: false })}
          >
            <ToggleLabel>Grouped rows</ToggleLabel>
          </Toggle>
        </FormsField>
      </Layout.Col>
      <Layout.Col>
        <FormsField>
          <Toggle
            checked={state.showCaption}
            onChange={e => setState({ showCaption: e.target.checked })}
          >
            <ToggleLabel>Show caption</ToggleLabel>
          </Toggle>
        </FormsField>
      </Layout.Col>
      <Layout.Col>
        <FormsField>
          <Toggle
            checked={state.isReadOnly}
            onChange={e => setState({ isReadOnly: e.target.checked })}
          >
            <ToggleLabel>Read only</ToggleLabel>
          </Toggle>
        </FormsField>
      </Layout.Col>
    </Layout.Row>
  </Well>
  <StyledSpacer />
  <Layout.Row>
    <Layout.Col>
      <Table size={state.rowSize} isReadOnly={state.isReadOnly}>
        {state.showCaption && <StyledCaption>Your Unsolved Tickets</StyledCaption>}
        <Head>
          <HeaderRow>
            <HeaderCell>Subject</HeaderCell>
            <HeaderCell>Requester</HeaderCell>
            <HeaderCell>Requested</HeaderCell>
            <HeaderCell>Type</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          {state.data
            .filter(row => state.isGrouped || !row.isGroupedRow)
            .map((row, index) => {
              if (row.isGroupedRow) {
                if (!state.isGrouped) {
                  return null;
                }

                return (
                  <GroupRow key={index}>
                    <Cell colSpan={4}>{row.content}</Cell>
                  </GroupRow>
                );
              }

              return (
                <Row key={index} isStriped={state.isStriped && index % 2 === 0}>
                  <Cell>{row.subject}</Cell>
                  <Cell>{row.requester}</Cell>
                  <Cell>{row.requested}</Cell>
                  <Cell>{row.type}</Cell>
                </Row>
              );
            })}
        </Body>
      </Table>
    </Layout.Col>
  </Layout.Row>
</Layout.Grid>;
```
