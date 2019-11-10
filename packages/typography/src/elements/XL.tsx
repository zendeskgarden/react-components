/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

interface IXLProps extends HTMLAttributes<HTMLDivElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
}

/**
 * Accepts all standard attributes and events for the provided `tag`
 */
const XL: React.FunctionComponent<
  IXLProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, IXLProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="xl" {...other} />
));

XL.propTypes = {
  tag: PropTypes.any
};

XL.defaultProps = {
  tag: 'div'
};

/** @component */
export default XL;
