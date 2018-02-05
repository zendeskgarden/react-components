This is an **example** documentation page

```jsx
initialState = {
  counter: 0
};

<Grid columns={3} stretched>
  <Example>
    <p>Current count: {state.counter.toString()}</p>
    <p>(Hover to see styled-components styling)</p>
  </Example>
  <button onClick={() => setState({ counter: state.counter + 1 })}>Increment Count</button>
  <button onClick={() => setState({ counter: state.counter - 1 })}>Decrement Count</button>
</Grid>
```
