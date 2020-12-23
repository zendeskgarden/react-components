/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledTitle } from '../../styled';

export interface ITitleProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = React.forwardRef<HTMLDivElement, ITitleProps>((props, ref) => (
  <StyledTitle ref={ref} {...props} />
));

Title.displayName = 'Title';
