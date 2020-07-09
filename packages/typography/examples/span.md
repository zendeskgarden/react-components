Spans of text are highlighted in the example below.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Checkbox, Radio, Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const AsteriskIcon = require('@zendeskgarden/svg-icons/src/16/asterisk-stroke.svg').default;
const AtIcon = require('@zendeskgarden/svg-icons/src/16/at-stroke.svg').default;
const BoxIcon = require('@zendeskgarden/svg-icons/src/16/box-3d-stroke.svg').default;
const CircleIcon = require('@zendeskgarden/svg-icons/src/16/circle-full-stroke.svg').default;
const DashedCircleIcon = require('@zendeskgarden/svg-icons/src/16/circle-stroke.svg').default;
const GlobeIcon = require('@zendeskgarden/svg-icons/src/16/globe-stroke.svg').default;
const GridIcon = require('@zendeskgarden/svg-icons/src/16/grid-3x3-stroke.svg').default;
const HeartIcon = require('@zendeskgarden/svg-icons/src/16/heart-stroke.svg').default;
const NumberIcon = require('@zendeskgarden/svg-icons/src/16/number-stroke.svg').default;
const PlusIcon = require('@zendeskgarden/svg-icons/src/16/plus-stroke.svg').default;
const ShapesIcon = require('@zendeskgarden/svg-icons/src/16/shapes-stroke.svg').default;
const ShieldIcon = require('@zendeskgarden/svg-icons/src/16/shield-stroke.svg').default;
const SmileyIcon = require('@zendeskgarden/svg-icons/src/16/smiley-stroke.svg').default;
const StarIcon = require('@zendeskgarden/svg-icons/src/16/star-stroke.svg').default;
const XIcon = require('@zendeskgarden/svg-icons/src/16/x-stroke.svg').default;

initialState = {
  size: 'MD',
  hue: 'fuschia'
};

const Typography = ({ size, children, ...props }) => {
  switch (size) {
    case 'SM':
      return <SM {...props}>{children}</SM>;
    case 'MD':
      return <MD {...props}>{children}</MD>;
    case 'LG':
      return <LG {...props}>{children}</LG>;
    case 'XL':
      return <XL {...props}>{children}</XL>;
    case 'XXL':
      return <XXL {...props}>{children}</XXL>;
    case 'XXXL':
      return <XXXL {...props}>{children}</XXXL>;
  }
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed style={{ width: 300 }}>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <SelectField>
            <SelectLabel>Paragraph size</SelectLabel>
            <Select isCompact>{state.size}</Select>
          </SelectField>
          <Menu isCompact>
            <Item value="SM">SM</Item>
            <Item value="MD">MD</Item>
            <Item value="LG">LG</Item>
            <Item value="XL">XL</Item>
            <Item value="XXL">XXL</Item>
            <Item value="XXXL">XXXL</Item>
          </Menu>
        </Dropdown>
        <Dropdown selectedItem={state.hue} onSelect={hue => setState({ hue })}>
          <SelectField className="u-mt-xs">
            <SelectLabel>Hue</SelectLabel>
            <Select isCompact>{state.hue}</Select>
          </SelectField>
          <Menu isCompact maxHeight="240px">
            <Item value="inherit">inherit</Item>
            <Item value="grey">grey</Item>
            <Item value="blue">blue</Item>
            <Item value="kale">kale</Item>
            <Item value="red">red</Item>
            <Item value="green">green</Item>
            <Item value="yellow">yellow</Item>
            <Item value="fuschia">fuschia</Item>
            <Item value="pink">pink</Item>
            <Item value="crimson">crimson</Item>
            <Item value="orange">orange</Item>
            <Item value="lemon">lemon</Item>
            <Item value="lime">lime</Item>
            <Item value="mint">mint</Item>
            <Item value="teal">teal</Item>
            <Item value="azure">azure</Item>
            <Item value="royal">royal</Item>
            <Item value="purple">purple</Item>
          </Menu>
        </Dropdown>
        <div className="u-mt-sm" role="group" aria-label="bold">
          <Field>
            <Label>Bold</Label>
          </Field>
          <Field>
            <Radio
              name="bold"
              value="inherit"
              checked={state.bold === undefined}
              onChange={event => setState({ bold: undefined })}
            >
              <Label isRegular>Inherit</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="bold"
              value="on"
              checked={state.bold === true}
              onChange={event => setState({ bold: true })}
            >
              <Label isRegular>On</Label>
            </Radio>
          </Field>
          <Field>
            <Radio
              name="bold"
              value="off"
              checked={state.bold === false}
              onChange={event => setState({ bold: false })}
            >
              <Label isRegular>Off</Label>
            </Radio>
          </Field>
        </div>
        <div className="u-mt-sm" role="group" aria-label="icons">
          <Field>
            <Label>Icons</Label>
          </Field>
          <Field>
            <Checkbox
              checked={state.startIcon}
              onChange={event => setState({ startIcon: event.target.checked })}
            >
              <Label isRegular>Start</Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox
              checked={state.defaultIcon}
              onChange={event => setState({ defaultIcon: event.target.checked })}
            >
              <Label isRegular>Default</Label>
            </Checkbox>
          </Field>
          <Field>
            <Checkbox
              checked={state.endIcon}
              onChange={event => setState({ endIcon: event.target.checked })}
            >
              <Label isRegular>End</Label>
            </Checkbox>
          </Field>
        </div>
        <Field className="u-mt-sm">
          <Toggle
            checked={state.monospace}
            disabled={/^X/.test(state.size)}
            onChange={event => setState({ monospace: event.target.checked })}
          >
            <Label>Monospace</Label>
          </Toggle>
        </Field>
      </Well>
    </Col>
    <Col>
      <Typography as="p" size={state.size}>
        <Span
          hue={state.hue === 'inherit' ? null : state.hue}
          isBold={state.bold}
          isMonospace={state.monospace}
        >
          {state.startIcon && (
            <Span.StartIcon>
              <DashedCircleIcon />
            </Span.StartIcon>
          )}
          <>Veggies es</> {state.defaultIcon && (
            <Span.Icon>
              <AsteriskIcon />
            </Span.Icon>
          )} <>bonus vobis</>
          {state.endIcon && (
            <Span.EndIcon>
              <CircleIcon />
            </Span.EndIcon>
          )}
        </Span>
      </Typography>
      <Typography as="p" size={state.size}>
        Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
        chicory salsify pea sprouts fava bean. Dandelion
        <Span
          hue={state.hue === 'inherit' ? null : state.hue}
          isBold={state.bold}
          isMonospace={state.monospace}
        >
          {state.startIcon && (
            <Span.StartIcon>
              <GlobeIcon />
            </Span.StartIcon>
          )}
          <>zucchini burdock yarrow</> {state.defaultIcon && (
            <Span.Icon>
              <NumberIcon />
            </Span.Icon>
          )} <>chickpea dandelion</>
          {state.endIcon && (
            <Span.EndIcon>
              <GridIcon />
            </Span.EndIcon>
          )}
        </Span> sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut
        broccoli arugula.
      </Typography>
      <Typography as="p" isBold size={state.size}>
        Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean
        corn fava bean
        <Span
          hue={state.hue === 'inherit' ? null : state.hue}
          isBold={state.bold}
          isMonospace={state.monospace}
        >
          {state.startIcon && (
            <Span.StartIcon>
              <SmileyIcon />
            </Span.StartIcon>
          )}
          <>mustard tigernut</> {state.defaultIcon && (
            <Span.Icon>
              <XIcon />
            </Span.Icon>
          )} <>jícama green bean</>
          {state.endIcon && (
            <Span.EndIcon>
              <StarIcon />
            </Span.EndIcon>
          )}
        </Span> celtuce collard greens avocado quandong fennel gumbo.
      </Typography>
      {['SM', 'MD', 'LG'].indexOf(state.size) !== -1 && (
        <>
          <Typography as="p" isMonospace size={state.size}>
            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
            lettuce
            <Span hue={state.hue === 'inherit' ? null : state.hue} isBold={state.bold}>
              {state.startIcon && (
                <Span.StartIcon>
                  <ShapesIcon />
                </Span.StartIcon>
              )}
              <>water chestnut eggplant</> {state.defaultIcon && (
                <Span.Icon>
                  <PlusIcon />
                </Span.Icon>
              )} <>winter purslane fennel</>
              {state.endIcon && (
                <Span.EndIcon>
                  <ShieldIcon />
                </Span.EndIcon>
              )}
            </Span> azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama
            salsify.
          </Typography>
          <Typography as="p" isBold isMonospace size={state.size}>
            Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori.
            Grape wattle
            <Span hue={state.hue === 'inherit' ? null : state.hue} isBold={state.bold}>
              {state.startIcon && (
                <Span.StartIcon>
                  <HeartIcon />
                </Span.StartIcon>
              )}
              <>seed kombu</> {state.defaultIcon && (
                <Span.Icon>
                  <AtIcon />
                </Span.Icon>
              )} <>beet horseradish</>
              {state.endIcon && (
                <Span.EndIcon>
                  <BoxIcon />
                </Span.EndIcon>
              )}
            </Span> carrot squash brussels sprout chard.
          </Typography>
        </>
      )}
    </Col>
  </Row>
</Grid>;
```
