```jsx
const buttons = ['Button 1', 'Button 2', 'Button 3'];

<ButtonGroupContainer>
  {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
    <ButtonGroupView {...getGroupProps()}>
      {buttons.map(button => (
        <Button
          {...getButtonProps({
            key: button,
            selected: selectedKey === button,
            focused: focusedKey === button
          })}
        >
          {button}
        </Button>
      ))}
    </ButtonGroupView>
  )}
</ButtonGroupContainer>;
```

```jsx
const buttons = [
  { title: 'Button 1' },
  { title: 'Disabled', disabled: true },
  { title: 'Button 3' }
];

<ButtonGroupContainer>
  {({ getGroupProps, getButtonProps, selectedKey, focusedKey }) => (
    <ButtonGroupView {...getGroupProps()}>
      {buttons.map(button => {
        if (button.disabled) {
          return (
            <Button disabled key={button.title}>
              {button.title}
            </Button>
          );
        }

        return (
          <Button
            {...getButtonProps({
              key: button.title,
              selected: selectedKey === button.title,
              focused: focusedKey === button.title
            })}
          >
            {button.title}
          </Button>
        );
      })}
    </ButtonGroupView>
  )}
</ButtonGroupContainer>;
```
