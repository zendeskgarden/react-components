/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IAccessibleTextProps } from '../types';
import { StyledHiddenText } from '../styled';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const AccessibleText = forwardRef<HTMLSpanElement, IAccessibleTextProps>(
  ({ tag, ...other }, ref) => <StyledHiddenText as={tag} ref={ref} {...other} />
);

AccessibleText.displayName = 'AccessibleText';

AccessibleText.propTypes = {
  tag: PropTypes.any
};

AccessibleText.defaultProps = {
  tag: 'span'
};
