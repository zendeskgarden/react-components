/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IHeaderProps } from '../../types';
import { StyledHeader } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Header = React.forwardRef<HTMLElement, IHeaderProps>((props, ref) => (
  <StyledHeader ref={ref} {...props} />
));

Header.displayName = 'Header';

Header.propTypes = {
  isStandalone: PropTypes.bool
};
