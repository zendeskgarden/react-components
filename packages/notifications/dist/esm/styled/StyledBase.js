/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { validationTypes } from '../utils/icons.js';

const COMPONENT_ID$a = 'notifications.base_container';
const colorStyles$9 = ({
  theme,
  $type,
  $isFloating
}) => {
  const {
    space,
    shadows
  } = theme;
  let bgVariable;
  let borderVariable;
  let fgVariable;
  if (!$isFloating && $type && !!validationTypes[$type]) {
    switch ($type) {
      case validationTypes.success:
        bgVariable = 'background.success';
        borderVariable = 'border.success';
        fgVariable = 'foreground.success';
        break;
      case validationTypes.error:
        bgVariable = 'background.danger';
        borderVariable = 'border.danger';
        fgVariable = 'foreground.danger';
        break;
      case validationTypes.warning:
        bgVariable = 'background.warning';
        borderVariable = 'border.warning';
        fgVariable = 'foreground.warning';
        break;
      case validationTypes.info:
        bgVariable = 'background.subtle';
        borderVariable = 'border.default';
        fgVariable = 'foreground.subtle';
        break;
    }
  } else {
    bgVariable = 'background.raised';
    borderVariable = 'border.default';
    fgVariable = 'foreground.default';
  }
  const backgroundColor = getColor({
    variable: bgVariable,
    theme
  });
  const borderColor = getColor({
    variable: borderVariable,
    theme
  });
  const foregroundColor = getColor({
    variable: fgVariable,
    theme
  });
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const boxShadow = $isFloating ? shadows.lg(offsetY, blurRadius, getColor({
    variable: 'shadow.large',
    theme
  })) : undefined;
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";"], borderColor, boxShadow, backgroundColor, foregroundColor);
};
const padding = props => {
  const {
    space
  } = props.theme;
  const paddingVertical = `${space.base * 5}px`;
  const paddingHorizontal = `${space.base * 10}px`;
  return `${paddingVertical} ${paddingHorizontal}`;
};
const StyledBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBase",
  componentId: "sc-14syaqw-0"
})(["position:relative;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";direction:", ";", ";", ""], props => props.theme.borders.sm, props => props.theme.borderRadii.md, padding, props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', colorStyles$9, componentStyles);

export { StyledBase };
