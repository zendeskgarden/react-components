/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledInlineTypingIndicator } from '../styled';

interface IInlineProps extends React.HTMLAttributes<SVGSVGElement> {
  /* Width of the loader in px */
  size?: number;
  color?: string;
}

/**
 * All other props are spread onto the root `<svg>` element
 */
const Inline: React.FC<IInlineProps> = ({ size, color, ...other }) => {
  return <StyledInlineTypingIndicator size={size!} color={color!} {...other} />;
};

Inline.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

Inline.defaultProps = {
  size: 16,
  color: 'inherit'
};

/* @component */
export default Inline;
