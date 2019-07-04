### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-schedule](https://garden.zendesk.com/react-containers/storybook/?path=/story/schedule-container--useschedule).

This container will be removed in a future major release.

```jsx
initialState = {
  count: 0
};

<ScheduleContainer delayMS={0} tick={() => setState({ count: state.count + 1 })}>
  {() => <h1>{state.count}</h1>}
</ScheduleContainer>;
```
