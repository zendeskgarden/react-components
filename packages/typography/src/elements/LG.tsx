/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

interface ILGProps extends HTMLAttributes<HTMLDivElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
  /** Render bold font */
  isBold?: boolean;
  /** Render monospace font */
  isMonospace?: boolean;
}

/**
 * Accepts all standard attributes and events for the provided `tag`
 */
const LG: React.FunctionComponent<
  ILGProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, ILGProps>(({ tag, ...other }, ref) => (
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

/** @component */
export default LG;
