/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { StyledSkipNav, StyledSkipNavIcon } from '../styled';
import { ISkipNavProps } from '../types';

/**
 * @extends AnchorHTMLAttributes<HTMLAnchorElement>
 */
export const SkipNav = React.forwardRef<HTMLAnchorElement, ISkipNavProps>(
  ({ targetId, zIndex = 1, children, ...props }, ref) => (
    <StyledSkipNav href={`#${targetId}`} $zIndex={zIndex} ref={ref} {...props}>
      <StyledSkipNavIcon />
      {children}
    </StyledSkipNav>
  )
);

SkipNav.displayName = 'SkipNav';

SkipNav.propTypes = {
  targetId: PropTypes.string.isRequired,
  zIndex: PropTypes.number
};
