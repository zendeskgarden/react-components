/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledFont } from '../../styled';
import { ISpanProps } from '../../types';
import { Icon } from './Icon';
import { StartIcon } from './StartIcon';

const SpanComponent = forwardRef<HTMLSpanElement, ISpanProps>(
  ({ hue, isBold, isMonospace, tag = 'span', ...other }, ref) => (
    <StyledFont
      $hue={hue}
      $isBold={isBold}
      $isMonospace={isMonospace}
      $size="inherit"
      as={tag}
      ref={ref}
      {...other}
    />
  )
);

SpanComponent.displayName = 'Span';

SpanComponent.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool,
  hue: PropTypes.string
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
