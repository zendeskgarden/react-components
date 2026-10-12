/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { IEllipsisProps } from '../../types/elements';
import { StyledEllipsis } from '../../views/typography/StyledEllipsis';
import { COMPONENT_IDS } from '../utils';

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
      <StyledEllipsis
        as={tag}
        ref={ref}
        title={textContent}
        {...other}
        data-garden-id={COMPONENT_IDS['typography.ellipsis']}
        data-garden-version={PACKAGE_VERSION}
      >
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
