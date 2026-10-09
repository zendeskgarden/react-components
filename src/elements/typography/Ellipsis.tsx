/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledEllipsis } from '../styled';
import { IEllipsisProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Ellipsis = forwardRef<HTMLDivElement, IEllipsisProps>(
  ({ children, title, tag = 'div', ...other }, ref) => {
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
  }
);

Ellipsis.displayName = 'Ellipsis';

Ellipsis.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.any
};
