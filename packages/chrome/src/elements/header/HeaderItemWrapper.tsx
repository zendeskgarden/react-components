/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderItemWrapper } from '../../styled';

export interface IHeaderItemWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximizes the width of a flex item in the header */
  maxX?: boolean;
  /** Maximizes the height of the item (i.e. contains a search input) */
  maxY?: boolean;
  /** Rounds the border radius of the item */
  isRound?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const HeaderItemWrapper = React.forwardRef<HTMLDivElement, IHeaderItemWrapperProps>(
  (props, ref) => <StyledHeaderItemWrapper ref={ref} {...props} />
);

HeaderItemWrapper.displayName = 'HeaderItemWrapper';
