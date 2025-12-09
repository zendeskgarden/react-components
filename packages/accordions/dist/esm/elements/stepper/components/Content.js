/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/stepper/StyledStep.js';
import { StyledContent } from '../../../styled/stepper/StyledContent.js';
import { StyledInnerContent } from '../../../styled/stepper/StyledInnerContent.js';
import '../../../styled/stepper/StyledLine.js';
import '../../../styled/stepper/StyledStepper.js';
import '../../../styled/stepper/StyledIcon.js';
import '../../../styled/stepper/StyledLabel.js';
import '../../../styled/stepper/StyledLabelText.js';
import '../../../styled/accordion/StyledAccordion.js';
import '../../../styled/accordion/StyledSection.js';
import '../../../styled/accordion/StyledHeader.js';
import '../../../styled/accordion/StyledButton.js';
import '../../../styled/accordion/StyledPanel.js';
import '../../../styled/accordion/StyledInnerPanel.js';
import '../../../styled/accordion/StyledRotateIcon.js';
import '../../../styled/timeline/StyledTimeline.js';
import '../../../styled/timeline/StyledItem.js';
import '../../../styled/timeline/StyledItemIcon.js';
import '../../../styled/timeline/StyledContent.js';
import '../../../styled/timeline/StyledOppositeContent.js';
import '../../../styled/timeline/StyledSeparator.js';
import '../../../utils/useStepperContext.js';
import { useStepContext } from '../../../utils/useStepContext.js';
import '../../../utils/useAccordionContext.js';
import '../../../utils/useSectionContext.js';
import '../../../utils/useHeaderContext.js';
import '../../../utils/useTimelineContext.js';
import '../../../utils/useTimelineItemContext.js';

const ContentComponent$1 = forwardRef((props, ref) => {
  const {
    isActive,
    isHorizontal
  } = useStepContext();
  return isHorizontal === false ? React__default.createElement(StyledContent, Object.assign({
    ref: ref,
    $isActive: isActive
  }, props), React__default.createElement(StyledInnerContent, {
    "aria-hidden": !isActive,
    inert: isActive ? undefined : ''
  }, props.children)) : null;
});
ContentComponent$1.displayName = 'Stepper.Content';
const Content$1 = ContentComponent$1;

export { Content$1 as Content };
