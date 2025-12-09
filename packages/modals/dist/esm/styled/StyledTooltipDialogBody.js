/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$8 = 'modals.tooltip_dialog.body';
const StyledTooltipDialogBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogBody",
  componentId: "sc-132lcoq-0"
})(["display:block;margin:0;padding-top:", "px;line-height:", ";color-scheme:only ", ";color:", ";font-size:", ";", ";"], props => props.theme.space.base * 1.5, props => getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), p => p.theme.colors.base, ({
  theme
}) => getColor({
  variable: 'foreground.default',
  theme
}), props => props.theme.fontSizes.md, componentStyles);

export { StyledTooltipDialogBody };
