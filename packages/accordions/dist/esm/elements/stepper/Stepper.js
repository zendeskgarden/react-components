/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, Children, isValidElement } from 'react';
import '../../styled/stepper/StyledStep.js';
import '../../styled/stepper/StyledContent.js';
import '../../styled/stepper/StyledInnerContent.js';
import '../../styled/stepper/StyledLine.js';
import { StyledStepper } from '../../styled/stepper/StyledStepper.js';
import '../../styled/stepper/StyledIcon.js';
import '../../styled/stepper/StyledLabel.js';
import '../../styled/stepper/StyledLabelText.js';
import '../../styled/accordion/StyledAccordion.js';
import '../../styled/accordion/StyledSection.js';
import '../../styled/accordion/StyledHeader.js';
import '../../styled/accordion/StyledButton.js';
import '../../styled/accordion/StyledPanel.js';
import '../../styled/accordion/StyledInnerPanel.js';
import '../../styled/accordion/StyledRotateIcon.js';
import '../../styled/timeline/StyledTimeline.js';
import '../../styled/timeline/StyledItem.js';
import '../../styled/timeline/StyledItemIcon.js';
import '../../styled/timeline/StyledContent.js';
import '../../styled/timeline/StyledOppositeContent.js';
import '../../styled/timeline/StyledSeparator.js';
import { StepperContext } from '../../utils/useStepperContext.js';
import { StepContext } from '../../utils/useStepContext.js';
import '../../utils/useAccordionContext.js';
import '../../utils/useSectionContext.js';
import '../../utils/useHeaderContext.js';
import '../../utils/useTimelineContext.js';
import '../../utils/useTimelineItemContext.js';
import { Step } from './components/Step.js';
import { Label } from './components/Label.js';
import { Content } from './components/Content.js';

const DEFAULT_ACTIVE_INDEX = 0;
const StepperComponent = forwardRef((_ref, ref) => {
  let {
    activeIndex = DEFAULT_ACTIVE_INDEX,
    isHorizontal,
    children,
    ...props
  } = _ref;
  const stepperContext = useMemo(() => ({
    activeIndex,
    isHorizontal: isHorizontal || false
  }), [activeIndex, isHorizontal]);
  return React__default.createElement(StepperContext.Provider, {
    value: stepperContext
  }, React__default.createElement(StyledStepper, Object.assign({
    ref: ref,
    $isHorizontal: isHorizontal
  }, props), useMemo(() => Children.toArray(children).filter(isValidElement).map((child, index) => React__default.createElement(StepContext.Provider, {
    key: index
    ,
    value: {
      currentStepIndex: index,
      isActive: stepperContext.activeIndex === index,
      isCompleted: stepperContext.activeIndex > index,
      isHorizontal: stepperContext.isHorizontal
    }
  }, child)), [children, stepperContext])));
});
StepperComponent.displayName = 'Stepper';
const Stepper = StepperComponent;
Stepper.Content = Content;
Stepper.Label = Label;
Stepper.Step = Step;

export { Stepper };
