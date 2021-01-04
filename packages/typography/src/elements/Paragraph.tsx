/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from '../styled';

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Controls the spacing between sibling paragraphs */
  size?: 'small' | 'medium' | 'large';
}

/**
 * @extends HTMLAttributes<HTMLParagraphElement>
 */
const Paragraph: React.FunctionComponent<
  IParagraphProps & React.RefAttributes<HTMLParagraphElement>
> = React.forwardRef<HTMLParagraphElement, IParagraphProps>(({ size, ...other }, ref) => {
  let _size: 'sm' | 'md' | 'lg';

  if (size === 'small') {
    _size = 'sm';
  } else if (size === 'medium') {
    _size = 'md';
  } else {
    _size = 'lg';
  }

  return <StyledParagraph ref={ref} size={_size} {...other} />;
});

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Paragraph.defaultProps = {
  size: 'medium'
};

export default Paragraph;
