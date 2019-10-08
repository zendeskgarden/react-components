```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Checkbox, Field, Input, Label, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item: MenuItem
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  length: 1,
  levels: 1,
  ordered: false,
  size: UnorderedList.defaultProps.size,
  start: 1
};

const text = [
  'garden es bonus vobis proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic beet greens corn soko endive gumbo gourd shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato cucumber earthnut pea peanut soko zucchini.'.split(
    ' '
  ),
  'greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale celery potato scallion desert raisin horseradish spinach carrot soko lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin sprout coriander.'.split(
    ' '
  ),
  'water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify celery quandong swiss chard.'.split(
    ' '
  ),
  'rock melon radish asparagus spinach beetroot water spinach okra water chestnut ricebean pea catsear courgette summer purslane water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip chicory salsify pea sprouts fava bean dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens.'.split(
    ' '
  )
];
const getType = (ordered, level) => {
  const types = ordered ? ['decimal', 'lower-alpha', 'lower-roman'] : ['disc', 'circle', 'square'];
  const index = level % types.length;

  return types[index];
};

const NestedList = ({ level = 0, ...props }) => {
  const content = text.map(string => string.slice(0, state.length).join(' '));
  const List = state.ordered ? OrderedList : UnorderedList;

  if (level < state.levels) {
    return (
      <List start={state.start} type={getType(state.ordered, level)} {...props}>
        <List.Item>{content[0]}</List.Item>
        <List.Item>
          {content[1]}
          <NestedList level={level + 1} {...props} />
        </List.Item>
        <List.Item>{content[2]}</List.Item>
        <List.Item>{content[3]}</List.Item>
      </List>
    );
  } else {
    return <></>;
  }
};

<>
  <Well recessed style={{ width: 300 }}>
    <Field>
      <Checkbox
        checked={state.ordered}
        onChange={event => setState({ ordered: event.target.checked })}
      >
        <Label style={{ marginBottom: 8 }}>Ordered</Label>
      </Checkbox>
    </Field>
    <Field>
      <Label>Levels</Label>
      <Range
        max={9}
        min={1}
        value={state.levels}
        onChange={event => setState({ levels: event.target.value })}
      />
    </Field>
    <Field>
      <Label>Length</Label>
      <Range
        max={text[0].length}
        min={1}
        value={state.length}
        onChange={event => setState({ length: event.target.value })}
      />
    </Field>
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
    <Field>
      <Label>Start</Label>
      <Input
        disabled={!state.ordered}
        small
        type="number"
        value={state.start}
        onChange={event => setState({ start: event.target.value })}
      />
    </Field>
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
