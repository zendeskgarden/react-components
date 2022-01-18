/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledSubNavItemText } from '../../styled';

export interface ISubNavItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Wraps overflow item text instead of truncating long strings with an ellipsis.
   * Use when `max-width` styling is applied to the subnav container.
   **/
  isWrapped?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const SubNavItemText = React.forwardRef<HTMLElement, ISubNavItemTextProps>((props, ref) => (
  <StyledSubNavItemText ref={ref} {...props} />
));

SubNavItemText.displayName = 'SubNavItemText';

SubNavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
