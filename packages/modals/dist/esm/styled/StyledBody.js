/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$i = 'modals.body';
const StyledBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBody",
  componentId: "sc-14rzecg-0"
})(["display:block;margin:0;padding:", ";height:100%;overflow:auto;line-height:", ";color-scheme:only ", ";color:", ";font-size:", ";", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px`, props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), p => p.theme.colors.base, ({
  theme
}) => getColor({
  theme,
  variable: 'foreground.default'
}), props => props.theme.fontSizes.md, componentStyles);

export { StyledBody };
