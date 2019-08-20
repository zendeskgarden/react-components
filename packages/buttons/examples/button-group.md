The `ButtonGroup` component requires the following structure. All `Button`
components require a unique `key`. All elements proxy the props of their
native DOM representations.

```jsx static
<ButtonGroup>
  <Button key="button-1">Item 1</Button>
  ...
</ButtonGroup>
```

### Types

```jsx
<Grid>
  <Row>
    <Col>
      <ButtonGroup>
        <Button key="button-1">Default</Button>
        <Button key="button-2">Default</Button>
        <Button key="button-3">Default</Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button primary key="button-1">
          Primary
        </Button>
        <Button primary key="button-2">
          Primary
        </Button>
        <Button primary key="button-3">
          Primary
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
  <Row>
    <Col>
      <ButtonGroup>
        <Button danger key="button-1">
          Danger
        </Button>
        <Button danger key="button-2">
          Danger
        </Button>
        <Button danger key="button-3">
          Danger
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button primary danger key="button-1">
          Primary Danger
        </Button>
        <Button primary danger key="button-2">
          Primary Danger
        </Button>
        <Button primary danger key="button-3">
          Primary Danger
        </Button>
      </ButtonGroup>
    </Col>
  </Row>
  <Row>
    <Col>
      <ButtonGroup>
        <Button pill key="button-1">
          Pill
        </Button>
        <Button pill key="button-2">
          Pill
        </Button>
        <Button pill key="button-3">
          Pill
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button disabled key="button-1">
          Disabled
        </Button>
        <Button disabled key="button-2">
          Disabled
        </Button>
        <Button disabled key="button-3">
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
        <Button size="small" key="button-1">
          Small
        </Button>
        <Button size="small" key="button-2">
          Small
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button size="medium" key="button-1">
          Medium
        </Button>
        <Button size="medium" key="button-2">
          Medium
        </Button>
      </ButtonGroup>
    </Col>
    <Col>
      <ButtonGroup>
        <Button size="large" key="button-1">
          Large
        </Button>
        <Button size="large" key="button-2">
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
const ExampleButtonGroup = ({ children, initialKey, ...props }) => {
  const [selectedItem, setSelectedItem] = React.useState(initialKey);
  const onSelect = selectedItem => {
      alert(`Button "${selectedItem}" selected`);
      setSelectedItem(selectedItem);
  };

  return (
    <ButtonGroup selectedItem={selectedItem} onSelect={onSelect} {...props}>
      {children}
    </ButtonGroup>
  );
};

<ExampleButtonGroup initialKey="button-2">
  <Button key="button-1" onClick={() => console.log('clicked')}>
    Item 1
  </Button>
  <Button key="button-2" onClick={() => console.log('clicked')}>
    Item 2
  </Button>
  <Button key="button-3" onClick={() => console.log('clicked')}>
    Item 3
  </Button>
  <Button disabled>Disabled item</Button>
  <Button key="button-4" onClick={() => console.log('clicked')}>
    Item 4
  </Button>
</ExampleButtonGroup>;
```
