### Offset Pagination

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
      <nav aria-label="Basic offset pagination">
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

### Cursor Pagination

#### Previous & Next

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { getColor } = require('@zendeskgarden/react-theming/src');

const StyledCircle = styled.div`
  box-sixing: border-box;
  border: ${props => props.theme.borders.sm} transparent;
  margin: 0 ${props => props.theme.space.base}px;
  border-radius: 100%;
  height: ${props => props.theme.space.base * 3}px;
  width: ${props => props.theme.space.base * 3}px;
`;

const CircleStroke = styled(StyledCircle)`
  border-color: ${props => getColor('grey', 300, props.theme)};
`;

const CircleFill = styled(StyledCircle)`
  background: ${props => getColor('blue', 600, props.theme)};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => `${props.theme.space.base * 5}px 0`};
`;

const CursorPaginationExample = () => {
  const [cursor, setCursor] = React.useState(0);
  const [startLast, setStartLast] = React.useState(true);
  const circles = [0, 1, 2, 3, 4];
  const onNext = () => {
    if (cursor < circles.length - 1) {
      setCursor(cursor + 1);
    }
  };
  const onPrevious = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };
  const onFirst = () => setCursor(0);
  const onLast = () => setCursor(circles.length - 1);

  return (
    <Grid>
      <Row alignItems="center">
        <Col alignSelf="center" className="u-mb u-mt">
          <FlexContainer>
            {circles.map((circle, index) =>
              index === cursor ? <CircleFill key={index} /> : <CircleStroke key={index} />
            )}
          </FlexContainer>
          <div className="u-visibility-screenreader" aria-live="polite">
            {`The cursor is ${cursor}`}
          </div>
          <CursorPagination aria-label="Cursor pagination">
            <CursorPagination.Previous onClick={onPrevious} disabled={cursor === 0}>
              Previous
            </CursorPagination.Previous>
            <CursorPagination.Next onClick={onNext} disabled={cursor === circles.length - 1}>
              Next
            </CursorPagination.Next>
          </CursorPagination>
        </Col>
      </Row>
    </Grid>
  );
};

<CursorPaginationExample />;
```

#### First, Previous, Next, & Last

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { getColor } = require('@zendeskgarden/react-theming/src');

const StyledCircle = styled.div`
  box-sixing: border-box;
  border: ${props => props.theme.borders.sm} transparent;
  margin: 0 ${props => props.theme.space.base}px;
  border-radius: 100%;
  height: ${props => props.theme.space.base * 3}px;
  width: ${props => props.theme.space.base * 3}px;
`;

const CircleStroke = styled(StyledCircle)`
  border-color: ${props => getColor('grey', 300, props.theme)};
`;

const CircleFill = styled(StyledCircle)`
  background: ${props => getColor('blue', 600, props.theme)};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => `${props.theme.space.base * 5}px 0`};
`;

const CursorPaginationExample = () => {
  const [cursor, setCursor] = React.useState(0);
  const [startLast, setStartLast] = React.useState(true);
  const circles = [0, 1, 2, 3, 4];
  const onNext = () => {
    if (cursor < circles.length - 1) {
      setCursor(cursor + 1);
    }
  };
  const onPrevious = () => {
    if (cursor > 0) {
      setCursor(cursor - 1);
    }
  };
  const onFirst = () => setCursor(0);
  const onLast = () => setCursor(circles.length - 1);

  return (
    <Grid>
      <Row alignItems="center">
        <Col alignSelf="center" className="u-mb u-mt">
          <FlexContainer>
            {circles.map((circle, index) =>
              index === cursor ? <CircleFill key={index} /> : <CircleStroke key={index} />
            )}
          </FlexContainer>
          <div className="u-visibility-screenreader" aria-live="polite">
            {`The cursor is ${cursor}`}
          </div>
          <CursorPagination aria-label="Cursor pagination">
            <CursorPagination.First onClick={onFirst} disabled={cursor === 0}>
              First
            </CursorPagination.First>
            <CursorPagination.Previous onClick={onPrevious} disabled={cursor === 0}>
              Previous
            </CursorPagination.Previous>
            <CursorPagination.Next onClick={onNext} disabled={cursor === circles.length - 1}>
              Next
            </CursorPagination.Next>
            <CursorPagination.Last onClick={onLast} disabled={cursor === circles.length - 1}>
              Last
            </CursorPagination.Last>
          </CursorPagination>
        </Col>
      </Row>
    </Grid>
  );
};

<CursorPaginationExample />;
```
