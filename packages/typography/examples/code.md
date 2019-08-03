```jsx
<Code>inline code fragment</Code>
```

### Colors

```jsx
const hues = ['Red', 'Yellow', 'Green', 'Grey', null];

<Grid>
  <Row>
    {hues.map((hue, index) => (
      <Col md={2} key={hue}>
        <Code hue={hue ? hue.toLowerCase() : hue}>{hue || 'Default (Grey)'}</Code>
      </Col>
    ))}
  </Row>
</Grid>;
```

### Sizes

```jsx
const hues = [null, 'Red', 'Yellow', 'Green'];
const sizes = ['Small', 'Medium', 'Large', null];

<Grid>
  {hues.map(hue => (
    <Row key={hue}>
      {sizes.map((size, index) => (
        <Col md={2} key={index}>
          <Code size={size ? size.toLowerCase() : size} hue={hue ? hue.toLowerCase() : hue}>
            {size || 'Default (Medium)'}
          </Code>
        </Col>
      ))}
    </Row>
  ))}
</Grid>;
```
