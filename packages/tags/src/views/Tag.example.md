The `Tag` component exposes a variety of styling options needed to support badges, pills, and tags.

### Shapes

Use pill or round class modifiers to shape a tag. Round tags are intended to contain a minimal
number of characters.

```jsx
<Grid>
  <Row>
    <Col md>
      <Tag>Default tag</Tag>
    </Col>
    <Col md>
      <Tag pill>Pill tag</Tag>
    </Col>
  </Row>
</Grid>
```

### Sizes

```jsx
<Grid>
  <Row>
    <Col md={4}>
      <Tag size="small">Small tag</Tag>
    </Col>
    <Col md={4}>
      <Tag>Default tag</Tag>
    </Col>
    <Col md={4}>
      <Tag size="large">Large tag</Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill>
        Small pill tag
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill>Default pill tag</Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill>
        Large pill tag
      </Tag>
    </Col>
    <Col md={4}>
      <Tag size="small" pill>
        1
      </Tag>
    </Col>
    <Col md={4}>
      <Tag pill>2</Tag>
    </Col>
    <Col md={4}>
      <Tag size="large" pill>
        12
      </Tag>
    </Col>
  </Row>
</Grid>
```

### Colors

```jsx
const types = [
  'Red',
  'Yellow',
  'Green',
  'Blue',
  'Grey',
  null,
  'Crimson',
  'Lemon',
  'Mint',
  'Azure',
  'Purple',
  'Kale',
  'Pink',
  'Orange',
  'Lime',
  'Royal',
  'Fuschia',
  'Teal'
];

<Grid>
  <Row>
    {types.map(type => (
      <Col md={2} key={type}>
        <Tag type={type ? type.toLowerCase() : type}>{type || 'Default'}</Tag>
      </Col>
    ))}
  </Row>
</Grid>;
```

### States

```jsx
<Grid>
  <Row>
    <Col md={6}>
      <Tag size="large">Default tag</Tag>
    </Col>
    <Col md={6}>
      <Tag size="large" focused>
        Focused tag
      </Tag>
    </Col>
    <Col md={6}>
      <Tag size="large" pill>
        Default pill
      </Tag>
    </Col>
    <Col md={6}>
      <Tag size="large" pill focused>
        Focused pill
      </Tag>
    </Col>
  </Row>
</Grid>
```
