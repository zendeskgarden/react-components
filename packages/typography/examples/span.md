```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Radio, Field, Label } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');

initialState = {
  size: 'MD'
};

const StyledSpan = styled(Span)`
  color: ${p => p.theme.palette.fuschia[400]};
`;

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
        <div className="u-mt-sm" role="group" aria-label="bold">
          <Field>
            <Label>Bold</Label>
          </Field>
          <Field>
            <Radio
              name="bold"
              value="default"
              checked={state.bold === undefined}
              onChange={event => setState({ bold: undefined })}
            >
              <Label isRegular>Default</Label>
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
      </Well>
    </Col>
    <Col>
      <Typography as="p" size={state.size}>
        Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio turnip
        chicory salsify pea sprouts fava bean. Dandelion
        <StyledSpan isBold={state.bold}>zucchini burdock yarrow chickpea dandelion</StyledSpan> sorrel
        courgette turnip greens tigernut soybean radish artichoke wattle seed endive groundnut broccoli
        arugula.
      </Typography>
      <Typography as="p" isBold size={state.size}>
        Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean
        corn fava bean
        <StyledSpan isBold={state.bold}>mustard tigernut jícama green bean</StyledSpan> celtuce collard
        greens avocado quandong fennel gumbo.
      </Typography>
      {['SM', 'MD', 'LG'].indexOf(state.size) !== -1 && (
        <Typography as="p" isMonospace size={state.size}>
          Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce
          lettuce
          <StyledSpan isBold={state.bold}>
            water chestnut eggplant winter purslane fennel
          </StyledSpan> azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley
          jícama salsify.
        </Typography>
      )}
    </Col>
  </Row>
</Grid>;
```
