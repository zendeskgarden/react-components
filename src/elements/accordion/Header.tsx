/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useState, forwardRef, HTMLAttributes, useMemo } from 'react';
import ChevronDown from 'svg-icons-legacy/src/16/chevron-down-stroke.svg';

import { useAccordionContext, useSectionContext, HeaderContext } from '../../utils/accordion/index';
import { StyledHeader } from '../../views/accordion/StyledHeader';
import { StyledRotateIcon } from '../../views/accordion/StyledRotateIcon';
import { COMPONENT_IDS } from '../utils';

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
    <HeaderProvider value={value}>
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
        data-garden-id={COMPONENT_IDS['accordions.header']}
        data-garden-version={PACKAGE_VERSION}
      >
        {children}
        <StyledRotateIcon
          $isCompact={isCompact}
          $isHovered={isHovered}
          $isRotated={isExpanded}
          $isCollapsible={isCollapsible}
          onMouseOver={composeEventHandlers(onMouseOver, () => setIsHovered(true))}
          onMouseOut={composeEventHandlers(onMouseOut, () => setIsHovered(false))}
          data-garden-id={COMPONENT_IDS['accordions.rotate_icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <ChevronDown />
        </StyledRotateIcon>
      </StyledHeader>
    </HeaderProvider>
  );
});

HeaderComponent.displayName = 'Accordion.Header';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = HeaderComponent;
