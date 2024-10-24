/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, MouseEventHandler, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useText } from '@zendeskgarden/react-theming';
import { IOptGroupProps } from '../../types';
import useComboboxContext from '../../context/useComboboxContext';
import {
  StyledListboxSeparator,
  StyledOptGroup,
  StyledOption,
  StyledOptionContent,
  StyledOptionTypeIcon
} from '../../views';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const OptGroup = forwardRef<HTMLLIElement, IOptGroupProps>(
  ({ children, content, icon, legend, 'aria-label': ariaLabel, onMouseDown, ...props }, ref) => {
    const { getOptGroupProps, isCompact } = useComboboxContext();
    /* Prevent listbox collapse */
    const handleMouseDown: MouseEventHandler = event => event.preventDefault();
    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided implicitly by the `label` prop. */
    const groupAriaLabel = useText(
      OptGroup,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Group',
      !legend /* condition */
    );
    const optGroupProps = getOptGroupProps({
      'aria-label': (groupAriaLabel || legend)!
    }) as HTMLAttributes<HTMLUListElement>;

    return (
      <StyledOption
        $isCompact={isCompact}
        $type="group"
        onMouseDown={composeEventHandlers(onMouseDown, handleMouseDown)}
        role="none"
        {...props}
        ref={ref}
      >
        <StyledOptionContent>
          {!!(content || legend) && (
            <StyledOption as="div" $isCompact={isCompact} $type="header">
              {!!icon && (
                <StyledOptionTypeIcon $isCompact={isCompact} $type="header">
                  {icon}
                </StyledOptionTypeIcon>
              )}
              {content || legend}
            </StyledOption>
          )}
          <StyledOptGroup $isCompact={isCompact} {...optGroupProps}>
            <StyledListboxSeparator role="none" />
            {children}
          </StyledOptGroup>
        </StyledOptionContent>
      </StyledOption>
    );
  }
);

OptGroup.displayName = 'OptGroup';

OptGroup.propTypes = {
  content: PropTypes.any,
  icon: PropTypes.any,
  legend: PropTypes.string
};
