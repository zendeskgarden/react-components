/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ISubNavItemTextProps } from '../../types';
import { StyledSubNavItemText } from '../../styled';

/**
 * @deprecated use `SubNav.ItemText` instead
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const SubNavItemText = React.forwardRef<HTMLElement, ISubNavItemTextProps>((props, ref) => (
  <StyledSubNavItemText ref={ref} {...props} />
));

SubNavItemText.displayName = 'SubNavItemText';

SubNavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
