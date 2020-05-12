```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select,
  Field,
  Label,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  hue: 'grey',
  size: 'medium'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.hue} onSelect={hue => setState({ hue })}>
          <Field>
            <Label>Hue</Label>
            <Select isCompact>{state.hue}</Select>
          </Field>
          <Menu isCompact>
            <Item value="grey">grey (default)</Item>
            <Item value="green">green</Item>
            <Item value="yellow">yellow</Item>
            <Item value="red">red</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <Field className="u-mt-xs">
            <Label>Size</Label>
            <Select isCompact>{state.size}</Select>
          </Field>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium (default)</Item>
            <Item value="large">large</Item>
            <Item value="inherit">inherit</Item>
          </Menu>
        </Dropdown>
      </Well>
    </Col>
    <Col alignSelf="center">
      <Code hue={state.hue} size={state.size}>
        veggies es bonus vobis
      </Code>
      <SM className="u-mt">
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth
        tatsoi tomatillo melon
        <Code hue={state.hue} size={state.size}>
          azuki
        </Code> bean garlic. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
        <Code hue={state.hue} size={state.size}>
          dandelion
        </Code>{' '}
        okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
      </SM>
      <MD className="u-mt">
        Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce
        <Code hue={state.hue} size={state.size}>
          brussels
        </Code> sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic bell
        <Code hue={state.hue} size={state.size}>
          pepper
        </Code>{' '}
        napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga tigernut.
      </MD>
      <LG className="u-mt">
        Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
        chicory salsify pea sprouts
        <Code hue={state.hue} size={state.size}>
          fava
        </Code> bean. Dandelion zucchini burdock yarrow chickpea dandelion sorrel courgette turnip greens
        <Code hue={state.hue} size={state.size}>
          tigernut
        </Code>{' '}
        soybean radish artichoke wattle seed endive groundnut broccoli arugula.
      </LG>
    </Col>
  </Row>
</Grid>;
```
