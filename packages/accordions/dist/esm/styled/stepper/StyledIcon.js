/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$f = 'accordions.step_icon';
const StyledIconFlexContainer = styled.div.withConfig({
  displayName: "StyledIcon__StyledIconFlexContainer",
  componentId: "sc-v20nz9-0"
})(["display:flex;flex-basis:100%;justify-content:center;width:100%;"]);
const sizeStyles$1 = props => {
  const size = `${props.theme.space.base * 6}px`;
  const fontSize = props.theme.fontSizes.sm;
  return css(["margin-bottom:", ";margin-", ":", ";width:", ";min-width:", ";height:", ";min-height:", ";line-height:", ";font-size:", ";"], props.$isHorizontal && `${props.theme.space.base * 2}px`, props.theme.rtl ? 'left' : 'right', !props.$isHorizontal && `${props.theme.space.base * 3}px`, size, size, size, size, getLineHeight(size, fontSize), fontSize);
};
const colorStyles$4 = ({
  $isActive,
  theme
}) => {
  const foregroundColor = getColor({
    theme,
    variable: $isActive ? 'foreground.onEmphasis' : 'foreground.default'
  });
  const backgroundColor = $isActive ? getColor({
    theme,
    variable: 'background.emphasis',
    dark: {
      offset: -300
    }
  }) : getColor({
    theme,
    variable: 'background.subtle',
    dark: {
      offset: -200
    },
    light: {
      offset: 100
    }
  });
  return css(["background:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-v20nz9-1"
})(["display:flex;align-items:center;justify-content:center;transition:background 0.25s ease-in-out,color 0.25s ease-in-out;border-radius:100%;", " ", " ", ";"], sizeStyles$1, colorStyles$4, componentStyles);

export { StyledIcon, StyledIconFlexContainer };
