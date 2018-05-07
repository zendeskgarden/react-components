The `ControlledComponent` is an extension of `React.Component` that
adds several state utility functions to simplify interacting with state
that can be found in both _uncontrolled_ and _controlled_ usages.

These utility methods include:

* `isControlledProp(key: string)`
  * whether the provided key is a controlled prop
* `getControlledState()`
  * returns the current state including any prop keys that override
    it (useful for if a consumer only controls a subset of the
    available controlled props).
* `setControlledState(newState: object)`
  * calls `onStateChange` if with any props that are controlled
    and sets local state for any that aren't controlled.

```jsx
class ExampleContainer extends ControlledComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      count: 0
    };

    this.getButtonProps = this.getButtonProps.bind(this);
  }

  getButtonProps(props) {
    const { count } = this.getControlledState();

    return {
      ...props,
      onClick: event => {
        this.setControlledState({ count: count + 1 });
      }
    };
  }

  render() {
    const { children } = this.props;
    const { count } = this.getControlledState();

    return children({
      count,
      getButtonProps: this.getButtonProps
    });
  }
}

// <State> wrapper component is needed due to react-styleguidist

<div>
  <Grid columns={2} stretched>
    <ExampleContainer>
      {({ count, getButtonProps }) => (
        <div>
          <p>Count: {count && count.toString()}</p>
          <button {...getButtonProps()}>Uncontrolled increment</button>
        </div>
      )}
    </ExampleContainer>
    <State initialState={{ count: 4 }}>
      {(state, setState) => (
        <ExampleContainer count={state.count} onStateChange={newState => setState(newState)}>
          {({ count, getButtonProps }) => (
            <div>
              <p>Count: {count && count.toString()}</p>
              <button {...getButtonProps()}>Controlled increment</button>
            </div>
          )}
        </ExampleContainer>
      )}
    </State>
  </Grid>
</div>;
```
