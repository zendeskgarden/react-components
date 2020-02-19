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
 * Accepts all `<span>` attributes and events
 */
export const SubNavItemText = React.forwardRef<
  HTMLElement,
  IStyledSubNavItemTextProps & HTMLAttributes<HTMLElement>
>((props, ref) => <StyledSubNavItemText ref={ref} {...props} />);

SubNavItemText.propTypes = {
  isWrapped: PropTypes.bool
};
