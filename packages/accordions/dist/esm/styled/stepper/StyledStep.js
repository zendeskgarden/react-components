/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import { StyledContent } from './StyledContent.js';
import { StyledLine } from './StyledLine.js';

const COMPONENT_ID$i = 'accordions.step';
const StyledStep = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$i,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStep",
  componentId: "sc-12fiwtz-0"
})(["position:", ";flex:", ";min-width:", ";&:last-of-type ", "{display:", ";}&:first-of-type ", "{display:", ";}&:not(:last-of-type) ", "{border-", ":", ";border-color:", ";}", ";"], props => props.$isHorizontal && 'relative', props => props.$isHorizontal && '1', props => props.$isHorizontal && `${props.theme.space.base * 15}px`, StyledLine, props => props.theme.rtl && 'none', StyledLine, props => !props.theme.rtl && 'none', StyledContent, props => props.theme.rtl ? 'right' : 'left', props => props.theme.borders.sm, ({
  theme
}) => getColor({
  theme,
  variable: 'border.default'
}), componentStyles);

export { StyledStep };
