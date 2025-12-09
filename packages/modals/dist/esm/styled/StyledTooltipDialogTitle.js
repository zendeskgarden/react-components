/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, getLineHeight, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$9 = 'modals.tooltip_dialog.title';
const sizeStyles = props => `
  /* stylelint-disable-next-line property-no-unknown */
  line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};
  font-size: ${props.theme.fontSizes.md};
`;
const StyledTooltipDialogTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogTitle",
  componentId: "sc-1rceixg-0"
})(["margin:0;color:", ";font-weight:", ";", ";", ";"], ({
  theme
}) => getColor({
  variable: 'foreground.default',
  theme
}), props => props.theme.fontWeights.semibold, props => sizeStyles(props), componentStyles);

export { StyledTooltipDialogTitle };
