/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import React, { forwardRef, LiHTMLAttributes } from 'react';

import { StyledGapListItem } from '../../../styled';

const GapComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const ariaLabel = useText(
    GapComponent,
    props,
    'aria-label',
    'Ellipsis indicating non-visible pages'
  );

  return (
    <StyledGapListItem {...props} aria-label={ariaLabel} ref={ref}>
      …
    </StyledGapListItem>
  );
});

GapComponent.displayName = 'Pagination.Gap';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Gap = GapComponent;
