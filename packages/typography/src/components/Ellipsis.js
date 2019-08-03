/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledEllipsis } from '../styled';

/**
 * A component that automatically includes a native `title` attribute
 * and any text-overflow styling.
 *
 * All other props are spread onto the element.
 */
function Ellipsis({ children, title, tag, ...other }) {
  const StyledEllipsisTag = StyledEllipsis.withComponent(tag);

  let textContent = null;

  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }

  return (
    <StyledEllipsisTag title={textContent} {...other}>
      {children}
    </StyledEllipsisTag>
  );
}

Ellipsis.propTypes = {
  /**
   * Optional override for the auto-generated `title` attribute
   */
  title: PropTypes.string,
  /** Any valid element for the styled component */
  tag: PropTypes.any,
  children: PropTypes.string
};

Ellipsis.defaultProps = {
  tag: 'div'
};

export default Ellipsis;
