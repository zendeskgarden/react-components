/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { BlockquoteHTMLAttributes } from 'react';
import { StyledBlockquote } from '../styled';

/**
 * @extends BlockquoteHTMLAttributes<HTMLElement>
 */
export const Blockquote = React.forwardRef<HTMLElement, BlockquoteHTMLAttributes<HTMLElement>>(
  (props, ref) => <StyledBlockquote ref={ref} {...props} />
);

Blockquote.displayName = 'Blockquote';

export default Blockquote;
