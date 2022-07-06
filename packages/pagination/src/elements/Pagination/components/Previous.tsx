/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ChevronLeftIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import ChevronRightIcon from '@zendeskgarden/svg-icons/src/16/chevron-right-stroke.svg';
import { useText } from '@zendeskgarden/react-theming';
import { StyledNavigation } from '../../../styled';

const PreviousComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  (props, ref) => {
    const ariaLabel = useText(PreviousComponent, props, 'aria-label', 'Previous page');
    const theme = useContext(ThemeContext);

    return (
      <StyledNavigation {...props} aria-label={ariaLabel} ref={ref}>
        {theme.rtl ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </StyledNavigation>
    );
  }
);

PreviousComponent.displayName = 'Pagination.Previous';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Previous = PreviousComponent;
