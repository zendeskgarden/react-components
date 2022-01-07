/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledWell } from '../styled';

export interface IWellProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies a background color */
  isRecessed?: boolean;
  /** Applies a drop shadow */
  isFloating?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Well = React.forwardRef<HTMLDivElement, IWellProps>((props, ref) => (
  <StyledWell ref={ref} {...props} />
));

Well.displayName = 'Well';

Well.propTypes = {
  isRecessed: PropTypes.bool,
  isFloating: PropTypes.bool
};
