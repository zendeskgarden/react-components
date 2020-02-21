/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNavItemText, IStyledNavItemTextProps } from '../../styled';
import { useNavContext } from '../../utils/useNavContext';

/**
 * Accepts all `<span>` attributes and events
 */
export const NavItemText = React.forwardRef<
  HTMLElement,
  Omit<IStyledNavItemTextProps, 'isExpanded'> & HTMLAttributes<HTMLElement>
>((props, ref) => {
  const { isExpanded } = useNavContext();

  return <StyledNavItemText ref={ref} isExpanded={isExpanded} {...props} />;
});

NavItemText.displayName = 'NavItemText';

NavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
