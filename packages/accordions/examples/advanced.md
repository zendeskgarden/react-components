### Accordion

The Accordion component is implemented using the [W3C Accordion pattern](https://www.w3.org/TR/wai-aria-practices/#accordion).

#### With custom header elements

This advanced example demonstrates additional header text and menu buttons in the `Accordion.Header`.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const { IconButton } = require('@zendeskgarden/react-buttons/src');
const GearIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;
const FolderIcon = require('@zendeskgarden/svg-icons/src/16/folder-open-stroke.svg').default;
const { Dropdown, Menu, Item, Trigger } = require('@zendeskgarden/react-dropdowns/src');

const StyledHint = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: normal;
  font-style: italic;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.theme.space.base * 28}px;
`;

const AdvancedExample = () => {
  const [isCollapsible, setIsCollapsible] = React.useState(false);
  const [isExpandable, setIsExpandable] = React.useState(false);
  const [isBare, setIsBare] = React.useState(false);
  const [isCompact, setIsCompact] = React.useState(false);

  const buttonGroup = (
    <StyledButtonGroup>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger>
          <IconButton aria-label="Settings" title="Settings">
            <GearIcon />
          </IconButton>
        </Trigger>
        <Menu placement="top" hasArrow>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger>
          <IconButton aria-label="Settings" title="Settings">
            <FolderIcon />
          </IconButton>
        </Trigger>
        <Menu placement="top" hasArrow>
          <Item value="option-1">Option 1</Item>
          <Item value="option-2">Option 2</Item>
          <Item value="option-3">Option 3</Item>
        </Menu>
      </Dropdown>
    </StyledButtonGroup>
  );

  return (
    <Grid>
      <Well isRecessed>
        <Row>
          <Col>
            <Field>
              <Toggle checked={isCollapsible} onChange={event => setIsCollapsible(!isCollapsible)}>
                <Label>Collapsible</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isExpandable} onChange={event => setIsExpandable(!isExpandable)}>
                <Label>Expandable</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isBare} onChange={event => setIsBare(!isBare)}>
                <Label>Bare</Label>
              </Toggle>
            </Field>
          </Col>
        </Row>
      </Well>
      <Row className="u-mt">
        <Col>
          <Accordion
            level={3}
            isBare={isBare}
            isExpandable={isExpandable}
            isCollapsible={isCollapsible}
          >
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>
                  Turnip greens yarrow
                  <StyledHint>ricebean rutabaga endive cauliflower sea lettuce kohlrabi</StyledHint>
                </Accordion.Label>
                {buttonGroup}
              </Accordion.Header>
              <Accordion.Panel>
                <div>
                  Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
                  amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
                  Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root
                  water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale
                  pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut
                  gourd swiss chard wakame kohlrabi beetroot carrot watercress.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>
                  Corn amaranth salsify
                  <StyledHint>bunya nuts nori azuki bean chickweed potato bell pepper</StyledHint>
                </Accordion.Label>
                {buttonGroup}
              </Accordion.Header>
              <Accordion.Panel>
                <div>
                  Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
                  artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
                  quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
                  greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel
                  azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley
                  jícama.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>
                  Celery quandong swiss
                  <StyledHint>chard chicory earthnut pea potato salsify taro catsear</StyledHint>
                </Accordion.Label>
                {buttonGroup}
              </Accordion.Header>
              <Accordion.Panel>
                <div>
                  Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
                  garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed
                  kombu beetroot horseradish carrot squash brussels sprout chard. Pea horseradish
                  azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn
                  fava bean mustard tigernut jícama green bean celtuce collard greens avocado
                  quandong fennel gumbo black-eyed pea.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>
                  Grape silver beet
                  <StyledHint>
                    watercress potato tigernut corn groundnut chickweed okra winter
                  </StyledHint>
                </Accordion.Label>
                {buttonGroup}
              </Accordion.Header>
              <Accordion.Panel>
                <div>
                  Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
                  purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut
                  summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu
                  plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver
                  beet rock melon radish asparagus spinach.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
            <Accordion.Section>
              <Accordion.Header>
                <Accordion.Label>
                  Soko radicchio bunya
                  <StyledHint>
                    nuts gram dulse silver beet parsnip napa cabbage lotus root
                  </StyledHint>
                </Accordion.Label>
                {buttonGroup}
              </Accordion.Header>
              <Accordion.Panel>
                <div>
                  Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
                  sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify
                  chicory garlic bell pepper napa cabbage lettuce tomato kale arugula melon sierra
                  leone bologi rutabaga tigernut. Sea lettuce gumbo grape kale kombu cauliflower
                  salsify kohlrabi okra sea lettuce broccoli celery lotus root carrot winter
                  purslane turnip greens garlic. Jícama garlic courgette coriander radicchio
                  plantain scallion cauliflower fava bean desert raisin spring onion chicory bunya
                  nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant
                  bush.
                </div>
              </Accordion.Panel>
            </Accordion.Section>
          </Accordion>
        </Col>
      </Row>
    </Grid>
  );
};

<AdvancedExample />;
```
