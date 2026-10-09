/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledBlockquote } from '../styled';
import { IBlockquoteProps, SIZE } from '../types';

/**
 * @extends BlockquoteHTMLAttributes<HTMLQuoteElement>
 */
export const Blockquote = forwardRef<HTMLQuoteElement, IBlockquoteProps>(
  ({ size = 'medium', ...props }, ref) => <StyledBlockquote ref={ref} size={size} {...props} />
);

Blockquote.displayName = 'Blockquote';

Blockquote.propTypes = {
  size: PropTypes.oneOf(SIZE)
};
