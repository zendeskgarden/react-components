```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const { Toggle, Field, Input, Label, Radio, Range } = require('@zendeskgarden/react-forms/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const SmileyStrokeIcon = require('@zendeskgarden/svg-icons/src/12/smiley-stroke.svg').default;
const StarStrokeIcon = require('@zendeskgarden/svg-icons/src/12/star-stroke.svg').default;
const HomeStrokeIcon = require('@zendeskgarden/svg-icons/src/12/home-stroke.svg').default;

const BasicExample = () => {
  const [isCustomIcon, setIsCustomIcon] = React.useState(false);
  const [isHorizontal, setIsHorizontal] = React.useState(true);
  const [activeIndex, setactiveIndex] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState(new Set());

  return (
    <Grid>
      <Row>
        <Col>
          <Well isRecessed style={{ width: 300 }}>
            <Field className="u-mt-xs">
              <Toggle
                checked={isHorizontal}
                onChange={event => {
                  setIsHorizontal(!isHorizontal);
                }}
              >
                <Label>Horizontal layout</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Toggle
                checked={isCustomIcon}
                onChange={event => {
                  setIsCustomIcon(!isCustomIcon);
                }}
              >
                <Label>Custom icons</Label>
              </Toggle>
            </Field>
            <Field className="u-mt">
              <Label>
                {activeIndex === 3 ? 'Steps Completed' : `Active Step: ${activeIndex + 1}`}
              </Label>
              <Range
                max={3}
                onChange={event => {
                  const nextStep = parseInt(event.target.value, 10);

                  if (completedSteps.has(nextStep)) {
                    const s = new Set(completedSteps);
                    s.delete(nextStep);
                    setCompletedSteps(s);
                  } else {
                    const s = new Set(completedSteps);
                    s.add(activeIndex);
                    setCompletedSteps(s);
                  }

                  setactiveIndex(nextStep);
                }}
                value={activeIndex}
              />
            </Field>
          </Well>
        </Col>
      </Row>
      <Row className="u-mt">
        <Col>
          <Stepper activeIndex={activeIndex} isHorizontal={isHorizontal}>
            <Step>
              <StepLabel icon={isCustomIcon && <StarStrokeIcon />}>Label 1</StepLabel>
              <StepContent>
                <span>
                  Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish
                  artichoke.
                </span>
                <Field className="u-mt-xs">
                  <Label>Input Label</Label>
                  <Input isCompact />
                </Field>
              </StepContent>
            </Step>
            <Step>
              <StepLabel icon={isCustomIcon && <SmileyStrokeIcon />}>Label 2</StepLabel>
              <StepContent>
                Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean. Turnip
                greens tigernut soybean.
              </StepContent>
            </Step>
            <Step>
              <StepLabel icon={isCustomIcon && <HomeStrokeIcon />}>Label 3</StepLabel>
              <StepContent>
                Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow
                chickpea dandelion courgette.
              </StepContent>
            </Step>
          </Stepper>

          {isHorizontal && activeIndex === 0 ? (
            <>
              <div>
                Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi radish
                artichoke.
              </div>
              <Field>
                <Label>Text</Label>
                <Input isCompact />
              </Field>
            </>
          ) : null}
          {isHorizontal && activeIndex === 1 ? (
            <span>
              Beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean. Turnip
              greens tigernut soybean.
            </span>
          ) : null}
          {isHorizontal && activeIndex === 2 ? (
            <div>
              Turnip chicory salsify pea sprouts fava bean. Dandelion zucchini burdock yarrow
              chickpea dandelion courgette.
            </div>
          ) : null}
        </Col>
      </Row>
    </Grid>
  );
};

<BasicExample />;
```
