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
  totalPages: 11,
  pagePadding: 2,
  pageGap: 2
};

<Grid>
  <Row>
    <Col size="auto">
      <Well isRecessed style={{ width: 200 }}>
        <Dropdown
          selectedItem={state.totalPages}
          onSelect={totalPages => setState({ totalPages, currentPage: 1 })}
        >
          <Field>
            <Label>Total pages</Label>
            <Select isCompact>{state.totalPages}</Select>
          </Field>
          <Menu isCompact>
            <Item value={0}>0</Item>
            <Item value={3}>3</Item>
            <Item value={5}>5</Item>
            <Item value={7}>7</Item>
            <Item value={9}>9</Item>
            <Item value={10}>10</Item>
            <Item value={11}>11</Item>
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
          <Field className="u-mt-xs">
            <Label>Page padding</Label>
            <Select isCompact>{state.pagePadding}</Select>
          </Field>
          <Menu isCompact>
            <Item value={0}>0</Item>
            <Item value={1}>1</Item>
            <Item value={2}>2</Item>
            <Item value={3}>3</Item>
            <Item value={4}>4</Item>
            <Item value={5}>5</Item>
          </Menu>
        </Dropdown>
        <Dropdown
          selectedItem={state.pageGap}
          onSelect={pageGap => setState({ pageGap, currentPage: 1 })}
        >
          <Field className="u-mt-xs">
            <Label>Page gap</Label>
            <Select isCompact>{state.pageGap}</Select>
          </Field>
          <Menu isCompact>
            <Item value={0}>0</Item>
            <Item value={1}>1</Item>
            <Item value={2}>2</Item>
            <Item value={3}>3</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col alignSelf="center">
      <nav aria-label="Basic pagination">
        <Pagination
          className="u-mv-xl"
          totalPages={state.totalPages}
          currentPage={state.currentPage}
          pagePadding={state.pagePadding}
          pageGap={state.pageGap}
          onChange={currentPage => setState({ currentPage })}
        />
      </nav>
    </Col>
  </Row>
</Grid>;
```
