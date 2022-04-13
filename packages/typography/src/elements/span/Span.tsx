/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ISpanProps } from '../../types';
import { StyledFont } from '../../styled';
import { StartIcon } from './StartIcon';
import { Icon } from './Icon';

const SpanComponent = forwardRef<HTMLSpanElement, ISpanProps>(({ tag, ...other }, ref) => (
  <StyledFont as={tag} ref={ref} size="inherit" {...other} />
));

SpanComponent.displayName = 'Span';

SpanComponent.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool,
  hue: PropTypes.string
};

SpanComponent.defaultProps = {
  tag: 'span'
};

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Span = SpanComponent as typeof SpanComponent & {
  Icon: typeof Icon;
  StartIcon: typeof StartIcon;
};

Span.Icon = Icon;
Span.StartIcon = StartIcon;
