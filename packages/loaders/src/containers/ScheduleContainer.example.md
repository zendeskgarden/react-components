```jsx
initialState = {
  count: 0
};

<ScheduleContainer delayMS={0} tick={() => setState({ count: state.count + 1 })}>
  {() => <h1>{state.count}</h1>}
</ScheduleContainer>;
```
