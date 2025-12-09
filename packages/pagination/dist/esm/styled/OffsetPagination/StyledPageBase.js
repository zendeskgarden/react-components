/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, getColor, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$6 = 'pagination.page';
const colorStyles$1 = ({
  theme
}) => {
  const disabledColor = getColor({
    variable: 'foreground.disabled',
    theme
  });
  const defaultColor = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const hoverForegroundColor = getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const hoverBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    dark: {
      offset: -100
    },
    theme
  });
  const activeForegroundColor = getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  const activeBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[200],
    dark: {
      offset: -100
    },
    theme
  });
  const currentForegroundColor = activeForegroundColor;
  const currentBackgroundColor = hoverBackgroundColor;
  const currentHoverBackgroundColor = activeBackgroundColor;
  const currentActiveBackgroundColor = getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[300],
    dark: {
      offset: -100
    },
    theme
  });
  return css(["border:none;background:transparent;color:", ";&:hover{background-color:", ";color:", ";}", " &:active,&:focus-visible:active{background-color:", ";color:", ";}&[aria-current='page']{background-color:", ";color:", ";}&[aria-current='page']:hover{background-color:", ";}&[aria-current='page']:active{background-color:", ";}&:disabled,&[aria-disabled='true']{background-color:transparent;color:", ";}"], defaultColor, hoverBackgroundColor, hoverForegroundColor, focusStyles({
    theme,
    inset: true
  }), activeBackgroundColor, activeForegroundColor, currentBackgroundColor, currentForegroundColor, currentHoverBackgroundColor, currentActiveBackgroundColor, disabledColor);
};
const sizeStyles$2 = props => {
  const fontSize = props.theme.fontSizes.md;
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;
  return css(["padding:0 ", ";height:", ";line-height:", ";font-size:", ";"], padding, height, lineHeight, fontSize);
};
const StyledPageBase = styled.button.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPageBase",
  componentId: "sc-ttwj4u-0"
})(["box-sizing:border-box;display:inline-block;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out;visibility:", ";border-radius:", ";cursor:pointer;overflow:hidden;text-align:center;text-overflow:ellipsis;font-family:inherit;user-select:none;", ";&[aria-current='page']{font-weight:", ";}&::-moz-focus-inner{border:0;}&:disabled,[aria-disabled='true']{cursor:default;}", ";", ";"], props => props.hidden && 'hidden', props => props.theme.borderRadii.md, props => sizeStyles$2(props), props => props.theme.fontWeights.semibold, props => colorStyles$1(props), componentStyles);

export { StyledPageBase };
