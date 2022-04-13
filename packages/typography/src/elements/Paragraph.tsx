/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IParagraphProps, SIZE } from '../types';
import { StyledParagraph } from '../styled';

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>(
  ({ size, ...other }, ref) => {
    let _size: 'sm' | 'md' | 'lg';

    if (size === 'small') {
      _size = 'sm';
    } else if (size === 'medium') {
      _size = 'md';
    } else {
      _size = 'lg';
    }

    return <StyledParagraph ref={ref} size={_size} {...other} />;
  }
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(SIZE)
};

Paragraph.defaultProps = {
  size: 'medium'
};
