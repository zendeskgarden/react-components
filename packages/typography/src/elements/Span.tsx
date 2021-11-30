/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont, StyledIcon } from '../styled';

export interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  /** Updates the element's HTML tag */
  tag?: any;
  /** Applies bold font style. Font weight is inherited by default. */
  isBold?: boolean;
  /** Renders with monospace font */
  isMonospace?: boolean;
  /**
   * Applies a font color. Use
   * [PALETTE](/components/palette#palette)
   * colors when possible. Accepts all hex values.
   */
  hue?: string;
}

const Span: React.FunctionComponent<ISpanProps & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, ISpanProps>(({ tag, ...other }, ref) => (
    <StyledFont as={tag} ref={ref} size="inherit" {...other} />
  ));

Span.displayName = 'Span';

Span.propTypes = {
  tag: PropTypes.any,
  isBold: PropTypes.bool,
  isMonospace: PropTypes.bool,
  hue: PropTypes.string
};

Span.defaultProps = {
  tag: 'span'
};

interface IIconProps extends HTMLAttributes<HTMLElement> {
  children: any;
}

const StartIcon = (props: IIconProps) => <StyledIcon isStart {...props} />;
const Icon = (props: IIconProps) => <StyledIcon {...props} />;

(Span as any).StartIcon = StartIcon;
(Span as any).Icon = Icon;

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export default Span as React.FunctionComponent<
  ISpanProps & React.RefAttributes<HTMLSpanElement>
> & {
  StartIcon: typeof StartIcon;
  Icon: typeof Icon;
};
