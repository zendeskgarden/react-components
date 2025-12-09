/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from '../checkbox/StyledCheckInput.js';
import { StyledToggleLabel } from './StyledToggleLabel.js';

const COMPONENT_ID = 'forms.toggle';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const backgroundOptions = {
    theme,
    variable: 'background.emphasis'
  };
  const backgroundColor = getColor(backgroundOptions);
  const hoverBackgroundColor = getColor({
    ...backgroundOptions,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return css(["& ~ ", "::before{background-color:", ";}&:enabled ~ ", ":hover::before{background-color:", ";}&:enabled ~ ", ":active::before{background-color:", ";}"], StyledToggleLabel, backgroundColor, StyledToggleLabel, hoverBackgroundColor, StyledToggleLabel, activeBackgroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  const height = `${theme.space.base * 5}px`;
  const width = `${theme.space.base * 10}px`;
  const iconSize = theme.iconSizes.md;
  const iconPosition = math(`(${height} - ${iconSize}) / 2`);
  const checkedIconPosition = math(`${width} - ${iconSize} - ${iconPosition}`);
  return css(["top:0;width:", ";height:", ";& ~ ", "::before{width:", ";height:", ";}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&:checked ~ ", " > svg{", ":", ";}"], width, height, StyledToggleLabel, width, height, StyledToggleLabel, iconPosition, theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledToggleLabel, theme.rtl ? 'right' : 'left', checkedIconPosition);
};
const StyledToggleInput = styled(StyledCheckInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleInput",
  componentId: "sc-sgp47s-0"
})(["& ~ ", "::before{top:0;transition:box-shadow .1s ease-in-out,background-color .15s ease-in-out,color .25s ease-in-out;border:none;border-radius:100px;}", ";", ";", ";"], StyledToggleLabel, sizeStyles, colorStyles, componentStyles);

export { StyledToggleInput };
