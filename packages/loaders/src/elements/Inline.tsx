/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, SVGAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledInlineTypingSVG, StyledCircle } from '../styled';

export interface IInlineProps extends SVGAttributes<SVGSVGElement> {
  /** Sets the width in pixels and scales the loader proportionally */
  size?: number;
  /** Sets the fill color. Inherits the parent's `color` by default. */
  color?: string;
}

/**
 * @extends SVGAttributes<SVGSVGElement>
 */
export const Inline = forwardRef<SVGSVGElement, IInlineProps>(({ size, color, ...other }, ref) => (
  <StyledInlineTypingSVG ref={ref} size={size!} color={color!} {...other}>
    <StyledCircle cx="14" />
    <StyledCircle cx="8" />
    <StyledCircle cx="2" />
  </StyledInlineTypingSVG>
));

Inline.displayName = 'Inline';

Inline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

Inline.defaultProps = {
  size: 16,
  color: 'inherit'
};
