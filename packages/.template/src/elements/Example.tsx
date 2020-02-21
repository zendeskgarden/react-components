/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledExample } from '../styled';

interface IExampleProps extends HTMLAttributes<HTMLDivElement> {
  /** Apply compact styling */
  isCompact?: boolean;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Example = React.forwardRef<HTMLDivElement, IExampleProps>((props, ref) => (
  <StyledExample ref={ref} {...props} />
));

Example.displayName = 'Example';

Example.propTypes = {
  isCompact: PropTypes.bool
};
