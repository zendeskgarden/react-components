Paragraphs may be sized as `small`, `medium` (the default), or `large`.
Sizing only controls spacing between sibling paragraphs, but the intention is
that the paragraph will contain typography which is sized to match.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item: MenuItem
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  count: 2,
  size: Paragraph.defaultProps.size
};

const Typography = ({ size, children, ...props }) => {
  switch (size) {
    case 'small':
      return <SM {...props}>{children}</SM>;
    case 'medium':
      return <MD {...props}>{children}</MD>;
    case 'large':
      return <LG {...props}>{children}</LG>;
  }
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField>
            <SelectLabel>Size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <MenuItem value="small">small</MenuItem>
            <MenuItem value="medium">medium (default)</MenuItem>
            <MenuItem value="large">large</MenuItem>
          </Menu>
        </Dropdown>
        <Field className="u-mt-xs">
          <Label>Count</Label>
          <Range
            max={3}
            min={1}
            value={state.count}
            onChange={event => setState({ count: event.target.value })}
          />
        </Field>
      </Well>
    </Col>
    <Col>
      <Paragraph size={state.size}>
        <Typography size={state.size} as="span">
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon
          amaranth tatsoi tomatillo melon <Code size={state.size}>azuki</Code> bean garlic. Parsley
          shallot courgette tatsoi pea sprouts fava bean collard greens{' '}
          <Code size={state.size}>dandelion</Code> okra wakame tomato. Dandelion cucumber earthnut
          pea peanut soko zucchini.
        </Typography>
      </Paragraph>
      {state.count >= 2 && (
        <Paragraph>
          <Typography size={state.size} as="span">
            Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
            lettuce <Code size={state.size}>brussels</Code> sprout cabbage. Catsear cauliflower
            garbanzo yarrow salsify chicory garlic bell <Code size={state.size}>pepper</Code> napa
            cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut.
          </Typography>
        </Paragraph>
      )}
      {state.count == 3 && (
        <Paragraph>
          <Typography size={state.size} as="span">
            Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio
            turnip chicory salsify pea sprouts <Code size={state.size}>fava</Code> bean. Dandelion
            zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens{' '}
            <Code size={state.size}>tigernut</Code> soybean radish artichoke wattle seed endive
            groundnut broccoli arugula.
          </Typography>
        </Paragraph>
      )}
    </Col>
  </Row>
</Grid>;
```
