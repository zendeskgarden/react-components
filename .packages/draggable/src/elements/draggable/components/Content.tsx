/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledContent } from '../../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <StyledContent {...props} ref={ref} />
));

Content.displayName = 'Draggable.Content';
