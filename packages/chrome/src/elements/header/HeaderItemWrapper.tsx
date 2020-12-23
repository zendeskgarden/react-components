/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledHeaderItemWrapper, IStyledBaseHeaderItemProps } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const HeaderItemWrapper = React.forwardRef<
  HTMLDivElement,
  IStyledBaseHeaderItemProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => <StyledHeaderItemWrapper ref={ref} {...props} />);

HeaderItemWrapper.displayName = 'HeaderItemWrapper';
