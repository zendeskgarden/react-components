/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledClose, IStyledCloseProps } from '../../styled';

/**
 * Used to close a Notification. Supports all `<button>` props
 */
export const Close = React.forwardRef<
  HTMLButtonElement,
  IStyledCloseProps & HTMLAttributes<HTMLButtonElement>
>((props, ref) => <StyledClose ref={ref} {...props} />);

Close.propTypes = {
  isFocused: PropTypes.bool,
  isHovered: PropTypes.bool
};
