## DEPRECATION WARNING

This component has been deprecated in favor of the API provided in the
[@zendeskgarden/container-schedule](https://www.npmjs.com/package/@zendeskgarden/container-schedule)
package.

This component will be removed in a future major release.

```jsx static
initialState = {
  count: 0
};

<ScheduleContainer delayMS={0} tick={() => setState({ count: state.count + 1 })}>
  {() => <h1>{state.count}</h1>}
</ScheduleContainer>;
```
