/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Styled{{capitalize component}} } from '../styled';

export interface I{{capitalize component}}Props extends HTMLAttributes<HTMLDivElement> {
  /** Applies compact styling */
  isCompact?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const {{capitalize component}} = React.forwardRef<HTMLDivElement, I{{capitalize component}}Props>((props, ref) => (
  <Styled{{capitalize component}} ref={ref} {...props} />
));

{{capitalize component}}.displayName = '{{capitalize component}}';

{{capitalize component}}.propTypes = {
  isCompact: PropTypes.bool
};
