/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$x = 'forms.media_figure';
const colorStyles$b = ({
  theme,
  $isDisabled,
  $isHovered,
  $isFocused
}) => {
  let color;
  if ($isDisabled) {
    color = getColor({
      theme,
      variable: 'foreground.disabled'
    });
  } else {
    const options = {
      theme,
      variable: 'foreground.subtle'
    };
    if ($isHovered || $isFocused) {
      color = getColor({
        ...options,
        dark: {
          offset: -100
        },
        light: {
          offset: 100
        }
      });
    } else {
      color = getColor(options);
    }
  }
  return css(["color:", ";"], color);
};
const sizeStyles$e = props => {
  const size = props.theme.iconSizes.md;
  const marginFirst = `1px ${props.theme.space.base * 2}px auto 0`;
  const marginLast = `1px 0 auto ${props.theme.space.base * 2}px`;
  let margin;
  if (props.$position === 'start') {
    margin = props.theme.rtl ? marginLast : marginFirst;
  } else {
    margin = props.theme.rtl ? marginFirst : marginLast;
  }
  return css(["margin:", ";width:", ";height:", ";"], margin, size, size);
};
const StyledTextMediaFigure = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$x,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTextMediaFigure",
  componentId: "sc-1qepknj-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", " ", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, sizeStyles$e, colorStyles$b, componentStyles);

export { StyledTextMediaFigure };
