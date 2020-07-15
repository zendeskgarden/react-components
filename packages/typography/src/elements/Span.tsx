/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledFont, StyledIcon } from '../styled';

interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  /** Any valid DOM element for the styled component */
  tag?: any;
  /** Render bold font; `undefined` = inherited weight, `true` = bolded weight, `false` = regular weight */
  isBold?: boolean;
  /** Render monospace font */
  isMonospace?: boolean;
  /**
   * Apply a span color – typically constrained to a
   * [palette](https://garden.zendesk.com/react-components/theming/#palette)
   * hue, but with the ability to override using any hex value.
   */
  hue?: string;
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

export default Span as React.FunctionComponent<
  ISpanProps & React.RefAttributes<HTMLSpanElement>
> & {
  StartIcon: typeof StartIcon;
  Icon: typeof Icon;
};
