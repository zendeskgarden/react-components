```jsx
<Code>inline code fragment</Code>
```

### Colors

```jsx
const types = ['Red', 'Yellow', 'Green', 'Grey', null];

<Grid>
  <Row>
    {types.map((type, index) => (
      <Col md={2} key={type}>
        <Code type={type ? type.toLowerCase() : type}>{type || 'Default (Grey)'}</Code>
      </Col>
    ))}
  </Row>
</Grid>;
```

### Sizes

```jsx
const types = [null, 'Red', 'Yellow', 'Green'];
const sizes = ['Small', 'Medium', 'Large', null];

<Grid>
  {types.map(type => (
    <Row key={type}>
      {sizes.map((size, index) => (
        <Col md={2} key={index}>
          <Code size={size ? size.toLowerCase() : size} type={type ? type.toLowerCase() : type}>
            {size || 'Default (Medium)'}
          </Code>
        </Col>
      ))}
    </Row>
  ))}
</Grid>;
```
