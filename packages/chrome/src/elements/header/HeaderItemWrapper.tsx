/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { IHeaderItemWrapperProps } from '../../types';
import { StyledHeaderItemWrapper } from '../../styled';

/**
 * @deprecated use `Header.ItemWrapper` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const HeaderItemWrapper = React.forwardRef<HTMLDivElement, IHeaderItemWrapperProps>(
  ({ isRound, maxX, maxY, ...other }, ref) => (
    <StyledHeaderItemWrapper ref={ref} $isRound={isRound} $maxX={maxX} $maxY={maxY} {...other} />
  )
);

HeaderItemWrapper.displayName = 'Header.ItemWrapper';
