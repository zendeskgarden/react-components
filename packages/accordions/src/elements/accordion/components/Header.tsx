/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/*
  Keyboard visual indicators are separate from hover visual indicators as outlined by the
  `Accordion.Header` design, so there are no key events associated to mouse events. Ignoring this
  lint rule is uncommon, but required for Garden's `Accordion.Header`.
*/

/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React, { useState, FocusEvent, forwardRef, HTMLAttributes } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { useAccordionContext, useSectionContext, HeaderContext } from '../../../utils';
import { StyledHeader, StyledRotateIcon, COMPONENT_ID as buttonGardenId } from '../../../styled';

export interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply props to the wrapping `Accordion.Header` element */
  wrapperProps?: any;
}

export const Header = forwardRef<HTMLDivElement, IHeaderProps>((props, ref) => {
  const {
    level: ariaLevel,
    isCompact,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const {
    onClick,
    onFocus,
    onBlur,
    onMouseOver,
    onMouseOut,
    wrapperProps,
    children,
    ...other
  } = props;
  const sectionIndex = useSectionContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = expandedSections.includes(sectionIndex);
  const { onClick: onTriggerClick, ...otherTriggerProps } = getTriggerProps({
    index: sectionIndex,
    ...other
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
          onClick: composeEventHandlers(onClick, onTriggerClick),
          onFocus: composeEventHandlers(onFocus, onHeaderFocus),
          onBlur: composeEventHandlers(onBlur, () => setIsFocused(false)),
          onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
          onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
          ...wrapperProps
        })}
      >
        {children}
        <StyledRotateIcon
          isCompact={isCompact}
          isHovered={isHovered}
          isRotated={isExpanded}
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
