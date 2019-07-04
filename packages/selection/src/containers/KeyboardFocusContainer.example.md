### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-keyboardfocus](https://garden.zendesk.com/react-containers/storybook/?path=/story/keyboardfocus-container--usekeyboardfocus).

This container will be removed in a future major release.

This render prop based component helps with differentiating
between focus events triggered by a keyboard event or a mouse event.

This comes in handy where you want to display focus styling only
when the component is tabbed to (like a button).

```jsx
<KeyboardFocusContainer>
  {({ keyboardFocused, getFocusProps }) => (
    <div
      {...getFocusProps({
        style: {
          color: keyboardFocused ? 'red' : 'inherit'
        }
      })}
    >
      {keyboardFocused ? 'Keyboard focused!' : 'Not keyboard focused'}
    </div>
  )}
</KeyboardFocusContainer>
```

You can pass any event props to `getFocusProps()` and they will be applied
to the element without overriding any internal events within
the `KeyboardFocusContainer`.

```jsx
initialState = { isFocused: false };

<KeyboardFocusContainer>
  {({ keyboardFocused, getFocusProps }) => (
    <div
      {...getFocusProps({
        onFocus: () => setState({ isFocused: true }),
        onBlur: () => setState({ isFocused: false })
      })}
    >
      {state.isFocused
        ? keyboardFocused
          ? 'Keyboard focused!'
          : 'Non-Keyboard focused!'
        : 'Not focused'}
    </div>
  )}
</KeyboardFocusContainer>;
```

The `KeyboardFocusContainer` will respect `preventDefault()` for any proxied event.

Here you can see the `onFocus` property being prevented.

```jsx
initialState = { isFocused: false };

<KeyboardFocusContainer>
  {({ getFocusProps, keyboardFocused }) => (
    <div
      {...getFocusProps({
        onFocus: event => {
          setState({ isFocused: true });
          event.preventDefault();
        },
        onBlur: () => setState({ isFocused: false })
      })}
    >
      {state.isFocused
        ? keyboardFocused
          ? 'Keyboard focused!'
          : 'Non-Keyboard focused!'
        : 'Not focused'}
    </div>
  )}
</KeyboardFocusContainer>;
```
