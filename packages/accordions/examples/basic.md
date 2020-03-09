### Steppers

Stepper implementations can use [ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
to communicate what step the user is on. For a horizontal `Stepper`, render step content outside of
the `Stepper` component instead of using `Stepper.Content`.

```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label, Range } = require('@zendeskgarden/react-forms/src');
const {
  Dropdown,
  Select,
  Field: SelectField,
  Label: SelectLabel,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const StarStrokeIcon = require('@zendeskgarden/svg-icons/src/12/star-stroke.svg').default;
const SmileyStrokeIcon = require('@zendeskgarden/svg-icons/src/12/smiley-stroke.svg').default;
const HomeStrokeIcon = require('@zendeskgarden/svg-icons/src/12/home-stroke.svg').default;
const HeartStrokeIcon = require('@zendeskgarden/svg-icons/src/12/heart-stroke.svg').default;
const GlobeStrokeIcon = require('@zendeskgarden/svg-icons/src/12/globe-stroke.svg').default;
const CarStrokeIcon = require('@zendeskgarden/svg-icons/src/12/car-stroke.svg').default;
const PencilStrokeIcon = require('@zendeskgarden/svg-icons/src/12/pencil-stroke.svg').default;
const PhoneStrokeIcon = require('@zendeskgarden/svg-icons/src/12/phone-stroke.svg').default;
const LightningBoltStrokeIcon = require('@zendeskgarden/svg-icons/src/12/lightning-bolt-stroke.svg')
  .default;
const SearchStrokeIcon = require('@zendeskgarden/svg-icons/src/12/search-stroke.svg').default;

const StyledHorizontalContent = styled.div`
  padding: ${props => `${props.theme.space.base * 6}px 0`};
`;

const allSteps = [
  {
    id: 'stepper-step-1',
    icon: StarStrokeIcon,
    label: 'Veggies Es',
    longLabel: 'Veggies Es Vobis Sweetpotatotomatillo',
    content: `Veggies es vobis, sweetpotatotomatillo vos postulo essum magis kohlrabi welsh
    onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko
    endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
    dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.`
  },
  {
    id: 'stepper-step-2',
    icon: SmileyStrokeIcon,
    label: 'Turnip Greens',
    longLabel: 'Turnip Greens Yarrow Ricebean Rutabaga',
    content: `Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
    amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery
    potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel
    kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
    Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
    watercress.`
  },
  {
    id: 'stepper-step-3',
    icon: HomeStrokeIcon,
    label: 'Corn Amaranth',
    longLabel: 'Corn Amaranth Salsify Bunya Nuts',
    content: `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
    artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce
    water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek
    soko chicory celtuce parsley jícama.`
  },
  {
    id: 'stepper-step-4',
    icon: HeartStrokeIcon,
    label: 'Celery Quandong',
    longLabel: 'Celery Quandong Swiss Chard Chicory',
    content: `Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic
    gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot
    horseradish carrot squash brussels sprout chard. Pea horseradish azuki bean lettuce avocado
    asparagus okra. Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green
    bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.`
  },
  {
    id: 'stepper-step-5',
    icon: GlobeStrokeIcon,
    label: 'Grape Silver',
    longLabel: 'Grape Silver Beet Watercress Potato',
    content: `Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
    purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut summer
    purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu plum komatsuna
    black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish
    asparagus spinach.`
  },
  {
    id: 'stepper-step-6',
    icon: CarStrokeIcon,
    label: 'Beetroot Water',
    longLabel: 'Beetroot Water Spinach Okra Water',
    content: `Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
    purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale radicchio
    turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow chickpea
    dandelion sorrel courgette turnip greens tigernut soybean radish artichoke wattle seed endive
    groundnut broccoli arugula.`
  },
  {
    id: 'stepper-step-7',
    icon: PencilStrokeIcon,
    label: 'Soko Radicchio',
    longLabel: 'Soko Radicchio Bunya Nuts Gram',
    content: `Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea
    lettuce brussels sprout cabbage. Catsear cauliflower garbanzo yarrow salsify chicory garlic
    bell pepper napa cabbage lettuce tomato kale arugula melon sierra leone bologi rutabaga
    tigernut. Sea lettuce gumbo grape kale kombu cauliflower salsify kohlrabi okra sea lettuce
    broccoli celery lotus root carrot winter purslane turnip greens garlic. Jícama garlic courgette
    coriander radicchio plantain scallion cauliflower fava bean desert raisin spring onion chicory
    bunya nuts. Sea lettuce water spinach gram fava bean leek dandelion silver beet eggplant bush.`
  },
  {
    id: 'stepper-step-8',
    icon: PhoneStrokeIcon,
    label: 'Zucchini Soko',
    longLabel: 'Zucchini Soko Peanut Pea Okra',
    content: `Zucchini soko peanut pea okra cucumber Dandelion tomato. wakame earthnut dandelion
    greens collard bean fava sprouts pea tatsoi courgette shallot Parsley gourd. Gumbo endive soko
    corn greens beet Gumbo garlic. Bean azuki melon tomatillo tatsoi amaranth daikon onion welsh
    kohlrabi magis essum postulo vos proinde vobis, bonus es veggies.`
  },
  {
    id: 'stepper-step-9',
    icon: LightningBoltStrokeIcon,
    label: 'Swiss Carrot',
    longLabel: 'Swiss Carrot Beetroot Kohlrabi Wakame',
    content: `Swiss carrot beetroot kohlrabi wakame chard gourd chestnut water coriander sprout
    brussels pea. Corn gram chickpea onion pumpkin seakale chard swiss bean green shoot bamboo
    maize kombu fennel spinach water root Lotus soko. Carrot spinach horseradish raisin desert
    scallion potato celery kale. Purslane winter asparagus cabbage napa daikon avocado spinach
    water amaranth kohlrabi lettuce sea cauliflower endive rutabaga ricebean yarrow greens.`
  },
  {
    id: 'stepper-step-10',
    icon: SearchStrokeIcon,
    label: 'Pea Black-eyed',
    longLabel: 'Pea Black-eyed Gumbo Fennel',
    content: `Pea black-eyed gumbo fennel quandong avocado greens collard celtuce bean green jícama
    tigernut mustard bean fava corn bean azuki okra radish Kohlrabi okra. asparagus avocado lettuce
    bean azuki horseradish pea chard. Sprout brussels squash carrot horseradish beetroot kombu seed
    wattle Grape nori. Greens collard seed wattle bitterleaf celery gram garlic catsear taro
    salsify potato. Pea earthnut chicory chard swiss quandong celery.`
  }
];

const BasicExample = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isLongLabel, setIsLongLabel] = React.useState(false);
  const [isHiddenLabels, setIsHiddenLabels] = React.useState(false);
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const [isCustomIcon, setIsCustomIcon] = React.useState(false);
  const [numberOfSteps, setNumberOfSteps] = React.useState(5);
  const steps = allSteps.filter((step, index) => index < numberOfSteps);

  return (
    <Grid>
      <Well isRecessed>
        <Row>
          <Col>
            <Field>
              <Toggle checked={isHorizontal} onChange={event => setIsHorizontal(!isHorizontal)}>
                <Label>Horizontal layout</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isLongLabel} onChange={event => setIsLongLabel(!isLongLabel)}>
                <Label>Long labels</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle
                checked={isHiddenLabels}
                onChange={event => setIsHiddenLabels(!isHiddenLabels)}
              >
                <Label>Hidden labels</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isCustomIcon} onChange={event => setIsCustomIcon(!isCustomIcon)}>
                <Label>Custom icons</Label>
              </Toggle>
            </Field>
          </Col>
          <Col>
            <Dropdown
              selectedItem={numberOfSteps}
              onSelect={steps => {
                setNumberOfSteps(Number(steps));
                setActiveIndex(0);
              }}
            >
              <SelectField>
                <SelectLabel>Number of Steps</SelectLabel>
                <Select isCompact>{numberOfSteps}</Select>
              </SelectField>
              <Menu isCompact>
                <Item value="3">3</Item>
                <Item value="5">5</Item>
                <Item value="10">10</Item>
              </Menu>
            </Dropdown>
            <Field className="u-mt">
              <Label>
                {activeIndex === numberOfSteps
                  ? 'Steps Completed'
                  : `Active Step: ${activeIndex + 1}`}
              </Label>
              <Range
                value={activeIndex}
                max={numberOfSteps}
                onChange={event => {
                  const nextActiveIndex = parseInt(event.target.value, 10);
                  setActiveIndex(nextActiveIndex);
                }}
              />
            </Field>
          </Col>
        </Row>
      </Well>
      <Row className="u-mt">
        <Col>
          <Stepper activeIndex={activeIndex} isHorizontal={isHorizontal}>
            {steps.map(step => {
              const { id, label, longLabel, content, icon: Icon } = step;
              return (
                <Stepper.Step key={id}>
                  <Stepper.Label isHidden={isHiddenLabels} icon={isCustomIcon && <Icon />}>
                    {isLongLabel ? longLabel : label}
                  </Stepper.Label>
                  <Stepper.Content>{content}</Stepper.Content>
                </Stepper.Step>
              );
            })}
          </Stepper>
          {isHorizontal && (
            <StyledHorizontalContent>
              {steps.map(
                (step, index) =>
                  isHorizontal && index === activeIndex && <span key={step.id}>{step.content}</span>
              )}
            </StyledHorizontalContent>
          )}
        </Col>
      </Row>
    </Grid>
  );
};

<BasicExample />;
```
