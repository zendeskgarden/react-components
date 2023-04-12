/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useText } from '@zendeskgarden/react-theming';
import { IOptGroupProps } from '../types';
import useComboboxContext from '../context/useComboboxContext';
import {
  StyledOptGroup,
  StyledOption,
  StyledOptionContent,
  StyledOptionTypeIcon,
  StyledSeparator
} from '../views';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const OptGroup = forwardRef<HTMLLIElement, IOptGroupProps>(
  ({ children, icon, label, 'aria-label': ariaLabel, ...props }, ref) => {
    const { isCompact } = useComboboxContext();
    /* This useText logic ensures that the group has a valid `aria-label`, either
     * specified directly or provided by the `label` prop. */
    const name = label && !ariaLabel ? 'label' : 'aria-label';
    const groupAriaLabel = useText(
      OptGroup,
      { label, 'aria-label': ariaLabel },
      name,
      label ? '' : 'group'
    );

    return (
      <StyledOption isCompact={isCompact} $type="group" role="none" {...props} ref={ref}>
        <StyledOptionContent>
          {label && (
            <StyledOption as="div" isCompact={isCompact} $type="header">
              {icon && (
                <StyledOptionTypeIcon isCompact={isCompact} type="header">
                  {icon}
                </StyledOptionTypeIcon>
              )}
              {label}
            </StyledOption>
          )}
          <StyledOptGroup aria-label={groupAriaLabel} isCompact={isCompact}>
            <StyledSeparator role="none" />
            {children}
          </StyledOptGroup>
        </StyledOptionContent>
      </StyledOption>
    );
  }
);

OptGroup.displayName = 'OptGroup';

OptGroup.propTypes = {
  icon: PropTypes.any
};
