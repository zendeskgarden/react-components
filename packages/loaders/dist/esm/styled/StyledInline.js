/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css, keyframes } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.inline';
const colorStyles = _ref => {
  let {
    theme,
    $color
  } = _ref;
  const options = $color.includes('.') ? {
    variable: $color,
    theme
  } : {
    hue: $color,
    theme
  };
  return css(["color:", ";"], getColor(options));
};
const retrieveAnimation = _ref2 => {
  let {
    theme
  } = _ref2;
  return keyframes(["0%,100%{opacity:", ";}50%{opacity:", ";}"], theme.opacity[200], theme.opacity[600]);
};
const StyledCircle = styled.circle.attrs({
  fill: 'currentColor',
  cy: 2,
  r: 2
}).withConfig({
  displayName: "StyledInline__StyledCircle",
  componentId: "sc-fxsb9l-0"
})([""]);
const StyledInline = styled.svg.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  viewBox: '0 0 16 4',
  width: props.$size,
  height: props.$size * 0.25
})).withConfig({
  displayName: "StyledInline",
  componentId: "sc-fxsb9l-1"
})(["", ";", "{opacity:0.2;&:nth-child(1){animation:", " 1s infinite;animation-delay:", ";}&:nth-child(2){animation:", " 1s infinite;animation-delay:0.2s;}&:nth-child(3){animation:", " 1s infinite;animation-delay:", ";}}", ""], colorStyles, StyledCircle, retrieveAnimation, props => props.theme.rtl ? 'unset' : '0.4s', retrieveAnimation, retrieveAnimation, props => props.theme.rtl ? '0.4s' : 'unset', componentStyles);

export { StyledCircle, StyledInline };
