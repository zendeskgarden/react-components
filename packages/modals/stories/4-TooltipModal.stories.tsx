/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';
import { Story, Meta } from '@storybook/react';
import { Button } from '@zendeskgarden/react-buttons';
import { TooltipModal } from '@zendeskgarden/react-modals';
import { Col, Grid, Row } from '@zendeskgarden/react-grid';

export default {
  title: 'Components/Modals/TooltipModal',
  component: TooltipModal
} as Meta;

const StyledProgress = styled(TooltipModal.FooterItem)`
  flex-grow: 1;
  color: ${p => getColor('neutralHue', 600, p.theme)};
  font-size: ${p => p.theme.fontSizes.sm};
`;

export const Default: Story = ({
  id,
  zIndex,
  hasArrow,
  isAnimated,
  restoreFocus,
  focusOnMount,
  backdropProps
}) => {
  const [step, setStep] = React.useState<any>();
  const step1Ref = React.useRef<HTMLButtonElement>(null);
  const step2Ref = React.useRef<HTMLButtonElement>(null);
  const step3Ref = React.useRef<HTMLButtonElement>(null);
  const step4Ref = React.useRef<HTMLButtonElement>(null);

  const [referenceElement, setReferenceElement] = React.useState<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (step === 1) {
      setReferenceElement(step1Ref.current);
    } else if (step === 2) {
      setReferenceElement(step2Ref.current);
    } else if (step === 3) {
      setReferenceElement(step3Ref.current);
    } else if (step === 4) {
      setReferenceElement(step4Ref.current);
    }
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
      <Row justifyContent="center">
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
        id={id}
        zIndex={zIndex}
        hasArrow={hasArrow}
        placement={placement}
        isAnimated={isAnimated}
        restoreFocus={restoreFocus}
        focusOnMount={focusOnMount}
        backdropProps={backdropProps}
        onClose={() => {
          setStep(undefined);
          setReferenceElement(null);
        }}
        referenceElement={referenceElement}
      >
        <TooltipModal.Title>Title for step {step}</TooltipModal.Title>
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
            {step > 1 && (
              <Button size="small" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
          </TooltipModal.FooterItem>
          <TooltipModal.FooterItem>
            <Button
              size="small"
              isPrimary
              onClick={() => {
                if (step === 4) {
                  setReferenceElement(null);
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

Default.argTypes = {
  isAnimated: {
    control: 'boolean'
  },
  hasArrow: {
    control: 'boolean'
  },
  zIndex: {
    control: 'boolean'
  },
  focusOnMount: {
    control: 'boolean'
  },
  restoreFocus: {
    control: 'boolean'
  },
  id: {
    control: 'text'
  },
  referenceElement: { control: { disable: true } },
  popperModifiers: { control: { disable: true } },
  backdropProps: { control: { disable: true } },
  placement: {
    control: { disable: true }
  }
};
