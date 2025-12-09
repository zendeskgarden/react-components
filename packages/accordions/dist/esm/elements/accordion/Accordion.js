/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef, useMemo, Children, isValidElement } from 'react';
import { useAccordion } from '@zendeskgarden/container-accordion';
import '../../styled/stepper/StyledStep.js';
import '../../styled/stepper/StyledContent.js';
import '../../styled/stepper/StyledInnerContent.js';
import '../../styled/stepper/StyledLine.js';
import '../../styled/stepper/StyledStepper.js';
import '../../styled/stepper/StyledIcon.js';
import '../../styled/stepper/StyledLabel.js';
import '../../styled/stepper/StyledLabelText.js';
import { StyledAccordion } from '../../styled/accordion/StyledAccordion.js';
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
import '../../utils/useStepperContext.js';
import '../../utils/useStepContext.js';
import { AccordionContext } from '../../utils/useAccordionContext.js';
import { SectionContext } from '../../utils/useSectionContext.js';
import '../../utils/useHeaderContext.js';
import '../../utils/useTimelineContext.js';
import '../../utils/useTimelineItemContext.js';
import { Section } from './components/Section.js';
import { Header } from './components/Header.js';
import { Label } from './components/Label.js';
import { Panel } from './components/Panel.js';

const AccordionComponent = forwardRef((_ref, ref) => {
  let {
    children,
    isBare,
    isCompact,
    isAnimated = true,
    isExpandable,
    isCollapsible = true,
    level,
    onChange,
    defaultExpandedSections,
    expandedSections: controlledExpandedSections,
    ...props
  } = _ref;
  const {
    sections,
    sectionChildren
  } = useMemo(() => Children.toArray(children).filter(isValidElement).map((child, index) =>
  React__default.createElement(SectionContext.Provider, {
    key: index,
    value: index
  }, child)).reduce((acc, child, index) => {
    acc.sectionChildren.push(child);
    acc.sections.push(index);
    return acc;
  }, {
    sectionChildren: [],
    sections: []
  }), [children]);
  const {
    expandedSections,
    getHeaderProps,
    getTriggerProps,
    getPanelProps
  } = useAccordion({
    sections,
    defaultExpandedSections,
    expandedSections: controlledExpandedSections,
    collapsible: isCollapsible,
    expandable: isExpandable || false,
    onChange
  });
  const accordionContextValue = useMemo(() => ({
    level,
    isBare,
    isCompact,
    isAnimated,
    isCollapsible,
    getPanelProps,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  }), [level, isBare, isCompact, isAnimated, isCollapsible, getPanelProps, getHeaderProps, getTriggerProps, expandedSections]);
  return React__default.createElement(AccordionContext.Provider, {
    value: accordionContextValue
  }, React__default.createElement(StyledAccordion, Object.assign({
    ref: ref
  }, props), sectionChildren));
});
AccordionComponent.displayName = 'Accordion';
const Accordion = AccordionComponent;
Accordion.Header = Header;
Accordion.Label = Label;
Accordion.Panel = Panel;
Accordion.Section = Section;

export { Accordion };
