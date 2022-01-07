/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

export interface IXLProps extends HTMLAttributes<HTMLDivElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style */
  isBold?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const XL: React.FunctionComponent<IXLProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, IXLProps>(({ tag, ...other }, ref) => (
    <StyledFont as={tag} ref={ref} size="xl" {...other} />
  ));

XL.displayName = 'XL';

XL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XL.defaultProps = {
  tag: 'div'
};

export default XL;
