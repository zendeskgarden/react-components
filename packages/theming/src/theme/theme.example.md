This is the Garden theme.

```jsx
const { defaultTheme } = require('@zendeskgarden/react-theming/src');

const StyledTheme = styled.pre`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.mono};
  font-size: ${props => props.theme.fontSizes.mono.sm};
`;

const replacer = (key, value) => {
  let retVal = value;

  if (typeof value === 'function') {
    const fn = value.toString();
    const start = fn.indexOf('(');
    const end = fn.indexOf('\n') - 2;

    retVal = `${fn.substring(start, end)} => expression`;
  }

  return retVal;
};

<StyledTheme>{JSON.stringify(defaultTheme, replacer, '  ')}</StyledTheme>;
```
