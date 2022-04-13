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
export const Paragraph = forwardRef<HTMLParagraphElement, IParagraphProps>((props, ref) => (
  <StyledParagraph ref={ref} {...props} />
));

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(SIZE)
};

Paragraph.defaultProps = {
  size: 'medium'
};
