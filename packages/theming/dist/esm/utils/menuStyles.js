/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { css, keyframes } from 'styled-components';
import DEFAULT_THEME from '../elements/theme/index.js';
import { getColor } from './getColor.js';

const animationStyles = (position, options) => {
  const theme = options.theme || DEFAULT_THEME;
  let translateValue = `${theme.space.base * 5}px`;
  let transformFunction;
  if (position === 'top') {
    transformFunction = 'translateY';
  } else if (position === 'right') {
    transformFunction = 'translateX';
    translateValue = `-${translateValue}`;
  } else if (position === 'bottom') {
    transformFunction = 'translateY';
    translateValue = `-${translateValue}`;
  } else {
    transformFunction = 'translateX';
  }
  const animationName = keyframes(["0%{transform:", "(", ");pointer-events:none;}100%{pointer-events:auto;}"], transformFunction, translateValue);
  return css(["&", " ", "{animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ", ";}"], options.animationModifier, options.childSelector || '> *', animationName);
};
const colorStyles = theme => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = getColor({
    variable: 'shadow.medium',
    theme
  });
  const boxShadowBlurRadius = `${theme.space.base * (theme.colors.base === 'dark' ? 5 : 6)}px`;
  const boxShadowOffsetY = `${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`;
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, theme.shadows.lg(boxShadowOffsetY, boxShadowBlurRadius, boxShadowColor), backgroundColor, foregroundColor);
};
const hiddenStyles = options => {
  const transition = 'opacity 0.2s ease-in-out, 0.2s visibility 0s linear';
  return css(["transition:", ";visibility:hidden;opacity:0;"], options.animationModifier && transition);
};
function menuStyles(position) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const theme = options.theme || DEFAULT_THEME;
  let marginProperty;
  if (position === 'top') {
    marginProperty = 'margin-bottom';
  } else if (position === 'right') {
    marginProperty = 'margin-left';
  } else if (position === 'bottom') {
    marginProperty = 'margin-top';
  } else {
    marginProperty = 'margin-right';
  }
  return css(["position:absolute;z-index:", ";", ":", ";line-height:0;font-size:0.01px;color-scheme:only ", ";& ", "{display:inline-block;position:relative;margin:0;box-sizing:border-box;border:", ";border-radius:", ";cursor:default;padding:0;text-align:", ";white-space:normal;font-size:", ";font-weight:", ";direction:", ";", ";&:focus{outline:none;}}", ";", ";"], options.zIndex || 0, marginProperty, options.margin, p => p.theme.colors.base, options.childSelector || '> *', theme.borders.sm, theme.borderRadii.md, theme.rtl ? 'right' : 'left', theme.fontSizes.md, theme.fontWeights.regular, theme.rtl && 'rtl', colorStyles(theme), options.animationModifier && animationStyles(position, options), options.hidden && hiddenStyles(options));
}

export { menuStyles as default };
