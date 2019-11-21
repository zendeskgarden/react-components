```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  alignItems: 'default',
  debug: true,
  columns: 12,
  gutters: 'md',
  justifyContent: 'default',
  rows: 1,
  offset: 0,
  size: 0,
  wrap: 'default'
};

<Grid>
  <Row>
    <Col>
      <Well recessed style={{ width: 180 }}>
        <Field>
          <Toggle
            checked={state.debug}
            onChange={event => setState({ debug: event.target.checked })}
          >
            <Label>Debug</Label>
          </Toggle>
        </Field>
        <Field className="u-mt-xs">
          <Label>Rows ({state.rows})</Label>
          <Range
            min={1}
            max={10}
            onChange={event => setState({ rows: parseInt(event.target.value, 10) })}
            value={state.rows}
          />
        </Field>
        <Dropdown selectedItem={state.columns} onSelect={columns => setState({ columns })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Columns</SelectLabel>
            <Select small>{state.columns}</Select>
          </SelectField>
          <Menu small>
            <Item value={4}>4</Item>
            <Item value={8}>8</Item>
            <Item value={12}>12</Item>
            <Item value={16}>16</Item>
            <Item value={24}>24</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.gutters} onSelect={gutters => setState({ gutters })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Gutters</SelectLabel>
            <Select small>{state.gutters}</Select>
          </SelectField>
          <Menu small>
            <Item value={false}>none</Item>
            <Item value="xs">xs</Item>
            <Item value="sm">sm</Item>
            <Item value="md">md</Item>
            <Item value="lg">lg</Item>
            <Item value="xl">xl</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>Size ({state.size.toString() === '0' ? 'none' : state.size})</Label>
          <Range
            max={state.columns}
            onChange={event => setState({ size: event.target.value })}
            value={state.size}
          />
        </Field>
        <Dropdown
          selectedItem={state.justifyContent}
          onSelect={justifyContent => setState({ justifyContent })}
        >
          <SelectField className="u-mt-xs">
            <SelectLabel>Justify content</SelectLabel>
            <Select small>{state.justifyContent}</Select>
          </SelectField>
          <Menu small>
            <Item value="default">default</Item>
            <Item value="start">start</Item>
            <Item value="end">end</Item>
            <Item value="center">center</Item>
            <Item value="between">between</Item>
            <Item value="around">around</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.alignItems} onSelect={alignItems => setState({ alignItems })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Align items</SelectLabel>
            <Select small>{state.alignItems}</Select>
          </SelectField>
          <Menu small>
            <Item value="default">default</Item>
            <Item value="start">start</Item>
            <Item value="end">end</Item>
            <Item value="center">center</Item>
            <Item value="baseline">baseline</Item>
            <Item value="stretch">stretch</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.wrap} onSelect={wrap => setState({ wrap })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Wrap</SelectLabel>
            <Select small>{state.wrap}</Select>
          </SelectField>
          <Menu small>
            <Item value="default">default</Item>
            <Item value="wrap">wrap</Item>
            <Item value="nowrap">nowrap</Item>
            <Item value="wrap-reverse">wrap-reverse</Item>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>Offset ({state.offset.toString() === '0' ? 'none' : state.offset})</Label>
          <Range
            max={state.columns - 1}
            onChange={event => setState({ offset: event.target.value })}
            value={state.offset}
          />
        </Field>
      </Well>
    </Col>
    <Col size="8">
      <div className="u-mt">
        <Grid columns={state.columns} gutters={state.gutters} isDebug={state.debug}>
          {Array(state.rows)
            .fill()
            .map((_, index) => (
              <Row
                key={index}
                alignItems={state.alignItems === 'default' ? undefined : state.alignItems}
                justifyContent={
                  state.justifyContent === 'default' ? undefined : state.justifyContent
                }
                wrap={state.wrap === 'default' ? undefined : state.wrap}
                style={{ height: '50%' }}
              >
                {Array(state.columns)
                  .fill()
                  .map((_, index) => (
                    <Col
                      key={index}
                      offset={index === 0 && state.offset > 0 ? state.offset : undefined}
                      size={state.size > 0 ? state.size : undefined}
                    >
                      <div style={{ height: `${1 + 0.5 * index}em` }}>{`${index + 1}`}</div>
                    </Col>
                  ))}
              </Row>
            ))}
        </Grid>
      </div>
    </Col>
  </Row>
</Grid>;
```

### Auto-Layout Equal-Width Columns

```jsx
<Grid isDebug>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Grid>
```

### Setting One Column Width

```jsx
<Grid isDebug>
  <Row>
    <Col>1 of 3</Col>
    <Col size={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col size={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Grid>
```

### Variable Width Content

```jsx
<Grid isDebug>
  <Row justifyContent="center" style={{ marginBottom: 8 }}>
    <Col lg={2}>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg={2}>3 of 3</Col>
  </Row>
  <Row justifyContent="center">
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col lg={2}>3 of 3</Col>
  </Row>
</Grid>
```

### Responsive Layouts

```jsx
<Grid isDebug>
  <Row>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
    <Col>col</Col>
  </Row>
  <Row>
    <Col size={8}>col[size=8]</Col>
    <Col size={4}>col[size=4]</Col>
  </Row>
</Grid>
```

### Stacked to Horizontal

```jsx
<Grid isDebug>
  <Row>
    <Col sm={8}>col[sm=8]</Col>
    <Col sm={4}>col[sm=4]</Col>
  </Row>
  <Row>
    <Col sm>col[sm]</Col>
    <Col sm>col[sm]</Col>
    <Col sm>col[sm]</Col>
  </Row>
</Grid>
```

### Mix and Match

```jsx
<Grid isDebug>
  <p>Stack the columns on mobile by making one full-width and the other half-width</p>
  <Row>
    <Col size={12} md={8}>
      col[size=12] col[md=8]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
  </Row>
  <p>Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop</p>
  <Row>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
    <Col size={6} md={4}>
      col[size=6] col[md=4]
    </Col>
  </Row>
  <p>Columns are always 50% wide, on mobile and desktop</p>
  <Row>
    <Col size={6}>col[size=6]</Col>
    <Col size={6}>col[size=6]</Col>
  </Row>
</Grid>
```

### Vertical Alignment

```jsx
<Grid isDebug>
  <Row
    alignItems="start"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row
    alignItems="center"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
  <Row
    alignItems="end"
    style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}
  >
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
    <Col>One of three columns</Col>
  </Row>
</Grid>
```

```jsx
<Grid isDebug>
  <Row style={{ minHeight: '4em', backgroundColor: 'rgba(255,0,0,.1)', marginBottom: 8 }}>
    <Col alignSelf="start">One of three columns</Col>
    <Col alignSelf="center">One of three columns</Col>
    <Col alignSelf="end">One of three columns</Col>
  </Row>
</Grid>
```

### Horizontal Alignment

```jsx
<Grid isDebug>
  <Row justifyContent="start">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="center">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="end">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="around">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
  <br />
  <Row justifyContent="between">
    <Col size={4}>One of 2 columns</Col>
    <Col size={4}>One of 2 columns</Col>
  </Row>
</Grid>
```
