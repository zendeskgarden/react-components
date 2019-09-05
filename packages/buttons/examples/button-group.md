The `ButtonGroup` component requires the following structure. All `Button`
components require a unique `value`. All elements proxy the props of their
native DOM representations.

```jsx static
<ButtonGroup>
  <Button value="button-1">Item 1</Button>
  ...
</ButtonGroup>
```

### Types

```jsx
<Grid>
  <Row>
    <Col>
      <ButtonGroup>
        <Button value="button-1">Default</Button>
        <Button value="button-2">Default</Button>
        <Button value="button-3">Default</Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button primary value="button-1">
          Primary
        </Button>
        <Button primary value="button-2">
          Primary
        </Button>
        <Button primary value="button-3">
          Primary
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
  <Row>
    <Col>
      <ButtonGroup>
        <Button danger value="button-1">
          Danger
        </Button>
        <Button danger value="button-2">
          Danger
        </Button>
        <Button danger value="button-3">
          Danger
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button primary danger value="button-1">
          Primary Danger
        </Button>
        <Button primary danger value="button-2">
          Primary Danger
        </Button>
        <Button primary danger value="button-3">
          Primary Danger
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
  <Row>
    <Col>
      <ButtonGroup>
        <Button pill value="button-1">
          Pill
        </Button>
        <Button pill value="button-2">
          Pill
        </Button>
        <Button pill value="button-3">
          Pill
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button disabled value="button-1">
          Disabled
        </Button>
        <Button disabled value="button-2">
          Disabled
        </Button>
        <Button disabled value="button-3">
          Disabled
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row alignItems="center">
    <Col>
      <ButtonGroup>
        <Button size="small" value="button-1">
          Small
        </Button>
        <Button size="small" value="button-2">
          Small
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button size="medium" value="button-1">
          Medium
        </Button>
        <Button size="medium" value="button-2">
          Medium
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button size="large" value="button-1">
          Large
        </Button>
        <Button size="large" value="button-2">
          Large
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
</Grid>
```

### Controlled Usage

All elements proxy their events and attributes. This example uses controlled
state as well as custom `onClick` events for each button.

```jsx
const ExampleButtonGroup = ({ children, initialItem, ...props }) => {
  const [selectedItem, setSelectedItem] = React.useState(initialItem);

  const stateChange = newItem => {
    if (newItem) {
      alert(`Button "${newItem}" selected`);
      setSelectedItem(newItem);
    }
  };

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={stateChange} {...props}>
      {children}
    </ButtonGroup>
  );
};

<ExampleButtonGroup initialItem="button-2">
  <Button value="button-1" onClick={() => console.log('clicked')}>
    Item 1
  </Button>
  <Button value="button-2" onClick={() => console.log('clicked')}>
    Item 2
  </Button>
  <Button value="button-3" onClick={() => console.log('clicked')}>
    Item 3
  </Button>
  <Button disabled>Disabled item</Button>
  <Button value="button-4" onClick={() => console.log('clicked')}>
    Item 4
  </Button>
</ExampleButtonGroup>;
```
