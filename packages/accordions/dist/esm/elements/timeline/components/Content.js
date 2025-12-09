/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import SvgCircleFullStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/12/circle-full-stroke.svg.js';
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
import '../../../styled/accordion/StyledButton.js';
import '../../../styled/accordion/StyledPanel.js';
import '../../../styled/accordion/StyledInnerPanel.js';
import '../../../styled/accordion/StyledRotateIcon.js';
import '../../../styled/timeline/StyledTimeline.js';
import '../../../styled/timeline/StyledItem.js';
import { StyledItemIcon } from '../../../styled/timeline/StyledItemIcon.js';
import { StyledTimelineContent } from '../../../styled/timeline/StyledContent.js';
import '../../../styled/timeline/StyledOppositeContent.js';
import { StyledSeparator } from '../../../styled/timeline/StyledSeparator.js';
import '../../../utils/useStepperContext.js';
import '../../../utils/useStepContext.js';
import '../../../utils/useAccordionContext.js';
import '../../../utils/useSectionContext.js';
import '../../../utils/useHeaderContext.js';
import '../../../utils/useTimelineContext.js';
import { useTimelineItemContext } from '../../../utils/useTimelineItemContext.js';

const ContentComponent = forwardRef((props, ref) => {
  const {
    icon,
    surfaceColor
  } = useTimelineItemContext();
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(StyledSeparator, null, React__default.createElement(StyledItemIcon, {
    $surfaceColor: surfaceColor
  }, icon || React__default.createElement(SvgCircleFullStroke, null))), React__default.createElement(StyledTimelineContent, Object.assign({
    ref: ref
  }, props)));
});
ContentComponent.displayName = 'Timeline.Content';
const Content = ContentComponent;

export { Content };
