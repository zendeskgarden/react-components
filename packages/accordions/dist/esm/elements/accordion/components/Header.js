/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useState, useMemo } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import SvgChevronDownStroke from '../../../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';
import '../../../utils/useStepperContext.js';
import '../../../utils/useStepContext.js';
import { useAccordionContext } from '../../../utils/useAccordionContext.js';
import { useSectionContext } from '../../../utils/useSectionContext.js';
import { HeaderContext } from '../../../utils/useHeaderContext.js';
import '../../../utils/useTimelineContext.js';
import '../../../utils/useTimelineItemContext.js';
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
import { StyledHeader } from '../../../styled/accordion/StyledHeader.js';
import '../../../styled/accordion/StyledButton.js';
import '../../../styled/accordion/StyledPanel.js';
import '../../../styled/accordion/StyledInnerPanel.js';
import { StyledRotateIcon } from '../../../styled/accordion/StyledRotateIcon.js';
import '../../../styled/timeline/StyledTimeline.js';
import '../../../styled/timeline/StyledItem.js';
import '../../../styled/timeline/StyledItemIcon.js';
import '../../../styled/timeline/StyledContent.js';
import '../../../styled/timeline/StyledOppositeContent.js';
import '../../../styled/timeline/StyledSeparator.js';

const HeaderComponent = forwardRef((props, ref) => {
  const {
    onClick,
    onMouseOver,
    onMouseOut,
    role,
    children,
    ...other
  } = props;
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const sectionValue = useSectionContext();
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = expandedSections.includes(sectionValue);
  const {
    onClick: onTriggerClick,
    onKeyDown,
    ...otherTriggerProps
  } = getTriggerProps({
    type: 'button',
    value: sectionValue
  });
  const value = useMemo(() => ({
    isHovered,
    otherTriggerProps
  }), [isHovered, otherTriggerProps]);
  return React__default.createElement(HeaderContext.Provider, {
    value: value
  }, React__default.createElement(StyledHeader, Object.assign({
    $isCollapsible: isCollapsible,
    $isExpanded: isExpanded
  }, getHeaderProps({
    ref,
    'aria-level': ariaLevel,
    role: role === undefined || role === null ? role : 'heading',
    onClick: composeEventHandlers(onClick, onTriggerClick),
    onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
    onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
    ...other
  })), children, React__default.createElement(StyledRotateIcon, {
    $isCompact: isCompact,
    $isHovered: isHovered,
    $isRotated: isExpanded,
    $isCollapsible: isCollapsible,
    onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
    onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false))
  }, React__default.createElement(SvgChevronDownStroke, null))));
});
HeaderComponent.displayName = 'Accordion.Header';
const Header = HeaderComponent;

export { Header };
