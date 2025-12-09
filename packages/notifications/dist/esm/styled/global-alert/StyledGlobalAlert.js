/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.global_alert';
const colorStyles = _ref => {
  let {
    theme,
    $alertType
  } = _ref;
  let borderColor;
  let backgroundColor;
  let foregroundColor;
  let anchorHoverColor;
  let anchorActiveColor;
  let focusVariable;
  switch ($alertType) {
    case 'success':
      {
        borderColor = getColor({
          variable: 'border.successEmphasis',
          offset: 100,
          theme
        });
        backgroundColor = getColor({
          variable: 'background.successEmphasis',
          theme
        });
        foregroundColor = getColor({
          variable: 'foreground.success',
          offset: -600,
          theme
        });
        anchorHoverColor = theme.palette.white;
        anchorActiveColor = theme.palette.white;
        focusVariable = 'foreground.successEmphasis';
        break;
      }
    case 'error':
      {
        borderColor = getColor({
          variable: 'border.dangerEmphasis',
          offset: 100,
          theme
        });
        backgroundColor = getColor({
          variable: 'background.dangerEmphasis',
          theme
        });
        foregroundColor = getColor({
          variable: 'foreground.danger',
          offset: -600,
          theme
        });
        anchorActiveColor = theme.palette.white;
        anchorHoverColor = theme.palette.white;
        focusVariable = 'foreground.dangerEmphasis';
        break;
      }
    case 'warning':
      {
        borderColor = getColor({
          variable: 'border.warningEmphasis',
          offset: -300,
          theme
        });
        backgroundColor = getColor({
          variable: 'background.warningEmphasis',
          offset: -400,
          theme
        });
        const fgVariable = 'foreground.warning';
        foregroundColor = getColor({
          variable: fgVariable,
          offset: 100,
          theme
        });
        anchorHoverColor = getColor({
          variable: fgVariable,
          offset: 200,
          theme
        });
        anchorActiveColor = getColor({
          variable: fgVariable,
          offset: 300,
          theme
        });
        focusVariable = fgVariable;
        break;
      }
    case 'info':
      {
        borderColor = getColor({
          variable: 'border.primaryEmphasis',
          offset: -300,
          theme
        });
        backgroundColor = getColor({
          variable: 'background.primaryEmphasis',
          offset: -400,
          theme
        });
        const fgVariable = 'foreground.primary';
        foregroundColor = getColor({
          variable: fgVariable,
          offset: 100,
          theme
        });
        anchorHoverColor = getColor({
          variable: fgVariable,
          offset: 200,
          theme
        });
        anchorActiveColor = getColor({
          variable: fgVariable,
          offset: 300,
          theme
        });
        focusVariable = fgVariable;
        break;
      }
  }
  const boxShadow = `inset 0 -${theme.borderWidths.sm} 0 ${borderColor}`;
  return css(["box-shadow:", ";background-color:", ";color:", ";& a{color:inherit;", " &:hover{color:", ";}&:active{color:", ";}}"], boxShadow, backgroundColor, foregroundColor, focusStyles({
    theme,
    color: {
      variable: focusVariable
    },
    styles: {
      color: 'inherit'
    }
  }), anchorHoverColor, anchorActiveColor);
};
const sizeStyles = props => {
  const {
    fontSizes,
    space
  } = props.theme;
  const minHeight = space.base * 13;
  const padding = space.base * 4;
  const lineHeight = getLineHeight(space.base * 5, fontSizes.md);
  return css(["padding:", "px;min-height:", "px;line-height:", ";font-size:", ";"], padding, minHeight, lineHeight, fontSizes.md);
};
const StyledGlobalAlert = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGlobalAlert",
  componentId: "sc-k6rimt-0"
})(["display:flex;flex-wrap:nowrap;overflow:auto;overflow-x:hidden;box-sizing:border-box;direction:", ";", " ", " && a{border-radius:", ";text-decoration:underline;}", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', sizeStyles, colorStyles, props => props.theme.borderRadii.sm, componentStyles);

export { StyledGlobalAlert };
