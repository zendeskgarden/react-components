/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.backdrop';
const animationName = keyframes(["0%{opacity:0;}100%{opacity:1;}"]);
const animationStyles = props => {
  if (props.$isAnimated) {
    return css(["animation:", " 0.15s ease-in;"], animationName);
  }
  return '';
};
const StyledBackdrop = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBackdrop",
  componentId: "sc-mzdjpo-0"
})(["display:flex;position:fixed;inset:0;align-items:", ";justify-content:", ";z-index:400;background-color:", ";overflow:auto;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";", ";", ";"], props => props.$isCentered && 'center', props => props.$isCentered && 'center', _ref => {
  let {
    theme
  } = _ref;
  return getColor({
    theme,
    hue: 'neutralHue',
    transparency: theme.opacity[1000],
    light: {
      shade: 900
    },
    dark: {
      shade: 1200
    }
  });
}, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', animationStyles, componentStyles);
StyledBackdrop.propTypes = {
  $isCentered: PropTypes.bool,
  $isAnimated: PropTypes.bool
};

export { StyledBackdrop };
