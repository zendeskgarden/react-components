```jsx
<Code>inline code fragment</Code>
```

### Colors

```jsx
const types = ['Red', 'Yellow', 'Green', 'Grey', null];

<Grid>
  <Row>
    {types.map((type, index) => (
      <Col md={2}>
        <Code key={index} type={type ? type.toLowerCase() : type}>
          {type || 'Default (Grey)'}
        </Code>
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
    <Row>
      {sizes.map((size, index) => (
        <Col md={2}>
          <Code
            key={index}
            size={size ? size.toLowerCase() : size}
            type={type ? type.toLowerCase() : type}
          >
            {size || 'Default (Medium)'}
          </Code>
        </Col>
      ))}
    </Row>
  ))}
</Grid>;
```
