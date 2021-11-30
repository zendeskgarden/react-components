/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

export interface IXXLProps extends HTMLAttributes<HTMLDivElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style */
  isBold?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const XXL: React.FunctionComponent<IXXLProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, IXXLProps>(({ tag, ...other }, ref) => (
    <StyledFont as={tag} ref={ref} size="xxl" {...other} />
  ));

XXL.displayName = 'XXL';

XXL.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

XXL.defaultProps = {
  tag: 'div'
};

export default XXL;
