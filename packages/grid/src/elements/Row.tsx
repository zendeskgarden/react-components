/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import useGridContext from '../utils/useGridContext';
import { StyledRow } from '../styled';

export interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  alignContent?: 'start' | 'center' | 'end' | 'around' | 'between' | 'stretch';
  /** Use flexbox alignment utilities to vertically align content */
  alignItems?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  /** Use flexbox justify utilities to justify content */
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Row = React.forwardRef<HTMLDivElement, IRowProps>((props, ref) => {
  const { gutters } = useGridContext();

  return <StyledRow gutters={gutters} ref={ref} {...props} />;
});

Row.propTypes = {
  alignContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};

export default Row;
