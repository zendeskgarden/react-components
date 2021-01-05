/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, IStyledHeaderProps } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Header = React.forwardRef<
  HTMLElement,
  IStyledHeaderProps & HTMLAttributes<HTMLElement>
>((props, ref) => <StyledHeader ref={ref} {...props} />);

Header.displayName = 'Header';

Header.propTypes = {
  isStandalone: PropTypes.bool
};
