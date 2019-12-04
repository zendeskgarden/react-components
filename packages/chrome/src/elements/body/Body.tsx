/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledBody, IStyledBodyProps } from '../../styled';

/**
 * Accepts all `<div>` attributes and events
 */
export const Body = React.forwardRef<
  HTMLDivElement,
  IStyledBodyProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => <StyledBody ref={ref} {...props} />);

Body.propTypes = {
  hasFooter: PropTypes.bool
};
