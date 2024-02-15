/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { StyledGap } from '../../../styled';

const GapComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => (
  <StyledGap {...props} ref={ref}>
    …
  </StyledGap>
));

GapComponent.displayName = 'Pagination.Gap';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Gap = GapComponent;
