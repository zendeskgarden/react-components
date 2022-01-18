/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItemText } from '../../styled';
import { useNavContext } from '../../utils/useNavContext';

export interface INavItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Wraps overflow item text instead of truncating long strings with an ellipsis **/
  isWrapped?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const NavItemText = React.forwardRef<HTMLElement, INavItemTextProps>((props, ref) => {
  const { isExpanded } = useNavContext();

  return <StyledNavItemText ref={ref} isExpanded={isExpanded} {...props} />;
});

NavItemText.displayName = 'NavItemText';

NavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
