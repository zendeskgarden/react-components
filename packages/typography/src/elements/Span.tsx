/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont } from '../styled';

interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
  /** Render bold font */
  isBold?: boolean;
}

/**
 * Accepts all standard attributes and events for the provided `tag`
 */
const Span: React.FunctionComponent<
  ISpanProps & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, ISpanProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="inherit" {...other} />
));

Span.displayName = 'Span';

Span.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool
};

Span.defaultProps = {
  tag: 'span'
};

/** @component */
export default Span;
