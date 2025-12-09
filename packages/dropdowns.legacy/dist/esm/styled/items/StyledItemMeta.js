/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.item_meta';
const StyledItemMeta = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemMeta",
  componentId: "sc-1m3x8m1-0"
})(["display:block;line-height:", "px;color:", ";font-size:", ";", ";"], props => props.theme.space.base * (props.$isCompact ? 3 : 4), props => getColor({
  theme: props.theme,
  variable: props.$isDisabled ? 'foreground.disabled' : 'foreground.subtle'
}), props => props.theme.fontSizes.sm, componentStyles);

export { StyledItemMeta };
