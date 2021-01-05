/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderItemText, IStyledHeaderItemTextProps } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const HeaderItemText = React.forwardRef<
  HTMLElement,
  IStyledHeaderItemTextProps & HTMLAttributes<HTMLElement>
>((props, ref) => <StyledHeaderItemText ref={ref} {...props} />);

HeaderItemText.displayName = 'HeaderItemText';

HeaderItemText.propTypes = {
  isClipped: PropTypes.bool
};
