/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.icon';
const colorStyles = _ref => {
  let {
    $surfaceColor,
    theme
  } = _ref;
  const foregroundColor = getColor({
    theme,
    variable: 'border.emphasis'
  });
  let backgroundColor;
  if ($surfaceColor) {
    backgroundColor = $surfaceColor.includes('.') ? getColor({
      theme,
      variable: $surfaceColor
    }) : $surfaceColor;
  } else {
    backgroundColor = getColor({
      theme,
      variable: 'background.default'
    });
  }
  return css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledItemIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemIcon",
  componentId: "sc-vz2l6e-0"
})(["z-index:1;box-sizing:content-box;padding:", "px 0;width:", ";height:", ";", " ", ";"], props => props.theme.space.base, props => math(`${props.theme.iconSizes.sm} + 1`), props => math(`${props.theme.iconSizes.sm} + 1`), colorStyles, componentStyles);

export { StyledItemIcon };
