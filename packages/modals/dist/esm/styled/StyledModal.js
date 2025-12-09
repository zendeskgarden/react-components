/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { componentStyles, mediaQuery, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$d = 'modals.modal';
const animationName = keyframes(["0%{transform:scale(0);opacity:0;}50%{transform:scale(1.05);}100%{opacity:1;}"]);
const animationStyles = props => {
  if (props.$isAnimated) {
    return css(["animation:", " 0.3s ease-in;"], animationName);
  }
  return '';
};
const colorStyles$1 = ({
  theme
}) => {
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = getColor({
    variable: 'shadow.large',
    theme
  });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  return css(["border-color:", ";box-shadow:", ";background-color:", ";"], borderColor, shadow, backgroundColor);
};
const sizeStyles$2 = props => {
  return css(["", "{width:", ";}"], mediaQuery('up', props.$isLarge ? 'md' : 'sm', props.theme), props.$isLarge ? props.theme.breakpoints.md : props.theme.breakpoints.sm);
};
const StyledModal = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledModal",
  componentId: "sc-1pe1axu-0"
})(["display:flex;position:fixed;flex-direction:column;animation-delay:0.01s;margin:", ";border:", ";border-radius:", ";min-height:60px;max-height:calc(100vh - ", "px);overflow:auto;direction:", ";", ";", ";", ";&:focus{outline:none;}@media (max-height:399px){top:", "px;bottom:auto;margin-bottom:", "px;max-height:calc(100vh - ", "px);}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){right:", ";bottom:", ";transform:", ";}", ";"], props => props.$isCentered ? '0' : `${props.theme.space.base * 12}px`, props => props.theme.borders.sm, props => props.theme.borderRadii.md, props => props.theme.space.base * 24, props => props.theme.rtl && 'rtl', animationStyles, sizeStyles$2, colorStyles$1, props => props.theme.space.base * 6, props => props.theme.space.base * 6, props => props.theme.space.base * 12, props => props.$isCentered && '50%', props => props.$isCentered && '50%', props => props.$isCentered && 'translate(50%, 50%)', componentStyles);
StyledModal.propTypes = {
  $isLarge: PropTypes.bool,
  $isAnimated: PropTypes.bool
};

export { StyledModal };
