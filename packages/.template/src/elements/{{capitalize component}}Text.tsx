/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { Styled{{capitalize component}}Text } from '../styled';

const {{capitalize component}}TextComponent = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>((props, ref) => (
  <Styled{{capitalize component}}Text ref={ref} {...props} />
));

{{capitalize component}}TextComponent.displayName = '{{capitalize component}}.Text';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const {{capitalize component}}Text = {{capitalize component}}TextComponent;
