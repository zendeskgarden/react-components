/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, arrowStyles, getArrowPosition, getColor } from '@zendeskgarden/react-theming';
import { StyledParagraph } from './StyledParagraph.js';
import { StyledTitle } from './StyledTitle.js';

const COMPONENT_ID = 'tooltip.tooltip';
const sizeStyles = ({
  theme,
  $hasArrow,
  $placement,
  $size
}) => {
  let margin = `${theme.space.base * 1.5}px`;
  let borderRadius = theme.borderRadii.sm;
  let padding = '0 1em';
  let maxWidth;
  let overflowWrap;
  let whiteSpace = 'nowrap';
  let lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.sm);
  let fontSize = theme.fontSizes.sm;
  let titleDisplay;
  let paragraphMarginTop;
  let wordWrap;
  if ($size !== 'small') {
    borderRadius = theme.borderRadii.md;
    overflowWrap = 'break-word';
    whiteSpace = 'normal';
    wordWrap = 'break-word';
  }
  if ($size === 'extra-large') {
    padding = `${theme.space.base * 10}px`;
    maxWidth = `460px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2.5}px`;
  } else if ($size === 'large') {
    padding = `${theme.space.base * 5}px`;
    maxWidth = `270px`;
    lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
    paragraphMarginTop = `${theme.space.base * 2}px`;
  } else if ($size === 'medium') {
    padding = '1em';
    maxWidth = `140px`;
    lineHeight = getLineHeight(theme.space.base * 4, theme.fontSizes.sm);
  }
  if ($size === 'extra-large' || $size === 'large') {
    fontSize = theme.fontSizes.md;
    titleDisplay = 'block';
  }
  let arrowSize;
  let arrowShift;
  if ($hasArrow) {
    if ($size === 'small') {
      arrowSize = margin;
      if (['left-start', 'left-end', 'right-start', 'right-end'].includes($placement)) {
        arrowShift = `-${theme.borderRadii.md}px`;
      } else {
        arrowShift = '0';
      }
    } else if ($size === 'medium') {
      arrowSize = margin;
    } else if ($size === 'large') {
      margin = `${theme.space.base * 2}px`;
      arrowSize = margin;
    } else if ($size === 'extra-large') {
      margin = `${theme.space.base * 3}px`;
      arrowSize = `${theme.space.base * 2.5}px`;
    }
  }
  return css(["margin:", ";border-radius:", ";padding:", ";max-width:", ";line-height:", ";word-wrap:", ";white-space:", ";font-size:", ";overflow-wrap:", ";", ";", "{margin-top:", ";}", "{display:", ";}"], margin, borderRadius, padding, maxWidth, lineHeight, wordWrap, whiteSpace, fontSize, overflowWrap, $hasArrow && arrowStyles(getArrowPosition(theme, $placement), {
    size: arrowSize,
    shift: arrowShift
  }), StyledParagraph, paragraphMarginTop, StyledTitle, titleDisplay);
};
const colorStyles = ({
  theme,
  $type
}) => {
  let borderColor;
  let boxShadow;
  let backgroundColor;
  let color;
  let titleColor;
  if ($type === 'light') {
    backgroundColor = getColor({
      theme,
      variable: 'background.raised'
    });
    borderColor = getColor({
      theme,
      variable: 'border.default'
    });
    boxShadow = theme.shadows.lg(`${theme.space.base * (theme.colors.base === 'dark' ? 4 : 5)}px`, `${theme.space.base * (theme.colors.base === 'dark' ? 6 : 7)}px`, getColor({
      variable: 'shadow.medium',
      theme
    }));
    color = getColor({
      theme,
      variable: 'foreground.subtle'
    });
    titleColor = getColor({
      theme,
      variable: 'foreground.default'
    });
  } else {
    backgroundColor = getColor({
      theme,
      hue: 'neutralHue',
      light: {
        shade: 900
      },
      dark: {
        shade: 700
      }
    });
    borderColor = backgroundColor;
    boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, getColor({
      variable: 'shadow.small',
      theme
    }));
    color = getColor({
      theme,
      hue: 'white'
    });
  }
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";", "{color:", ";}"], borderColor, boxShadow, backgroundColor, color, StyledTitle, titleColor);
};
const StyledTooltip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltip",
  componentId: "sc-gzzjq4-0"
})(["display:inline-block;border:", ";box-sizing:border-box;direction:", ";text-align:", ";font-weight:", ";", ";&[aria-hidden='true']{display:none;}", ";", ";"], props => props.theme.borders.sm, props => props.theme.rtl && 'rtl', props => props.theme.rtl ? 'right' : 'left', props => props.theme.fontWeights.regular, sizeStyles, colorStyles, componentStyles);

export { StyledTooltip };
