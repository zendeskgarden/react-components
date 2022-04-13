/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IBlockquoteProps, SIZE } from '../types';
import { StyledBlockquote } from '../styled';

/**
 * @extends BlockquoteHTMLAttributes<HTMLElement>
 */
export const Blockquote = React.forwardRef<HTMLElement, IBlockquoteProps>(
  ({ size, ...other }, ref) => {
    let _size: 'sm' | 'md' | 'lg';

    if (size === 'small') {
      _size = 'sm';
    } else if (size === 'medium') {
      _size = 'md';
    } else {
      _size = 'lg';
    }

    return <StyledBlockquote ref={ref} size={_size} {...other} />;
  }
);

Blockquote.displayName = 'Blockquote';

Blockquote.propTypes = {
  size: PropTypes.oneOf(SIZE)
};

Blockquote.defaultProps = {
  size: 'medium'
};
