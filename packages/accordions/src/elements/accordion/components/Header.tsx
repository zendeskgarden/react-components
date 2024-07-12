/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, forwardRef, HTMLAttributes, useMemo } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { useAccordionContext, useSectionContext, HeaderContext } from '../../../utils';
import { StyledHeader, StyledRotateIcon } from '../../../styled';

const HeaderComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { onClick, onMouseOver, onMouseOut, role, children, ...other } = props;
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
  /**
   *  Pressing the space key on a button triggers the `onTriggerClick` callback.
   * `onKeyDown` is plucked out and not passed to the Label (button) element
   * to prevent double invocations of the click event.
   */
  const {
    onClick: onTriggerClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onKeyDown,
    ...otherTriggerProps
  } = getTriggerProps({
    type: 'button',
    value: sectionValue
  });

  const value = useMemo(
    () => ({
      isHovered,
      otherTriggerProps
    }),
    [isHovered, otherTriggerProps]
  );

  return (
    <HeaderContext.Provider value={value}>
      <StyledHeader
        $isCollapsible={isCollapsible}
        $isExpanded={isExpanded}
        {...(getHeaderProps({
          ref,
          'aria-level': ariaLevel,
          role: role === undefined || role === null ? role : 'heading',
          onClick: composeEventHandlers(onClick, onTriggerClick),
          onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
          onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
          ...other
        }) as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
        <StyledRotateIcon
          $isCompact={isCompact}
          $isHovered={isHovered}
          $isRotated={isExpanded}
          $isCollapsible={isCollapsible}
          onMouseOver={composeEventHandlers(onMouseOver, () => setIsHovered(true))}
          onMouseOut={composeEventHandlers(onMouseOut, () => setIsHovered(false))}
        >
          <ChevronDown />
        </StyledRotateIcon>
      </StyledHeader>
    </HeaderContext.Provider>
  );
});

HeaderComponent.displayName = 'Accordion.Header';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = HeaderComponent;
