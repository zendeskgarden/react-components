/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledTextInput } from '../text/StyledTextInput.js';
import { StyledTextMediaFigure } from '../text/StyledTextMediaFigure.js';

const COMPONENT_ID = 'forms.select';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const color = getColor({
    theme,
    variable: 'foreground.subtle',
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const disabledColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["&:hover + ", ",&:focus + ", ",&:focus-visible + ", "{color:", ";}&:disabled + ", "{color:", ";}"], StyledTextMediaFigure, StyledTextMediaFigure, StyledTextMediaFigure, color, StyledTextMediaFigure, disabledColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isBare,
    $isCompact
  } = _ref2;
  const padding = $isBare ? undefined : math(`${theme.iconSizes.md} + ${theme.space.base * 5}`);
  const iconVerticalPosition = `${theme.space.base * ($isCompact ? 1.5 : 2.5) + 1}px`;
  const iconHorizontalPosition = `${theme.space.base * 3}px`;
  return css(["padding-", ":", ";& + ", "{top:", ";", ":", ";}"], theme.rtl ? 'left' : 'right', padding, StyledTextMediaFigure, iconVerticalPosition, theme.rtl ? 'left' : 'right', iconHorizontalPosition);
};
const StyledSelect = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'select'
}).withConfig({
  displayName: "StyledSelect",
  componentId: "sc-8xdxpt-0"
})(["opacity:1;cursor:pointer;text-overflow:ellipsis;", ";", ";&::-ms-expand{display:none;}&::-ms-value{background-color:transparent;color:inherit;}&:-moz-focusring{transition:none;text-shadow:0 0 0 ", ";color:transparent;}& + ", "{position:absolute;pointer-events:none;}"], sizeStyles, colorStyles, props => getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), StyledTextMediaFigure);

export { StyledSelect };
