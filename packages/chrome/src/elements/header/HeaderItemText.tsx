/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IHeaderItemTextProps } from '../../types';
import { StyledHeaderItemText } from '../../styled';

/**
 * @deprecated use `Header.ItemText` instead
 *
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const HeaderItemText = React.forwardRef<HTMLElement, IHeaderItemTextProps>(
  ({ isClipped, ...other }, ref) => (
    <StyledHeaderItemText ref={ref} $isClipped={isClipped} {...other} />
  )
);

HeaderItemText.displayName = 'Header.ItemText';

HeaderItemText.propTypes = {
  isClipped: PropTypes.bool
};
