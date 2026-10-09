/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledText } from '../../styled';

const TextComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>((props, ref) => (
  <StyledText ref={ref} {...props} />
));

TextComponent.displayName = 'Avatar.Text';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Text = TextComponent;
