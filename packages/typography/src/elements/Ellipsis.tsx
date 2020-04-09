/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledEllipsis } from '../styled';

interface IEllipsisProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Optional override for the auto-generated `title` attribute
   */
  title?: string;
  /** Any valid element for the styled component */
  tag?: any;
}

/**
 * A component that automatically includes a native `title` attribute and any
 * text-overflow styling. Accepts all standard attributes and events for the
 * provided `tag`.
 */
const Ellipsis: React.FunctionComponent<
  IEllipsisProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, IEllipsisProps>(({ children, title, tag, ...other }, ref) => {
  let textContent = undefined;

  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }

  return (
    <StyledEllipsis as={tag} ref={ref} title={textContent} {...other}>
      {children}
    </StyledEllipsis>
  );
});

Ellipsis.displayName = 'Ellipsis';

Ellipsis.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.any
};

Ellipsis.defaultProps = {
  tag: 'div'
};

export default Ellipsis;
