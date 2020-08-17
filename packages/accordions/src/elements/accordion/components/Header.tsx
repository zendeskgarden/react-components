/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, FocusEvent, forwardRef, HTMLAttributes } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { useAccordionContext, useSectionContext, HeaderContext } from '../../../utils';
import { StyledHeader, StyledRotateIcon, COMPONENT_ID as buttonGardenId } from '../../../styled';

export const Header = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const { onClick, onFocus, onBlur, onMouseOver, onMouseOut, children, ...other } = props;
  const sectionIndex = useSectionContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = expandedSections.includes(sectionIndex);
  const { onClick: onTriggerClick, ...otherTriggerProps } = getTriggerProps({
    type: 'button',
    index: sectionIndex
  });
  const onHeaderFocus = (e: FocusEvent) => {
    e.persist();

    setTimeout(() => {
      const isAccordionButton = e.target.getAttribute('data-garden-id') === buttonGardenId;
      const isFocusVisible = e.target.getAttribute('data-garden-focus-visible');

      if (isAccordionButton && isFocusVisible) {
        setIsFocused(true);
      }
    }, 0);
  };

  const value = {
    isHovered,
    otherTriggerProps
  };

  return (
    <HeaderContext.Provider value={value}>
      <StyledHeader
        {...getHeaderProps({
          ref,
          ariaLevel,
          isCompact,
          isFocused,
          isExpanded,
          isCollapsible,
          onClick: composeEventHandlers(onClick, onTriggerClick),
          onFocus: composeEventHandlers(onFocus, onHeaderFocus),
          onBlur: composeEventHandlers(onBlur, () => setIsFocused(false)),
          onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
          onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
          ...other
        })}
      >
        {children}
        <StyledRotateIcon
          isCompact={isCompact}
          isHovered={isHovered}
          isRotated={isExpanded}
          isCollapsible={isCollapsible}
          onMouseOver={composeEventHandlers(onMouseOver, () => setIsHovered(true))}
          onMouseOut={composeEventHandlers(onMouseOut, () => setIsHovered(false))}
        >
          <ChevronDown />
        </StyledRotateIcon>
      </StyledHeader>
    </HeaderContext.Provider>
  );
});

Header.displayName = 'Header';
