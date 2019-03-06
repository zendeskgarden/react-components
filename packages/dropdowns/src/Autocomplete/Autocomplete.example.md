```jsx
const COLORS = [
  { name: 'Support Green', value: '#78A300' },
  { name: 'Message Teal', value: '#37B8AF' },
  { name: 'Explore Blue', value: '#30AABC' },
  { name: 'Guide Pink', value: '#EB4962' },
  { name: 'Connect Red', value: '#EB6651' },
  { name: 'Chat Orange', value: '#F79A3E' },
  { name: 'Talk Yellow', value: '#EFC93D' },
  { name: 'Sell Gold', value: '#D4AE5E' }
];

const StyledInlineItem = styled.div`
  display: inline-block;
  margin-right: 8px;
`;

const StyledColorSample = styled.div`
  background-color: ${props => props.color};
  width: 1em;
  height: 1em;
`;

const StyledHexPreview = styled.span`
  color: ${props => props.color || 'inherit'};
`;

const StyledEmptyMessage = styled.div`
  text-align: center;
  margin: 16px;
`;

const ColorMenuItem = ({ value: color, ...other }) => (
  <Item value={color} {...other}>
    <StyledInlineItem>
      <StyledColorSample color={color.value} />
    </StyledInlineItem>
    <StyledInlineItem>
      {color.name} ({color.value})
    </StyledInlineItem>
  </Item>
);

initialState = {
  selectedItem: COLORS[0],
  inputValue: COLORS[0].name
};

const renderItems = () => {
  const matchingColors = COLORS.filter(color => {
    const name = color.name.toLowerCase();
    const value = color.value.toLowerCase();
    const input = state.inputValue.toLowerCase();

    return name.indexOf(input) !== -1 || value.indexOf(input) !== -1;
  });

  if (matchingColors.length === 0) {
    return <StyledEmptyMessage>No matches found</StyledEmptyMessage>;
  }

  return matchingColors.map(color => <ColorMenuItem value={color} key={color.value} />);
};

<Dropdown
  selectedItem={state.selectedItem}
  onSelect={selectedItem => setState({ selectedItem })}
  dropdownProps={{
    defaultHighlightedIndex: 0,
    itemToString: item => (item ? item.name : ''),
    inputValue: state.inputValue,
    onInputValueChange: inputValue => setState({ inputValue })
  }}
>
  <Autocomplete>
    {state.selectedItem.name}{' '}
    <StyledHexPreview color={state.selectedItem.value}>
      ({state.selectedItem.value})
    </StyledHexPreview>
  </Autocomplete>
  <Menu>{renderItems()}</Menu>
</Dropdown>;
```
