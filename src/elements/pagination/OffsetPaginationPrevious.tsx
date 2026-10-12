/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ChevronLeftIcon from 'svg-icons-legacy/src/16/chevron-left-stroke.svg';
import ChevronRightIcon from 'svg-icons-legacy/src/16/chevron-right-stroke.svg';

import DEFAULT_THEME from '../../theming/elements/theme';
import { useText } from '../../theming/utils/useText';
import { StyledNavigation } from '../../views/pagination/StyledNavigation';
import { COMPONENT_IDS } from '../utils';

const PreviousComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(PreviousComponent, props, 'aria-label', 'Previous page');
    const theme = useContext(ThemeContext) || DEFAULT_THEME;

    return (
      <StyledNavigation
        type="button"
        {...props}
        data-garden-id={COMPONENT_IDS['pagination.navigation']}
        data-garden-version={PACKAGE_VERSION}
        aria-label={ariaLabel}
        ref={ref}
      >
        {theme.rtl ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </StyledNavigation>
    );
  }
);

PreviousComponent.displayName = 'Pagination.Previous';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Previous = PreviousComponent;
