/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { StyledFileListItem } from '../../../styled';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Item = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ ...props }, ref) => <StyledFileListItem {...props} ref={ref} />
);

Item.displayName = 'FileList.Item';
