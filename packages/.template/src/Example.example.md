This is an **example** documentation page

```jsx
initialState = {
  counter: 0
};

<Grid>
  <Row>
    <Col>
      <Example>
        <p>Current count: {state.counter.toString()}</p>
        <p>(Hover to see styled-components styling)</p>
      </Example>
    </Col>
    <Col>
      <button onClick={() => setState({ counter: state.counter + 1 })}>Increment Count</button>
    </Col>
    <Col>
      <button onClick={() => setState({ counter: state.counter - 1 })}>Decrement Count</button>
    </Col>
  </Row>
</Grid>;
```
