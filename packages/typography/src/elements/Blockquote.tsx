/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { BlockquoteHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledBlockquote } from '../styled';

export interface IBlockquoteProps extends BlockquoteHTMLAttributes<HTMLElement> {
  /** Controls the spacing between sibling blockquotes */
  size?: 'small' | 'medium' | 'large';
}

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
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Blockquote.defaultProps = {
  size: 'medium'
};
