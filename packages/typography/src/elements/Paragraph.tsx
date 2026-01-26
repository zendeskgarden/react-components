/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledParagraph } from '../styled';
import { IParagraphProps, SIZE } from '../types';

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
export const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>(
  ({ size = 'medium', ...props }, ref) => <StyledParagraph ref={ref} size={size} {...props} />
);

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(SIZE)
};
