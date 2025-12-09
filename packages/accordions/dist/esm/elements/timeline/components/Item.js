/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, Children } from 'react';
import { OppositeContent } from './OppositeContent.js';
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
import { StyledTimelineItem } from '../../../styled/timeline/StyledItem.js';
import '../../../styled/timeline/StyledItemIcon.js';
import '../../../styled/timeline/StyledContent.js';
import '../../../styled/timeline/StyledOppositeContent.js';
import '../../../styled/timeline/StyledSeparator.js';
import '../../../utils/useStepperContext.js';
import '../../../utils/useStepContext.js';
import '../../../utils/useAccordionContext.js';
import '../../../utils/useSectionContext.js';
import '../../../utils/useHeaderContext.js';
import { useTimelineContext } from '../../../utils/useTimelineContext.js';
import { TimelineItemContext } from '../../../utils/useTimelineItemContext.js';

const ItemComponent = forwardRef(({
  icon,
  surfaceColor,
  ...props
}, ref) => {
  const value = useMemo(() => ({
    icon,
    surfaceColor
  }), [icon, surfaceColor]);
  const {
    isAlternate
  } = useTimelineContext();
  let hasOppositeContent = false;
  Children.forEach(props.children, child => {
    if (child) {
      if (child.type === OppositeContent) {
        hasOppositeContent = true;
      }
    }
  });
  return React__default.createElement(TimelineItemContext.Provider, {
    value: value
  }, React__default.createElement(StyledTimelineItem, Object.assign({
    ref: ref,
    $isAlternate: isAlternate,
    $hasOppositeContent: hasOppositeContent
  }, props)));
});
ItemComponent.displayName = 'Timeline.Item';
const Item = ItemComponent;

export { Item };
