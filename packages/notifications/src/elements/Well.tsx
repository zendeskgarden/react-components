/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledWell } from '../styled';

interface IWellProps {
  isRecessed?: boolean;
  isFloating?: boolean;
}

/**
 * Supports all `<div>` props
 */
export const Well = React.forwardRef<HTMLDivElement, IWellProps & HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <StyledWell ref={ref} {...props} />
);

Well.propTypes = {
  isRecessed: PropTypes.bool,
  isFloating: PropTypes.bool
};
