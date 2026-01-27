/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import ChevronDown from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg?react';
import { useState, type ComponentPropsWithRef } from 'react';

import { HeaderProvider } from '../../context/accordion/HeaderContext';
import { useAccordionContext } from '../../hooks/accordion/useAccordionContext';
import { useSectionContext } from '../../hooks/accordion/useSectionContext';
import { StyledHeader } from '../../views/accordion/StyledHeader';
import { StyledRotateIcon } from '../../views/accordion/StyledRotateIcon';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = ({
  children,
  onClick,
  onMouseOver,
  onMouseOut,
  ref,
  role,
  ...other
}: ComponentPropsWithRef<'div'>) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const sectionValue = useSectionContext();
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
    ...triggerProps
  } = getTriggerProps({
    type: 'button',
    value: sectionValue
  });
  const headerProps = getHeaderProps({
    ref,
    'aria-level': ariaLevel,
    role: role === undefined || role === null ? role : 'heading',
    onClick: composeEventHandlers(onClick, onTriggerClick),
    onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
    onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
    ...other
  }) as any; // HACK to workaround https://github.com/styled-components/styled-components/issues/5652

  return (
    <HeaderProvider isHovered={isHovered} {...triggerProps}>
      <StyledHeader
        $isCollapsible={isCollapsible}
        $isExpanded={isExpanded}
        {...headerProps}
        data-garden-id={COMPONENT_IDS['accordions.header']}
        data-garden-version={PACKAGE_VERSION}
      >
        {children}
        <StyledRotateIcon
          $isCompact={isCompact}
          $isHovered={isHovered}
          $isRotated={isExpanded}
          $isCollapsible={isCollapsible}
          data-garden-id={COMPONENT_IDS['accordions.rotate_icon']}
          data-garden-version={PACKAGE_VERSION}
          onMouseOver={headerProps.onMouseOver}
          onMouseOut={headerProps.onMouseOut}
        >
          <ChevronDown />
        </StyledRotateIcon>
      </StyledHeader>
    </HeaderProvider>
  );
};
