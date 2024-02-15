/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, HTMLAttributes, createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import { ICollapsibleSubNavItemProps } from '../../types';
import {
  StyledSubNavItemHeader,
  StyledSubNavPanel,
  StyledSubNavItemIconWrapper,
  StyledSubNavItemIcon
} from '../../styled';
import { useChromeContext } from '../../utils/useChromeContext';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const CollapsibleSubNavItem = React.forwardRef<HTMLDivElement, ICollapsibleSubNavItemProps>(
  ({ header, children, isExpanded: controlledExpanded, onChange, ...other }, ref) => {
    const { isDark, isLight } = useChromeContext();
    const panelRef = createRef<HTMLDivElement>();
    const [internalExpanded, setInternalExpanded] = useState(controlledExpanded);
    const expanded = getControlledValue(controlledExpanded, internalExpanded);
    const value = 0;
    const expandedSections = expanded ? [value] : [];

    const { getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
      sections: [value],
      expandedSections,
      onChange: () => {
        const isExpanded = expandedSections.length === 0;

        if (onChange) {
          onChange(isExpanded);
        } else {
          setInternalExpanded(isExpanded);
        }
      }
    });

    useEffect(() => {
      if (expanded && panelRef.current) {
        panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
      }
    }, [expanded, children, panelRef]);

    return (
      <div ref={ref}>
        <div {...getHeaderProps({ 'aria-level': 2 })}>
          <StyledSubNavItemHeader
            isDark={isDark}
            isLight={isLight}
            isExpanded={expanded}
            {...(getTriggerProps({
              ...other,
              role: null,
              tabIndex: null as any,
              value
            }) as ButtonHTMLAttributes<HTMLButtonElement>)}
            type="button"
          >
            <>
              {header}
              <StyledSubNavItemIconWrapper isExpanded={expanded}>
                <StyledSubNavItemIcon />
              </StyledSubNavItemIconWrapper>
            </>
          </StyledSubNavItemHeader>
        </div>
        <StyledSubNavPanel
          isHidden={!expanded}
          {...(getPanelProps({
            ref: panelRef,
            value
          }) as HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </StyledSubNavPanel>
      </div>
    );
  }
);

CollapsibleSubNavItem.propTypes = {
  header: PropTypes.any,
  isExpanded: PropTypes.bool,
  onChange: PropTypes.func
};

CollapsibleSubNavItem.displayName = 'CollapsibleSubNavItem';
