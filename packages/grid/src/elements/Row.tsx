/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledRow } from '../styled';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Remove grid gutter spacing */
  isCollapsed?: boolean;
  /** Use flexbox alignment utilities to vertically align content */
  alignItems?: 'start' | 'center' | 'end';
  /** Use flexbox justify utilities to justify content */
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Row = React.forwardRef<HTMLDivElement, IRowProps>((props, ref) => (
  <StyledRow ref={ref} {...props} />
));

Row.propTypes = {
  isCollapsed: PropTypes.bool,
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};
