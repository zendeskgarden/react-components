/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState } from 'react';
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
    const panelRef = useRef<HTMLDivElement>();
    const [internalExpanded, setInternalExpanded] = useState(controlledExpanded);
    const expanded = getControlledValue(controlledExpanded, internalExpanded);
    const expandedSections = expanded ? [0] : [];

    const { getHeaderProps, getTriggerProps, getPanelProps } = useAccordion({
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
    }, [expanded, children]);

    return (
      <div ref={ref}>
        <div {...getHeaderProps({ ariaLevel: 2 })}>
          <StyledSubNavItemHeader
            isDark={isDark}
            isLight={isLight}
            {...getTriggerProps({
              isExpanded: expanded,
              index: 0,
              role: null,
              tabIndex: null,
              ...other
            })}
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
          {...getPanelProps({
            index: 0,
            isHidden: !expanded,
            ref: panelRef
          })}
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
