/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { css, keyframes } from 'styled-components';
import { stripUnit } from 'polished';

const animationStyles$1 = (position, modifier) => {
  const property = position.split('-')[0];
  const animationName = keyframes(["0%,66%{", ":2px;border:transparent;}"], property);
  return css(["&", "::before,&", "::after{animation:0.3s ease-in-out ", ";}"], modifier, modifier, animationName);
};
const positionStyles = (position, size, inset, shift) => {
  const defaultInset = 0.3;
  const margin = size / -2;
  const placement = Math.round((margin + inset + defaultInset) * 100) / 100;
  const marginPx = `${margin}px`;
  const placementPx = `${placement}px`;
  const offsetPx = `${size + shift}px`;
  let positionCss;
  let transform;
  if (position.startsWith('top')) {
    transform = 'rotate(-135deg)';
    positionCss = css(["top:", ";right:", ";left:", ";margin-left:", ";"], placementPx, position === 'top-right' && offsetPx, position === 'top' ? '50%' : position === 'top-left' && offsetPx, position === 'top' && marginPx);
  } else if (position.startsWith('right')) {
    transform = 'rotate(-45deg)';
    positionCss = css(["top:", ";right:", ";bottom:", ";margin-top:", ";"], position === 'right' ? '50%' : position === 'right-top' && offsetPx, placementPx, position === 'right-bottom' && offsetPx, position === 'right' && marginPx);
  } else if (position.startsWith('bottom')) {
    transform = 'rotate(45deg)';
    positionCss = css(["right:", ";bottom:", ";left:", ";margin-left:", ";"], position === 'bottom-right' && offsetPx, placementPx, position === 'bottom' ? '50%' : position === 'bottom-left' && offsetPx, position === 'bottom' && marginPx);
  } else if (position.startsWith('left')) {
    transform = 'rotate(135deg)';
    positionCss = css(["top:", ";bottom:", ";left:", ";margin-top:", ";"], position === 'left' ? '50%' : position === 'left-top' && offsetPx, offsetPx, placementPx, position === 'left' && marginPx);
  }
  return css(["&::before,&::after{transform:", ";", ";}"], transform, positionCss);
};
function arrowStyles(position, options = {}) {
  const inset = stripUnit(options.inset || '0');
  const size = stripUnit(options.size || '6');
  const shift = stripUnit(options.shift || '0');
  const sizeOffset = 2;
  const squareSize = size * 2 / Math.sqrt(2) + sizeOffset;
  const squareSizeRounded = Math.round(squareSize * 100) / 100;
  const squareSizePx = `${squareSizeRounded}px`;
  const afterOffset = 0;
  const beforeOffset = afterOffset + 2;
  return css(["position:relative;&::before,&::after{position:absolute;border-width:inherit;border-style:inherit;background-color:inherit;width:", ";height:", ";content:'';box-sizing:inherit;}&::before{border-color:inherit;clip-path:polygon(100% ", "px,", "px 100%,100% 100%);}&::after{border-color:transparent;background-clip:content-box;clip-path:polygon(100% ", "px,", "px 100%,100% 100%);}", ";", ";"], squareSizePx, squareSizePx, beforeOffset, beforeOffset, afterOffset, afterOffset, positionStyles(position, squareSizeRounded, inset, shift), options.animationModifier && animationStyles$1(position, options.animationModifier));
}

export { arrowStyles as default };
