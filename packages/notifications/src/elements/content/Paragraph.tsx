/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledParagraph } from '../../styled';

/**
 * Used for multi-line Notification content. Supports all `<p>` props
 */
export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>((props, ref) => <StyledParagraph ref={ref} {...props} />);

Paragraph.displayName = 'Paragraph';
