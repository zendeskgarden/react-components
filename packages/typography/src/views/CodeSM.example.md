```jsx
<CodeSM>inline code fragment</CodeSM>
```

### Colors

```jsx
const types = ['Red', 'Yellow', 'Green', 'Grey', null];

<Grid>
  <Row>
    {types.map(type => (
      <Col md={1}>
        <CodeSM type={type ? type.toLowerCase() : type}>{type || 'Default'}</CodeSM>
      </Col>
    ))}
  </Row>
</Grid>;
```
