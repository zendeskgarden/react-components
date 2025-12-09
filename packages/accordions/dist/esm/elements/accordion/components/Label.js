/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import '../../../styled/stepper/StyledStep.js';
import '../../../styled/stepper/StyledContent.js';
import '../../../styled/stepper/StyledInnerContent.js';
import '../../../styled/stepper/StyledLine.js';
import '../../../styled/stepper/StyledStepper.js';
import '../../../styled/stepper/StyledIcon.js';
import '../../../styled/stepper/StyledLabel.js';
import '../../../styled/stepper/StyledLabelText.js';
import '../../../styled/accordion/StyledAccordion.js';
import '../../../styled/accordion/StyledSection.js';
import '../../../styled/accordion/StyledHeader.js';
import { StyledButton } from '../../../styled/accordion/StyledButton.js';
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
import '../../../utils/useStepContext.js';
import { useAccordionContext } from '../../../utils/useAccordionContext.js';
import { useSectionContext } from '../../../utils/useSectionContext.js';
import { useHeaderContext } from '../../../utils/useHeaderContext.js';
import '../../../utils/useTimelineContext.js';
import '../../../utils/useTimelineItemContext.js';

const LabelComponent$1 = forwardRef((props, ref) => {
  const sectionValue = useSectionContext();
  const {
    isCompact,
    isCollapsible,
    expandedSections
  } = useAccordionContext();
  const isExpanded = expandedSections.includes(sectionValue);
  const {
    isHovered,
    otherTriggerProps
  } = useHeaderContext();
  return React__default.createElement(StyledButton, Object.assign({
    ref: ref,
    $isCompact: isCompact,
    $isHovered: isHovered,
    $isExpanded: isExpanded,
    $isCollapsible: isCollapsible
  }, otherTriggerProps, props));
});
LabelComponent$1.displayName = 'Accordion.Label';
const Label$1 = LabelComponent$1;

export { Label$1 as Label };
