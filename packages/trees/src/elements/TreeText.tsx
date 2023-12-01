/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledTreeText } from '../styled';

const TreeTextComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <StyledTreeText ref={ref} {...props} />
));

TreeTextComponent.displayName = 'Tree.Text';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const TreeText = TreeTextComponent;
