/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledRadioLabel } from './StyledRadioLabel.js';
import { StyledMessage } from '../common/StyledMessage.js';

const COMPONENT_ID$p = 'forms.radio';
const colorStyles$9 = ({
  theme
}) => {
  const borderColor = getColor({
    theme,
    variable: 'border.emphasis'
  });
  const backgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const iconColor = getColor({
    theme,
    variable: 'foreground.onEmphasis'
  });
  const backgroundOptions = {
    theme,
    variable: 'background.primaryEmphasis'
  };
  const borderOptions = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const hoverBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[100]
  });
  const hoverBorderColor = getColor(borderOptions);
  const focusBorderColor = hoverBorderColor;
  const activeBackgroundColor = getColor({
    ...backgroundOptions,
    transparency: theme.opacity[200]
  });
  const activeBorderColor = focusBorderColor;
  const checkedBackgroundColor = getColor(backgroundOptions);
  const checkedBorderColor = focusBorderColor;
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
  const checkedHoverBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset100
  });
  const checkedHoverBorderColor = getColor({
    ...borderOptions,
    ...offset100
  });
  const checkedActiveBackgroundColor = getColor({
    ...backgroundOptions,
    ...offset200
  });
  const checkedActiveBorderColor = getColor({
    ...borderOptions,
    ...offset200
  });
  const disabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[300]
  });
  return css(["& ~ ", "::before{border-color:", ";background-color:", ";}& ~ ", " > svg{color:", ";}& ~ ", ":hover::before{border-color:", ";background-color:", ";}", " & ~ ", ":active::before{border-color:", ";background-color:", ";}&:checked ~ ", "::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":hover::before{border-color:", ";background-color:", ";}&:enabled:checked ~ ", ":active::before{border-color:", ";background-color:", ";}&:disabled ~ ", "::before{border-color:transparent;background-color:", ";}"], StyledRadioLabel, borderColor, backgroundColor, StyledRadioLabel, iconColor, StyledRadioLabel, hoverBorderColor, hoverBackgroundColor, focusStyles({
    theme,
    styles: {
      borderColor: focusBorderColor
    },
    selector: `&:focus-visible ~ ${StyledRadioLabel}::before`
  }), StyledRadioLabel, activeBorderColor, activeBackgroundColor, StyledRadioLabel, checkedBorderColor, checkedBackgroundColor, StyledRadioLabel, checkedHoverBorderColor, checkedHoverBackgroundColor, StyledRadioLabel, checkedActiveBorderColor, checkedActiveBackgroundColor, StyledRadioLabel, disabledBackgroundColor);
};
const sizeStyles$c = ({
  theme,
  $isCompact
}) => {
  const lineHeight = `${theme.space.base * 5}px`;
  const size = `${theme.space.base * 4}px`;
  const top = math(`(${lineHeight} - ${size}) / 2`);
  const iconSize = theme.iconSizes.sm;
  const iconPosition = math(`(${size} - ${iconSize}) / 2`);
  const iconTop = math(`${iconPosition} + ${top}`);
  const marginTop = `${theme.space.base * ($isCompact ? 1 : 2)}px`;
  return css(["top:", ";width:", ";height:", ";& ~ ", "::before{top:", ";border:", ";background-size:", ";width:", ";height:", ";box-sizing:border-box;}& ~ ", " > svg{top:", ";", ":", ";width:", ";height:", ";}&& ~ ", " ~ ", "{margin-top:", ";}"], top, size, size, StyledRadioLabel, top, theme.borders.sm, theme.iconSizes.sm, size, size, StyledRadioLabel, iconTop, theme.rtl ? 'right' : 'left', iconPosition, iconSize, iconSize, StyledRadioLabel, StyledMessage, marginTop);
};
const StyledRadioInput = styled.input.attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '9.12.3',
  type: 'radio'
}).withConfig({
  displayName: "StyledRadioInput",
  componentId: "sc-qsavpv-0"
})(["position:absolute;opacity:0;margin:0;& ~ ", "::before{position:absolute;", ":0;transition:border-color .25s ease-in-out,box-shadow .1s ease-in-out,background-color .25s ease-in-out,color .25s ease-in-out;border-radius:50%;background-repeat:no-repeat;background-position:center;content:'';}& ~ ", " > svg{position:absolute;}", ";&:focus ~ ", "::before{outline:none;}& ~ ", ":active::before{transition:border-color 0.1s ease-in-out,background-color 0.1s ease-in-out,color 0.1s ease-in-out;}", ";&:disabled ~ ", "{cursor:default;}", ";"], StyledRadioLabel, props => props.theme.rtl ? 'right' : 'left', StyledRadioLabel, sizeStyles$c, StyledRadioLabel, StyledRadioLabel, colorStyles$9, StyledRadioLabel, componentStyles);

export { StyledRadioInput };
