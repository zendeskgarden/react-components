The `SplitButton` pattern is accomplished with:

- `SplitButton` component as a container
- `Button` component for the main action
- `ChevronButton` component for the secondary actions
- `Dropdown/Menu/Trigger` components from [@zendeskgarden/react-dropdowns](https://garden.zendesk.com/react-components/dropdowns/)
  package for the secondary actions menu

```jsx
const { Dropdown, Trigger, Menu, Item } = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  count: 0,
  isOpen: false
};

const increment = (num = 0) => setState({ count: state.count + num });

<Grid>
  <Row>
    <Col sm={6}>
      <SplitButton>
        <Button onClick={() => increment(1)} key="primary">
          Add 1
        </Button>
        <Dropdown
          onStateChange={changes => {
            if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
              setState({ isOpen: changes.isOpen });
            }
          }}
          onSelect={value => increment(value)}
        >
          <Trigger>
            <ChevronButton key="secondary" rotated={state.isOpen} aria-label="Other Options" />
          </Trigger>
          <Menu placement="bottom-end">
            <Item value={5}>Add 5</Item>
            <Item value={10}>Add 10</Item>
          </Menu>
        </Dropdown>
      </SplitButton>
    </Col>
    <Col sm={6}>Total Count: {state.count}</Col>
  </Row>
</Grid>;
```

### Types

```jsx
<Grid>
  <Row>
    <Col>
      <SplitButton>
        <Button>Default</Button>
        <ChevronButton />
      </SplitButton>
    </Col>
    <Col>
      <SplitButton>
        <Button primary>Primary</Button>
        <ChevronButton primary />
      </SplitButton>
    </Col>
  </Row>
  <Row>
    <Col>
      <SplitButton>
        <Button danger>Danger</Button>
        <ChevronButton danger />
      </SplitButton>
    </Col>
    <Col>
      <SplitButton>
        <Button primary danger>
          Primary Danger
        </Button>
        <ChevronButton primary danger />
      </SplitButton>
    </Col>
  </Row>
  <Row>
    <Col>
      <SplitButton>
        <Button pill>Pill</Button>
        <ChevronButton pill />
      </SplitButton>
    </Col>
    <Col>
      <SplitButton>
        <Button disabled>Disabled</Button>
        <ChevronButton disabled />
      </SplitButton>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row alignItems="center">
    <Col>
      <SplitButton>
        <Button size="small">Small</Button>
        <ChevronButton size="small" />
      </SplitButton>
    </Col>
    <Col>
      <SplitButton>
        <Button size="medium">Medium</Button>
        <ChevronButton size="medium" />
      </SplitButton>
    </Col>
    <Col>
      <SplitButton>
        <Button size="large">Large</Button>
        <ChevronButton size="large" />
      </SplitButton>
    </Col>
  </Row>
</Grid>
```
