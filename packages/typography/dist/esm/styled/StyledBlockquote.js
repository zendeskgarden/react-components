/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import { THEME_SIZES } from './StyledFont.js';

const COMPONENT_ID = 'typography.blockquote';
const StyledBlockquote = styled.blockquote.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBlockquote",
  componentId: "sc-1tt3ye0-0"
})(["margin:0;border-", ":", " solid;border-color:", ";padding:0;padding-", ":", "px;direction:", ";& + &,p + &{margin-top:", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.shadowWidths.sm, props => getColor({
  theme: props.theme,
  variable: 'border.default'
}), props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 4, props => props.theme.rtl ? 'rtl' : 'ltr', props => props.theme.lineHeights[THEME_SIZES[props.size]], componentStyles);

export { StyledBlockquote };
