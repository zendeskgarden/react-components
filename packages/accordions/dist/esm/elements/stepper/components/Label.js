/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import SvgCheckSmStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/check-sm-stroke.svg.js';
import '../../../styled/stepper/StyledStep.js';
import '../../../styled/stepper/StyledContent.js';
import '../../../styled/stepper/StyledInnerContent.js';
import '../../../styled/stepper/StyledLine.js';
import '../../../styled/stepper/StyledStepper.js';
import { StyledIcon, StyledIconFlexContainer } from '../../../styled/stepper/StyledIcon.js';
import { StyledLabel } from '../../../styled/stepper/StyledLabel.js';
import { StyledLabelText } from '../../../styled/stepper/StyledLabelText.js';
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

const LabelComponent = forwardRef(({
  icon,
  iconProps,
  isHidden,
  children,
  ...other
}, ref) => {
  const {
    currentStepIndex,
    isActive,
    isCompleted,
    isHorizontal
  } = useStepContext();
  const numericStep = currentStepIndex + 1;
  const stepIcon = icon || numericStep;
  const styledIcon = React__default.createElement(StyledIcon, {
    $isActive: isActive,
    $isHorizontal: isHorizontal
  }, isCompleted ? React__default.createElement(SvgCheckSmStroke, iconProps) : stepIcon);
  return React__default.createElement(StyledLabel, Object.assign({
    ref: ref,
    $isActive: isActive,
    $isHorizontal: isHorizontal
  }, other), isHorizontal ? React__default.createElement(StyledIconFlexContainer, null, styledIcon) : styledIcon, React__default.createElement(StyledLabelText, {
    $isHidden: isHidden,
    $isHorizontal: isHorizontal
  }, children));
});
LabelComponent.displayName = 'Stepper.Label';
LabelComponent.propTypes = {
  icon: PropTypes.any,
  iconProps: PropTypes.object,
  isHidden: PropTypes.bool
};
const Label = LabelComponent;

export { Label };
