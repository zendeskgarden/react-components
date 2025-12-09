/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, focusStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel.js';
import { StyledHint } from '../common/StyledHint.js';
import { StyledMessage } from '../common/StyledMessage.js';

const COMPONENT_ID = 'forms.file_upload';
const colorStyles = _ref => {
  let {
    theme,
    $isDragging
  } = _ref;
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const foregroundOptions = {
    theme,
    variable: 'foreground.primary'
  };
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
  const borderColor = getColor({
    theme,
    variable: 'border.emphasis'
  });
  const foregroundColor = getColor(foregroundOptions);
  const hoverBorderColor = getColor({
    ...borderOptions,
    ...offset100
  });
  const hoverBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverForegroundColor = getColor({
    ...foregroundOptions,
    ...offset100
  });
  const activeBorderColor = getColor({
    ...borderOptions,
    ...offset200
  });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeForegroundColor = getColor({
    ...foregroundOptions,
    ...offset200
  });
  const disabledBorderColor = getColor({
    theme,
    variable: 'border.disabled'
  });
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled'
  });
  const disabledForegroundColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["border-color:", ";background-color:", ";color:", ";&:hover{border-color:", ";background-color:", ";color:", ";}", " &:active{border-color:", ";background-color:", ";color:", ";}&[aria-disabled='true']{border-color:", ";background-color:", ";color:", ";}"], $isDragging ? activeBorderColor : borderColor, $isDragging ? activeBackgroundColor : undefined, $isDragging ? activeForegroundColor : foregroundColor, hoverBorderColor, hoverBackgroundColor, hoverForegroundColor, focusStyles({
    theme
  }), activeBorderColor, activeBackgroundColor, activeForegroundColor, disabledBorderColor, disabledBackgroundColor, disabledForegroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isCompact
  } = _ref2;
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;
  const paddingHorizontal = `${$isCompact ? 2 : 4}em`;
  const paddingVertical = math(`${theme.space.base * ($isCompact ? 2.5 : 5)} - ${theme.borderWidths.sm}`);
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  return css(["padding:", " ", ";min-width:4em;line-height:", ";font-size:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], paddingVertical, paddingHorizontal, lineHeight, fontSize, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, marginTop);
};
const StyledFileUpload = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileUpload",
  componentId: "sc-1rodjgn-0"
})(["display:flex;align-items:center;justify-content:center;box-sizing:border-box;direction:", ";transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;border:dashed ", ";border-radius:", ";cursor:pointer;text-align:center;user-select:none;", ";&[aria-disabled='true']{cursor:default;}", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.borderWidths.sm, props => props.theme.borderRadii.md, sizeStyles, colorStyles, componentStyles);

export { StyledFileUpload };
