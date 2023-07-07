/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { IItemGroupProps } from '../../types';
import useMenuContext from '../../context/useMenuContext';
import {
  StyledItem,
  StyledItemContent,
  StyledItemGroup,
  StyledItemTypeIcon,
  StyledMenuSeparator
} from '../../views';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const ItemGroup = forwardRef<HTMLLIElement, IItemGroupProps>(
  ({ children, content, label, icon, 'aria-label': ariaLabel, ...props }, ref) => {
    const { isCompact } = useMenuContext();
    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided implicitly by the `label` prop. */
    const groupAriaLabel = useText(
      ItemGroup,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Group',
      !label /* condition */
    );

    return (
      <StyledItem isCompact={isCompact} $type="group" {...props} ref={ref}>
        <StyledItemContent>
          {(content || label) && (
            <StyledItem as="div" isCompact={isCompact} $type="header">
              {icon && (
                <StyledItemTypeIcon isCompact={isCompact} type="header">
                  {icon}
                </StyledItemTypeIcon>
              )}
              {content || label}
            </StyledItem>
          )}
          <StyledItemGroup isCompact={isCompact} aria-label={groupAriaLabel || label}>
            <StyledMenuSeparator role="none" />
            {children}
          </StyledItemGroup>
        </StyledItemContent>
      </StyledItem>
    );
  }
);

ItemGroup.displayName = 'ItemGroup';
