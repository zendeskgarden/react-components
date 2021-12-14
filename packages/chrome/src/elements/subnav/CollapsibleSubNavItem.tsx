/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useRef, useState, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useAccordion } from '@zendeskgarden/container-accordion';
import { getControlledValue } from '@zendeskgarden/container-utilities';
import {
  StyledSubNavItemHeader,
  StyledSubNavPanel,
  StyledSubNavItemIconWrapper,
  StyledSubNavItemIcon
} from '../../styled';

export interface ICollapsibleSubNavItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Sets the item's section header */
  header?: React.ReactNode;
  /** Reveals the item's section */
  isExpanded?: boolean;
  /**
   * Handles changes in the item's expansion state
   *
   * @param {boolean} isExpanded An item's expansion state
   */
  onChange?: (isExpanded: boolean) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const CollapsibleSubNavItem = React.forwardRef<HTMLDivElement, ICollapsibleSubNavItemProps>(
  ({ header, children, isExpanded: controlledExpanded, onChange, ...other }, ref) => {
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
  onChange: PropTypes.func,
  children: PropTypes.node
};

CollapsibleSubNavItem.displayName = 'CollapsibleSubNavItem';
