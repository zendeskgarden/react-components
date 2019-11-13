The components within `react-tabs` receive accessibility roles
and attributes from the [useTabs()](https://www.npmjs.com/package/@zendeskgarden/container-tabs)
hook.

`Tab`s are linked to their respective `TabPanel` components with
a matching `item` prop.

```jsx static
<Tabs>
  <TabList>
    <Tab item="unique-value-1">Item 1</Tab>
    <Tab item="unique-value-2">Item 2</Tab>
  </TabList>
  <TabPanel item="unique-value-1">Tab 1 content</TabPanel>
  <TabPanel item="unique-value-2">Tab 2 content</TabPanel>
</Tabs>
```

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const { Field, Label, Toggle } = require('@zendeskgarden/react-forms/src');

tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

initialState = {
  isVertical: false,
  isDisabled: false,
  selectedItem: tabs[0]
};

const StyledSpacedField = styled(Field)`
  margin-bottom: ${props => props.theme.space.sm};
`;

<Grid>
  <Row>
    <Col md={4}>
      <Well recessed>
        <StyledSpacedField>
          <Toggle
            checked={state.isVertical}
            onChange={e => setState({ isVertical: e.target.checked })}
          >
            <Label>Vertical</Label>
          </Toggle>
        </StyledSpacedField>
        <StyledSpacedField>
          <Toggle
            checked={state.isDisabled}
            onChange={e => setState({ isDisabled: e.target.checked })}
          >
            <Label>Disabled</Label>
          </Toggle>
        </StyledSpacedField>
      </Well>
    </Col>
    <Col md={8}>
      <Tabs
        isVertical={state.isVertical}
        selectedItem={state.selectedItem}
        onChange={selectedItem => setState({ selectedItem })}
      >
        <TabList>
          {tabs.map(tab => (
            <Tab key={tab} item={tab} disabled={state.isDisabled && tab === 'Tab 2'}>
              {tab}
            </Tab>
          ))}
        </TabList>
        {tabs.map(tab => (
          <TabPanel key={tab} item={tab}>
            {tab} content
          </TabPanel>
        ))}
      </Tabs>
    </Col>
  </Row>
</Grid>;
```
