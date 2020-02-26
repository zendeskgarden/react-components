```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Label, Range } = require('@zendeskgarden/react-forms/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const StarStrokeIcon = require('@zendeskgarden/svg-icons/src/12/star-stroke.svg').default;
const SmileyStrokeIcon = require('@zendeskgarden/svg-icons/src/12/smiley-stroke.svg').default;
const HomeStrokeIcon = require('@zendeskgarden/svg-icons/src/12/home-stroke.svg').default;
const HeartStrokeIcon = require('@zendeskgarden/svg-icons/src/12/heart-stroke.svg').default;
const GlobeStrokeIcon = require('@zendeskgarden/svg-icons/src/12/globe-stroke.svg').default;

const steps = [
  {
    id: 'stepper-step-1',
    label: 'Label 1',
    icon: StarStrokeIcon,
    content: `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn
    soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean
    collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea
    peanut soko zucchini.`
  },
  {
    id: 'stepper-step-2',
    label: 'Label 2',
    icon: SmileyStrokeIcon,
    content: `Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi
    amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale.
    Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root
    water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale
    pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut
    gourd swiss chard wakame kohlrabi beetroot carrot watercress.`
  },
  {
    id: 'stepper-step-3',
    label: 'Label 3',
    icon: HomeStrokeIcon,
    content: `Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper
    artichoke. Nori grape silver beet broccoli kombu beet greens fava bean potato
    quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki
    bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama.`
  },
  {
    id: 'stepper-step-4',
    label: 'Label 4',
    icon: HeartStrokeIcon,
    content: `Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear
    garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed
    kombu beetroot horseradish carrot squash brussels sprout chard. Pea horseradish
    azuki bean lettuce avocado asparagus okra. Kohlrabi radish okra azuki bean corn
    fava bean mustard tigernut jícama green bean celtuce collard greens avocado
    quandong fennel gumbo black-eyed pea.`
  },
  {
    id: 'stepper-step-5',
    label: 'Label 5',
    icon: GlobeStrokeIcon,
    content: `Grape silver beet watercress potato tigernut corn groundnut. Chickweed okra winter
    purslane coriander yarrow sweet pepper radish garlic brussels sprout pea groundnut
    summer purslane earthnut pea tomato spring onion azuki bean gourd. Gumbo kakadu
    plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet
    rock melon radish asparagus spinach.`
  }
];

const BasicExample = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHorizontal, setIsHorizontal] = React.useState(false);
  const [isCustomIcon, setIsCustomIcon] = React.useState(false);

  return (
    <Grid>
      <Row>
        <Col>
          <Well isRecessed style={{ width: 300 }}>
            <Field className="u-mt-xs">
              <Toggle checked={isHorizontal} onChange={event => setIsHorizontal(!isHorizontal)}>
                <Label>Horizontal layout</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle checked={isCustomIcon} onChange={event => setIsCustomIcon(!isCustomIcon)}>
                <Label>Custom icons</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Label>
                {activeIndex === steps.length
                  ? 'Steps Completed'
                  : `Active Step: ${activeIndex + 1}`}
              </Label>
              <Range
                value={activeIndex}
                max={steps.length}
                onChange={event => {
                  const nextActiveIndex = parseInt(event.target.value, 10);
                  setActiveIndex(nextActiveIndex);
                }}
              />
            </Field>
          </Well>
        </Col>
      </Row>
      <Row className="u-mt">
        <Col>
          <Stepper activeIndex={activeIndex} isHorizontal={isHorizontal}>
            {steps.map(step => {
              const { icon: Icon, label, content } = step;
              return (
                <Step key={step.id}>
                  <StepLabel icon={isCustomIcon && <Icon />}>{label}</StepLabel>
                  <StepContent>
                    <span>{content}</span>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
          <div style={{ padding: '18px' }}>
            {steps.map(
              (step, index) =>
                isHorizontal && index === activeIndex && <span key={step.id}>{step.content}</span>
            )}
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

<BasicExample />;
```
