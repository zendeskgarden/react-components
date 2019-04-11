```jsx
<Code>inline code fragment</Code>
```

### Colors

```jsx
const types = ['Red', 'Yellow', 'Green', 'Grey', null];

<Grid>
  <Row>
    {types.map((type, index) => (
      <Col md={1}>
        <Code key={index} type={type ? type.toLowerCase() : type}>
          {type || 'Default'}
        </Code>
      </Col>
    ))}
  </Row>
</Grid>;
```

### Sizes

```jsx
const types = [null, 'Red', 'Yellow', 'Green'];
const sizes = ['Small', null, 'Large'];

<Grid>
  {types.map((type, index) => (
    <Row>
      {sizes.map((size, index) => (
        <Col md={1}>
          <Code
            key={index}
            size={size ? size.toLowerCase() : size}
            type={type ? type.toLowerCase() : type}
          >
            {size || 'Medium'}
          </Code>
        </Col>
      ))}
    </Row>
  ))}
</Grid>;
```
