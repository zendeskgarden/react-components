/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo } from 'react';
import '../../utils/useStepperContext.js';
import '../../utils/useStepContext.js';
import '../../utils/useAccordionContext.js';
import '../../utils/useSectionContext.js';
import '../../utils/useHeaderContext.js';
import { TimelineContext } from '../../utils/useTimelineContext.js';
import '../../utils/useTimelineItemContext.js';
import '../../styled/stepper/StyledStep.js';
import '../../styled/stepper/StyledContent.js';
import '../../styled/stepper/StyledInnerContent.js';
import '../../styled/stepper/StyledLine.js';
import '../../styled/stepper/StyledStepper.js';
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
import { StyledTimeline } from '../../styled/timeline/StyledTimeline.js';
import '../../styled/timeline/StyledItem.js';
import '../../styled/timeline/StyledItemIcon.js';
import '../../styled/timeline/StyledContent.js';
import '../../styled/timeline/StyledOppositeContent.js';
import '../../styled/timeline/StyledSeparator.js';
import { Item } from './components/Item.js';
import { Content } from './components/Content.js';
import { OppositeContent } from './components/OppositeContent.js';

const TimelineComponent = forwardRef(({
  isAlternate,
  ...props
}, ref) => {
  const value = useMemo(() => ({
    isAlternate
  }), [isAlternate]);
  return React__default.createElement(TimelineContext.Provider, {
    value: value
  }, React__default.createElement(StyledTimeline, Object.assign({
    ref: ref
  }, props)));
});
TimelineComponent.displayName = 'Timeline';
const Timeline = TimelineComponent;
Timeline.Content = Content;
Timeline.Item = Item;
Timeline.OppositeContent = OppositeContent;

export { Timeline };
