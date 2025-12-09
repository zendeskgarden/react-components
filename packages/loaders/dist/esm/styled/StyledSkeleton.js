/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { keyframes, css } from 'styled-components';
import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'loaders.skeleton';
const fadeInAnimation = keyframes(["0%,60%{opacity:0;}100%{opacity:1;}"]);
const skeletonAnimation = keyframes(["0%{transform:translateX(-100%);}100%{transform:translateX(100%);}"]);
const skeletonRtlAnimation = keyframes(["0%{transform:translateX(100%);}100%{transform:translateX(-100%)}"]);
const getBackgroundColor = _ref => {
  let {
    theme,
    $isLight
  } = _ref;
  let backgroundColor;
  if ($isLight) {
    backgroundColor = getColor({
      theme,
      hue: 'white',
      transparency: theme.opacity[200]
    });
  } else {
    backgroundColor = getColor({
      theme,
      transparency: theme.opacity[200],
      light: {
        hue: 'neutralHue',
        shade: 700
      },
      dark: {
        hue: 'white'
      }
    });
  }
  return backgroundColor;
};
const animationStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  if (theme.rtl) {
    return css(["animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonRtlAnimation);
  }
  return css(["animation:", " 1.5s ease-in-out 300ms infinite;"], skeletonAnimation);
};
const gradientStyles = props => {
  return css(["background-image:linear-gradient( ", ",transparent,", ",transparent );"], props.theme.rtl ? '-45deg' : '45deg', getBackgroundColor);
};
const StyledSkeleton = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkeleton",
  componentId: "sc-1raozze-0"
})(["display:inline-block;position:relative;animation:", " 750ms linear;border-radius:", ";background-color:", ";width:", ";height:", ";overflow:hidden;line-height:", ";&::before{position:absolute;top:0;width:1000px;height:100%;content:'';", " ", "}", ";"], fadeInAnimation, props => props.theme.borderRadii.md, getBackgroundColor, props => props.$width, props => props.$height, props => getLineHeight(props.theme.fontSizes.sm, props.theme.space.base * 5), animationStyles, gradientStyles, componentStyles);

export { StyledSkeleton };
