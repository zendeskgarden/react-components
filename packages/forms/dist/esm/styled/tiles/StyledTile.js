/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.tile';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const offset100 = {
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  };
  const offset200 = {
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  };
  const backgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default',
    ...offset100
  });
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const hoverBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverBorderColor = getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const focusBorderColor = hoverBorderColor;
  const activeBorderColor = hoverBorderColor;
  const checkedBackgroundColor = getColor(backgroundOptions);
  const checkedForegroundColor = getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const checkedHoverBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset100
  });
  const checkedActiveBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset200
  });
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledBorderColor = getColor({
    theme,
    variable: 'border.disabled'
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";}", ";&:active{border-color:", ";background-color:", ";}&:has(:checked){border-color:transparent;background-color:", ";color:", ";}&:hover:has(:checked){background-color:", ";}&:active:has(:checked){background-color:", ";}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], borderColor, backgroundColor, foregroundColor, hoverBorderColor, hoverBackgroundColor, focusStyles({
    theme,
    selector: '&:has(:focus-visible)',
    styles: {
      borderColor: focusBorderColor
    }
  }), activeBorderColor, activeBackgroundColor, checkedBackgroundColor, checkedForegroundColor, checkedHoverBackgroundColor, checkedActiveBackgroundColor, disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;
  return css(["border:", ";padding:", ";min-width:132px;"], border, padding);
};
const StyledTile = styled.label.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTile",
  componentId: "sc-1jjvmxs-0"
})(["display:block;position:relative;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:", ";direction:", ";word-break:break-word;", ";", ";", ";"], props => props.theme.borderRadii.md, props => props.theme.rtl && 'rtl', sizeStyles, colorStyles, componentStyles);

export { StyledTile };
