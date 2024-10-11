/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { INavItemTextProps } from '../../types';
import { StyledNavItemText } from '../../styled';
import { useNavContext } from '../../utils/useNavContext';

/**
 * @deprecated use `Nav.ItemText` instead
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const NavItemText = React.forwardRef<HTMLElement, INavItemTextProps>(
  ({ isWrapped, ...other }, ref) => {
    const { isExpanded } = useNavContext();

    return (
      <StyledNavItemText ref={ref} $isExpanded={isExpanded} $isWrapped={isWrapped} {...other} />
    );
  }
);

NavItemText.displayName = 'Nav.ItemText';

NavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
