/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledGrip } from './StyledGrip.js';

const COMPONENT_ID$7 = 'draggable';
function getDragShadow(theme) {
  const {
    space,
    shadows
  } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor({
    variable: 'shadow.large',
    theme
  });
  return shadows.lg(offsetY, blurRadius, color);
}
const colorStyles$2 = props => {
  const {
    $isBare,
    $isGrabbed,
    $isDisabled,
    $isPlaceholder,
    $focusInset,
    theme
  } = props;
  const dragShadow = getDragShadow(theme);
  const baseBgColor = getColor({
    variable: 'background.default',
    theme
  });
  const placeholderBgColor = getColor({
    variable: 'background.disabled',
    theme
  });
  const disabledBgColor = getColor({
    variable: 'background.disabled',
    theme
  });
  const disabledColor = getColor({
    variable: 'foreground.disabled',
    theme
  });
  let color;
  let hoverBackgroundColor;
  let boxShadow;
  let borderColor = 'transparent';
  let backgroundColor = baseBgColor;
  if ($isDisabled) {
    backgroundColor = disabledBgColor;
    color = disabledColor;
  } else if ($isPlaceholder) {
    backgroundColor = placeholderBgColor;
  } else {
    color = getColor({
      variable: 'foreground.default',
      theme
    });
    borderColor = $isBare ? 'transparent' : getColor({
      variable: 'border.default',
      theme
    });
    hoverBackgroundColor = getColor({
      variable: $isGrabbed ? 'background.raised' : 'background.primaryEmphasis',
      ...(!$isGrabbed && {
        transparency: theme.opacity[100],
        dark: {
          offset: -100
        }
      }),
      theme
    });
    boxShadow = dragShadow;
  }
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover{background-color:", ";}", " > ", "{color:", ";}"], borderColor, $isGrabbed && boxShadow, backgroundColor, color, hoverBackgroundColor, focusStyles({
    theme,
    inset: $focusInset,
    boxShadow: $isGrabbed ? dragShadow : undefined
  }), StyledGrip, $isDisabled && disabledColor);
};
const sizeStyles$5 = props => {
  const {
    $isCompact,
    theme
  } = props;
  const paddingDefault = theme.space.base * 2.25;
  const paddingCompact = theme.space.base * 1.25;
  return css(["margin:0;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";font-weight:", ";"], theme.borders.sm, theme.borderRadii.md, $isCompact ? `${paddingCompact}px ${paddingDefault}px` : `${paddingDefault}px`, getLineHeight(theme.space.base * 5, theme.fontSizes.md), theme.fontSizes.md, theme.fontWeights.regular);
};
const getCursor = props => {
  let cursor = props.$isGrabbed ? 'grabbing' : 'grab';
  if (props.$isDisabled || props.$isPlaceholder) {
    cursor = 'default';
  }
  return cursor;
};
const StyledDraggable = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDraggable",
  componentId: "sc-3lxpf1-0"
})(["display:flex;flex:1;align-items:center;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;cursor:", ";font-family:", ";direction:", ";box-sizing:border-box;", " ", " > *{visibility:", ";}", ";"], getCursor, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', sizeStyles$5, colorStyles$2, p => p.$isPlaceholder && !p.$isDisabled && 'hidden', componentStyles);

export { StyledDraggable, getDragShadow };
