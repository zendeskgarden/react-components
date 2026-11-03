/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import ChevronLeftIcon from '@zendeskgarden/svg-icons/src/chevron-left.svg';
import ChevronRightIcon from '@zendeskgarden/svg-icons/src/chevron-right.svg';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { useText } from '../../theming/utils/useText';
import { StyledNavigation } from '../../views/pagination/StyledNavigation';
import { COMPONENT_IDS } from '../utils';

const NextComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(NextComponent, props, 'aria-label', 'Next page');
    const theme = useGardenTheme();

    return (
      <StyledNavigation
        type="button"
        {...props}
        data-garden-id={COMPONENT_IDS['pagination.navigation']}
        data-garden-version={PACKAGE_VERSION}
        aria-label={ariaLabel}
        ref={ref}
      >
        {theme.rtl ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </StyledNavigation>
    );
  }
);

NextComponent.displayName = 'Pagination.Next';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Next = NextComponent;
