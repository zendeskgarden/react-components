```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select,
  Field,
  Label,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  currentPage: 1,
  totalPages: 10,
  pagePadding: 2
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <Dropdown
          selectedItem={state.totalPages}
          onSelect={totalPages => setState({ totalPages, currentPage: 1 })}
        >
          <Field>
            <Label>Total pages</Label>
            <Select small>{state.totalPages}</Select>
          </Field>
          <Menu small>
            <Item value={3}>3</Item>
            <Item value={5}>5</Item>
            <Item value={10}>10</Item>
            <Item value={25}>25</Item>
            <Item value={50}>50</Item>
            <Item value={100}>100</Item>
            <Item value={1000}>1000</Item>
            <Item value={10000}>100000</Item>
            <Item value={1000000}>1000000</Item>
          </Menu>
        </Dropdown>
        <Dropdown
          selectedItem={state.pagePadding}
          onSelect={pagePadding => setState({ pagePadding, currentPage: 1 })}
        >
          <Field>
            <Label>Page padding</Label>
            <Select small>{state.pagePadding}</Select>
          </Field>
          <Menu small>
            <Item value={1}>1</Item>
            <Item value={2}>2</Item>
            <Item value={3}>3</Item>
            <Item value={4}>4</Item>
            <Item value={5}>5</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col alignSelf="center">
      <Pagination
        className="u-mv-xl"
        totalPages={state.totalPages}
        currentPage={state.currentPage}
        pagePadding={state.pagePadding}
        onChange={currentPage => setState({ currentPage })}
      />
    </Col>
  </Row>
</Grid>;
```
