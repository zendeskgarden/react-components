/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from '../styled';

export interface IGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Enable fluid-width grid layout */
  isFluid?: boolean;
  /** Highlight row/col layout */
  isDebug?: boolean;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Grid = React.forwardRef<HTMLDivElement, IGridProps>((props, ref) => (
  <StyledGrid ref={ref} {...props} />
));

Grid.propTypes = {
  isFluid: PropTypes.bool,
  isDebug: PropTypes.bool
};

Grid.defaultProps = {
  isFluid: true
};
