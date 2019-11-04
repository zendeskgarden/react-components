/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledInlineTypingSVG, StyledCircle, IStyledTypingSvgProps } from '../styled';

const InlineTypingIndicator: React.FC<IStyledTypingSvgProps> = props => {
  return (
    <StyledInlineTypingSVG {...props}>
      <StyledCircle cx="14" />
      <StyledCircle cx="8" />
      <StyledCircle cx="2" />
    </StyledInlineTypingSVG>
  );
};

interface IInlineProps extends React.HTMLAttributes<SVGSVGElement> {
  /* Width of the loader in px */
  size?: number;
  color?: string;
}

/**
 * All other props are spread onto the root `<svg>` element
 */
const Inline: React.FC<IInlineProps> = ({ size, color, ...other }) => {
  return <InlineTypingIndicator size={size!} color={color!} {...other} />;
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
