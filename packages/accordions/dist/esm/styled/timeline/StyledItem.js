/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';
import { StyledSeparator } from './StyledSeparator.js';
import { StyledTimelineContent } from './StyledContent.js';
import { StyledOppositeContent } from './StyledOppositeContent.js';

const COMPONENT_ID$1 = 'timeline.item';
const StyledTimelineItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItem__StyledTimelineItem",
  componentId: "sc-5mcnzm-0"
})(["display:flex;position:relative;line-height:", ";color:", ";font-size:", ";&:last-of-type ", "::after{display:none;}", " ", " ", ";"], props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), ({
  theme
}) => getColor({
  theme,
  variable: 'foreground.default'
}), props => props.theme.fontSizes.md, StyledSeparator, props => !props.$hasOppositeContent && props.$isAlternate && css(["&::before{flex:1;padding:", "px;content:'';}"], props.theme.space.base * 4), props => props.$isAlternate && css(["&:nth-child(even){flex-direction:row-reverse;", "{text-align:", ";}", "{text-align:", ";}}"], StyledOppositeContent, props.theme.rtl ? 'right' : 'left', StyledTimelineContent, props.theme.rtl ? 'left' : 'right'), componentStyles);

export { StyledTimelineItem };
