/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const sizeStyles = () => {
  return css(["border-radius:50%;width:100%;height:100%;"]);
};
const colorStyles = ({
  $isToday,
  $isPreviousMonth,
  theme,
  ...props
}) => {
  const isSelected = props['aria-selected'];
  const isDisabled = props['aria-disabled'];
  let backgroundColor = 'inherit';
  let foreground;
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundHover = !$isToday && getColor({
    variable: 'foreground.primary',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const backgroundActive = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });
  const foregroundActive = !$isToday && getColor({
    variable: 'foreground.primary',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  if (isSelected && !isDisabled) {
    backgroundColor = getColor({
      variable: 'background.primaryEmphasis',
      theme
    });
    foreground = getColor({
      variable: 'foreground.onEmphasis',
      theme
    });
  } else if (isDisabled) {
    foreground = getColor({
      variable: 'foreground.disabled',
      theme
    });
  } else if ($isToday) {
    foreground = 'inherit';
  } else if ($isPreviousMonth) {
    foreground = getColor({
      variable: 'foreground.subtle',
      theme
    });
  } else {
    foreground = getColor({
      variable: 'foreground.primary',
      theme
    });
  }
  return css(["background-color:", ";color:", ";&:not([aria-disabled]):not([aria-selected]):hover{background-color:", ";color:", ";}&:not([aria-disabled]):not([aria-selected]):active{background-color:", ";color:", ";}"], backgroundColor, foreground, backgroundHover, foregroundHover, backgroundActive, foregroundActive);
};
const COMPONENT_ID = 'datepickers.day';
const StyledDay = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDay",
  componentId: "sc-v42uk5-0"
})(["display:flex;position:absolute;align-items:center;justify-content:center;cursor:", ";font-size:", ";font-weight:", ";", " ", " ", ";"], props => props['aria-disabled'] ? 'inherit' : 'pointer', props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.$isToday && !props['aria-disabled'] ? props.theme.fontWeights.semibold : 'inherit', sizeStyles, colorStyles, componentStyles);

export { StyledDay };
