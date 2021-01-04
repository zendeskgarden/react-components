/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledSubNavItemText, IStyledSubNavItemTextProps } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const SubNavItemText = React.forwardRef<
  HTMLElement,
  IStyledSubNavItemTextProps & HTMLAttributes<HTMLSpanElement>
>((props, ref) => <StyledSubNavItemText ref={ref} {...props} />);

SubNavItemText.displayName = 'SubNavItemText';

SubNavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
