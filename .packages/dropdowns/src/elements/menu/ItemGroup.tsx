/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import PropTypes from 'prop-types';
import React, { HTMLAttributes, forwardRef, useMemo } from 'react';

import { ItemGroupContext } from '../../context/useItemGroupContext';
import useMenuContext from '../../context/useMenuContext';
import { IItemGroupProps } from '../../types';
import {
  StyledItem,
  StyledItemContent,
  StyledItemGroup,
  StyledItemTypeIcon,
  StyledSeparator
} from '../../views';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const ItemGroup = forwardRef<HTMLLIElement, IItemGroupProps>(
  ({ children, content, legend, icon, 'aria-label': ariaLabel, type, ...props }, ref) => {
    const { isCompact, getItemGroupProps } = useMenuContext();

    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided implicitly by the `label` prop. */
    const groupAriaLabel = useText(
      ItemGroup,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Group',
      !legend /* condition */
    );

    const groupProps = getItemGroupProps({
      'aria-label': (groupAriaLabel || legend)!
    }) as HTMLAttributes<HTMLUListElement>;

    const contextValue = useMemo(() => ({ type }), [type]);

    return (
      <ItemGroupContext.Provider value={contextValue}>
        <StyledItem $isCompact={isCompact} $type="group" {...props} role="none" ref={ref}>
          <StyledItemContent>
            {!!(content || legend) && (
              <StyledItem as="div" $isCompact={isCompact} $type="header">
                {!!icon && (
                  <StyledItemTypeIcon $isCompact={isCompact} $type="header">
                    {icon}
                  </StyledItemTypeIcon>
                )}
                {content || legend}
              </StyledItem>
            )}
            <StyledItemGroup $isCompact={isCompact} {...groupProps}>
              <StyledSeparator role="none" />
              {children}
            </StyledItemGroup>
          </StyledItemContent>
        </StyledItem>
      </ItemGroupContext.Provider>
    );
  }
);

ItemGroup.displayName = 'ItemGroup';

ItemGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string,
  type: PropTypes.oneOf(['checkbox', 'radio', undefined])
};
