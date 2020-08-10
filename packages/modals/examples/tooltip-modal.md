```jsx
const { getColor } = require('@zendeskgarden/react-theming/src');
const { Button } = require('@zendeskgarden/react-buttons/src');
const { Field, Label, Toggle } = require('@zendeskgarden/react-forms/src');
const { Code } = require('@zendeskgarden/react-typography/src');
const { Well } = require('@zendeskgarden/react-notifications/src');

const StyledProgress = styled(TooltipModal.FooterItem)`
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.sm};
  flex-grow: 1;
`;

const Example = () => {
  const [hasArrow, setHasArrow] = React.useState(true);
  const [step, setStep] = React.useState();
  const step1Ref = React.useRef();
  const step2Ref = React.useRef();
  const step3Ref = React.useRef();
  const step4Ref = React.useRef();

  const referenceElement = React.useMemo(() => {
    if (step === 1) {
      return step1Ref.current;
    } else if (step === 2) {
      return step2Ref.current;
    } else if (step === 3) {
      return step3Ref.current;
    } else if (step === 4) {
      return step4Ref.current;
    }

    return undefined;
  }, [step]);

  const placement = React.useMemo(() => {
    if (step === 1) {
      return 'bottom-start';
    } else if (step === 2 || step === 3) {
      return 'bottom';
    } else if (step === 4) {
      return 'bottom-end';
    }

    return undefined;
  }, [step]);

  return (
    <Grid>
      <Row className="u-mb-md">
        <Col>
          <Well isRecessed>
            <Field>
              <Toggle checked={hasArrow} onChange={e => setHasArrow(e.target.checked)}>
                <Label>
                  <Code>hasArrow</Code>
                </Label>
              </Toggle>
            </Field>
          </Well>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button ref={step1Ref} onClick={() => setStep(1)}>
            Step 1
          </Button>
        </Col>
        <Col>
          <Button ref={step2Ref} onClick={() => setStep(2)}>
            Step 2
          </Button>
        </Col>
        <Col>
          <Button ref={step3Ref} onClick={() => setStep(3)}>
            Step 3
          </Button>
        </Col>
        <Col>
          <Button ref={step4Ref} onClick={() => setStep(4)}>
            Step 4
          </Button>
        </Col>
      </Row>
      <TooltipModal
        referenceElement={referenceElement}
        placement={placement}
        hasArrow={hasArrow}
        onClose={() => setStep(undefined)}
      >
        <TooltipModal.Title>Header content</TooltipModal.Title>
        <TooltipModal.Body>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea
          sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut
          pea peanut soko zucchini.
        </TooltipModal.Body>
        <TooltipModal.Footer>
          <StyledProgress>
            <span>{step} of 4</span>
          </StyledProgress>
          <TooltipModal.FooterItem>
            <Button size="small" disabled={step === 1} onClick={() => setStep(step - 1)}>
              Previous
            </Button>
          </TooltipModal.FooterItem>
          <TooltipModal.FooterItem>
            <Button
              size="small"
              isPrimary
              onClick={() => {
                if (step === 4) {
                  setStep(undefined);
                } else {
                  setStep(step + 1);
                }
              }}
            >
              {step === 4 ? 'Finish' : 'Next'}
            </Button>
          </TooltipModal.FooterItem>
        </TooltipModal.Footer>
        <TooltipModal.Close aria-label="Close" />
      </TooltipModal>
    </Grid>
  );
};

<Example />;
```
