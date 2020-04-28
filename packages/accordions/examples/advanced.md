### Accordion

The Accordion component is implemented using the [W3C Accordion pattern](https://www.w3.org/TR/wai-aria-practices/#accordion).

#### Controlled Usage

This advanced example demonstrates custom behavior using a
[controlled](https://reactjs.org/docs/forms.html#controlled-components) `Accordion`
component. It also demonstrates additional header text and menu buttons in the `Accordion.Header`.

```jsx
const { SM } = require('@zendeskgarden/react-typography/src');
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label } = require('@zendeskgarden/react-forms/src');
const { IconButton } = require('@zendeskgarden/react-buttons/src');
const GearIcon = require('@zendeskgarden/svg-icons/src/16/gear-stroke.svg').default;
const FolderIcon = require('@zendeskgarden/svg-icons/src/16/folder-open-stroke.svg').default;
const { Dropdown, Menu, Item, Trigger } = require('@zendeskgarden/react-dropdowns/src');
const { Button } = require('@zendeskgarden/react-buttons/src');

const StyledSM = styled(SM)`
  margin-left: ${props => props.theme.space.base}px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${props => props.theme.space.base * 28}px;
`;

const accordionSections = [
  {
    id: 'section-0',
    header: 'Turnip greens yarrow',
    headerDetail: 'ricebean rutabaga endive cauliflower sea lettuce kohlrabi',
    panelContent: `Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
    amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery
    potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
    kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
    Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
    watercress.`
  },
  {
    id: 'section-1',
    header: 'Corn amaranth salsify',
    headerDetail: 'bunya nuts nori azuki bean chickweed potato bell pepper',
    panelContent: `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
    artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
    water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
    soko chicory celtuce parsley jícama.`
  },
  {
    id: 'section-2',
    header: 'Celery quandong swiss',
    headerDetail: 'chard chicory earthnut pea potato salsify taro catsear',
    panelContent: `Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
    garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
    horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado
    asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
    bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.`
  },
  {
    id: 'section-3',
    header: 'Grape silver beet',
    headerDetail: 'watercress potato tigernut corn groundnut chickweed okra winter',
    panelContent: `Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra
    winter purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut
    summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
    black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish
    asparagus spinach.`
  },
  {
    id: 'section-4',
    header: 'Soko radicchio bunya',
    headerDetail: 'nuts gram dulse silver beet parsnip napa cabbage lotus root',
    panelContent: `Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root
    sea lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic
    bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga
    tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
    broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette
    coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory
    bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush.`
  }
];

const AdvancedExample = () => {
  const [expandedSections, setExpandedSections] = React.useState([0]);
  const [isBare, setIsBare] = React.useState(false);
  const [isCompact, setIsCompact] = React.useState(false);
  const isExpandAll = expandedSections.length === 5;
  const isCollapseAll = expandedSections.length === 0;
  const onExpandAll = () => setExpandedSections([0, 1, 2, 3, 4]);
  const onCollapseAll = () => setExpandedSections([]);
  const onChange = index => {
    setExpandedSections(sections =>
      expandedSections.includes(index)
        ? sections.filter(section => section !== index)
        : [...expandedSections, index]
    );
  };
  const ButtonGroup = ({ isCompact }) => (
    <StyledButtonGroup>
      <Dropdown onSelect={item => alert(item)}>
        <Trigger>
          <IconButton
            title="Settings"
            aria-label="Settings"
            focusInset={isCompact}
            size={isCompact ? 'small' : 'medium'}
          >
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
          <IconButton
            title="Settings"
            aria-label="Settings"
            focusInset={isCompact}
            size={isCompact ? 'small' : 'medium'}
          >
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
              <Toggle checked={isCompact} onChange={event => setIsCompact(!isCompact)}>
                <Label>Compact</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isBare} onChange={event => setIsBare(!isBare)}>
                <Label>Bare</Label>
              </Toggle>
            </Field>
            <div>
              <Button size="small" onClick={onExpandAll} disabled={isExpandAll} className="u-mt">
                Expand All
              </Button>
            </div>
            <div>
              <Button
                size="small"
                onClick={onCollapseAll}
                disabled={isCollapseAll}
                className="u-mt"
              >
                Collapse All
              </Button>
            </div>
          </Col>
        </Row>
      </Well>
      <Row className="u-mt">
        <Col>
          <Accordion
            level={3}
            isBare={isBare}
            onChange={onChange}
            isCompact={isCompact}
            expandedSections={expandedSections}
          >
            {accordionSections.map(section => (
              <Accordion.Section key={section.id}>
                <Accordion.Header>
                  <Accordion.Label>
                    {section.header}
                    <StyledSM forwardedAs="span">{section.headerDetail}</StyledSM>
                  </Accordion.Label>
                  <ButtonGroup isCompact={isCompact} />
                </Accordion.Header>
                <Accordion.Panel>{section.panelContent}</Accordion.Panel>
              </Accordion.Section>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Grid>
  );
};

<AdvancedExample />;
```
