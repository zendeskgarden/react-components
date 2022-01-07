/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

export interface ILGProps extends HTMLAttributes<HTMLDivElement> {
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
const LG: React.FunctionComponent<ILGProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, ILGProps>(({ tag, ...other }, ref) => (
    <StyledFont as={tag} ref={ref} size="lg" {...other} />
  ));

LG.displayName = 'LG';

LG.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool
};

LG.defaultProps = {
  tag: 'div'
};

export default LG;
