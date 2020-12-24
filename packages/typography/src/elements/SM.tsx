/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

interface ISMProps extends HTMLAttributes<HTMLDivElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
  /** Render bold font */
  isBold?: boolean;
  /** Render monospace font */
  isMonospace?: boolean;
}

const SM: React.FunctionComponent<
  ISMProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, ISMProps>(({ tag, ...other }, ref) => (
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

/**
 * @component
 * @extends HTMLAttributes<HTMLDivElement>
 */
export default SM;
