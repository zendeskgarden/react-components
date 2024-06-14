/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { ITitleProps } from '../../types';
import { StyledTitle } from '../../styled';

/**
 * @deprecated use `Alert.Title`, `Notification.Title`, or `Well.Title` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = React.forwardRef<HTMLDivElement, ITitleProps>(
  ({ isRegular, ...props }, ref) => <StyledTitle ref={ref} $isRegular={isRegular} {...props} />
);

Title.displayName = 'Title';
