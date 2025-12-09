/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { BASE_MULTIPLIERS } from './StyledClose.js';

const COMPONENT_ID = 'modals.header';
const colorStyles = _ref => {
  let {
    $isDanger,
    theme
  } = _ref;
  const bottomBorderColor = getColor({
    theme,
    variable: 'border.subtle'
  });
  const color = getColor({
    theme,
    variable: $isDanger ? 'foreground.danger' : 'foreground.default'
  });
  return css(["border-bottom-color:", ";color:", ";"], bottomBorderColor, color);
};
const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-1787r9v-0"
})(["display:block;position:", ";margin:0;border-bottom:", ";padding:", ";", "  line-height:", ";font-size:", ";font-weight:", ";", ";", ";"], props => props.$isDanger && 'relative', props => props.theme.borders.sm, props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`, props => props.$isCloseButtonPresent && `padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)}px;`, props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, colorStyles, componentStyles);

export { StyledHeader };
