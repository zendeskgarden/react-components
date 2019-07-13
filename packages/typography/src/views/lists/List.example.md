The following example shows unordered lists. Unordered lists may receive
style types of `circle`, `disc`, or `square`.

```jsx
<p style={{marginTop: 0}}>Type <Code>disc</Code> (default)</p>

<List>
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</List>

<p>Type <Code>circle</Code></p>

<List type="circle">
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</List>

<p>Type <Code>square</Code></p>

<List type="square">
  <Item>Item</Item>
  <Item>Item</Item>
  <Item>Item</Item>
</List>
```

The following example shows ordered lists. Ordered lists may receive style
types of `decimal`, `decimal-leading-zero`, `lower-alpha`, `upper-alpha`,
`lower-roman`, or `upper-roman`.

```jsx
<p style={{marginTop: 0}}>Type <Code>decimal</Code> (default)</p>

<List ordered>
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>

<p>Type <Code>decimal-leading-zero</Code></p>

<List ordered type="decimal-leading-zero">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>

<p>Type <Code>lower-alpha</Code></p>

<List ordered type="lower-alpha">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>

<p>Type <Code>upper-alpha</Code></p>

<List ordered type="upper-alpha">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>

<p>Type <Code>lower-roman</Code></p>

<List ordered type="lower-roman">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>

<p>Type <Code>upper-roman</Code></p>

<List ordered type="upper-roman">
  <Item>One</Item>
  <Item>Two</Item>
  <Item>Three</Item>
</List>
```

### Interactive Demo

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Checkbox,
  Field: CheckboxField,
  Label: CheckboxLabel
} = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item: MenuItem
} = require('@zendeskgarden/react-dropdowns/src');
const { Range, RangeField, Label: RangeLabel } = require('@zendeskgarden/react-ranges/src');

initialState = {
  length: 1,
  levels: 1,
  ordered: false,
  size: List.defaultProps.size
};

const text = 'garden es bonus vobis proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic beet greens corn soko endive gumbo gourd shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato cucumber earthnut pea peanut soko zucchini.'.split(
  ' '
);

const getType = (ordered, level) => {
  const types = ordered ? ['decimal', 'lower-alpha', 'lower-roman'] : ['disc', 'circle', 'square'];
  const index = level % types.length;

  return types[index];
};

const NestedList = ({ level = 0, ...props }) => {
  const content = text.slice(0, state.length).join(' ');

  if (level < state.levels) {
    return (
      <List type={getType(props.ordered, level)} {...props}>
        <Item>{content}</Item>
        <Item>
          {content}
          <NestedList level={level + 1} {...props} />
        </Item>
        <Item>{content}</Item>
        <Item>{content}</Item>
      </List>
    );
  } else {
    return <></>;
  }
};

<>
  <Well recessed style={{ width: 300 }}>
    <CheckboxField>
      <Checkbox
        checked={state.ordered}
        onChange={event => setState({ ordered: event.target.checked })}
      >
        <CheckboxLabel style={{ marginBottom: 8 }}>Ordered</CheckboxLabel>
      </Checkbox>
    </CheckboxField>
    <RangeField>
      <RangeLabel>Levels</RangeLabel>
      <Range
        max={9}
        min={1}
        value={state.levels}
        onChange={event => setState({ levels: event.target.value })}
      />
    </RangeField>
    <RangeField>
      <RangeLabel>Length</RangeLabel>
      <Range
        max={text.length}
        min={1}
        value={state.length}
        onChange={event => setState({ length: event.target.value })}
      />
    </RangeField>
    <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
      <SelectField>
        <SelectLabel>Size</SelectLabel>
        <Select small>{state.size}</Select>
      </SelectField>
      <Menu small>
        <MenuItem value="small">small</MenuItem>
        <MenuItem value="medium">medium (default)</MenuItem>
        <MenuItem value="large">large</MenuItem>
      </Menu>
    </Dropdown>
  </Well>
  <MD tag="p">
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
    black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water
    chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko
    chicory celtuce parsley jícama salsify.
  </MD>
  <NestedList {...state} />
  <MD tag="p" style={{ marginBottom: 0 }}>
    Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce
    brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell pepper
    napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut. Sea
    lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra.
  </MD>
</>;
```
