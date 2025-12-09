/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledFont, THEME_SIZES } from './StyledFont.js';

const COMPONENT_ID = 'typography.codeblock_code';
const colorStyles = _ref => {
  let {
    theme,
    $diff,
    $isHighlighted
  } = _ref;
  let backgroundColor;
  if ($diff) {
    const hues = {
      hunk: 'royal',
      add: 'lime',
      delete: 'crimson',
      change: 'lemon'
    };
    backgroundColor = getColor({
      theme,
      hue: hues[$diff],
      dark: {
        shade: 600
      },
      light: {
        shade: 400
      },
      transparency: theme.opacity[300]
    });
  } else if ($isHighlighted) {
    backgroundColor = getColor({
      theme,
      dark: {
        hue: 'white'
      },
      light: {
        hue: 'neutralHue',
        shade: 700
      },
      transparency: theme.opacity[100]
    });
  }
  return css(["background-color:", ";"], backgroundColor);
};
const lineNumberStyles = _ref2 => {
  let {
    theme,
    $language,
    $size
  } = _ref2;
  const color = getColor({
    theme,
    variable: 'foreground.subtle',
    light: {
      offset: -100
    }
  });
  let padding;
  if ($language && $language === 'diff') {
    padding = 0;
  } else if ($size === 'small') {
    padding = theme.space.base * 4;
  } else if ($size === 'large') {
    padding = theme.space.base * 7;
  } else {
    padding = theme.space.base * 6;
  }
  return `
    &::before {
      display: table-cell;
      padding-right: ${padding}px;
      width: 1px;
      text-align: right;
      color: ${color};
      content: counter(linenumber);
      counter-increment: linenumber;
    }
  `;
};
const StyledCodeBlockLine = styled(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'code',
  $isMonospace: true
}).withConfig({
  displayName: "StyledCodeBlockLine",
  componentId: "sc-1goay17-0"
})(["display:table-row;height:", ";direction:ltr;", ";", ";&::after{display:inline-block;width:", "px;content:'';}", ";"], props => props.theme.lineHeights[THEME_SIZES[props.$size]], colorStyles, props => props.$isNumbered && lineNumberStyles(props), props => props.theme.space.base * 3, componentStyles);

export { StyledCodeBlockLine };
