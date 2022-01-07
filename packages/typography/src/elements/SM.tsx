/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

export interface ISMProps extends HTMLAttributes<HTMLDivElement> {
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
const SM: React.FunctionComponent<ISMProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, ISMProps>(({ tag, ...other }, ref) => (
    <StyledFont as={tag} ref={ref} size="sm" {...other} />
  ));

SM.displayName = 'SM';

SM.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

SM.defaultProps = {
  tag: 'div'
};

export default SM;
