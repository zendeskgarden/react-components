/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

export interface IMDProps extends HTMLAttributes<HTMLDivElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style */
  isBold?: boolean;
  /** Renders with monospace font */
  isMonospace?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const MD = forwardRef<HTMLDivElement, IMDProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="md" {...other} />
));

MD.displayName = 'MD';

MD.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

MD.defaultProps = {
  tag: 'div'
};
