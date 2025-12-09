/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.multiselect_more_anchor';
const StyledMultiselectMoreAnchor = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectMoreAnchor",
  componentId: "sc-pkakky-0"
})(["display:inline-block;cursor:", ";padding:", "px 0;overflow:hidden;user-select:none;text-overflow:ellipsis;line-height:", ";white-space:nowrap;color:", ";&:hover{text-decoration:", ";}", ";"], props => props.$isDisabled ? 'default' : 'pointer', props => props.theme.space.base * (props.$isCompact ? 0.75 : 1.5), props => props.$isCompact ? '1em' : getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => getColor({
  theme: props.theme,
  variable: props.$isDisabled ? 'foreground.disabled' : 'foreground.primary'
}), props => !props.$isDisabled && 'underline', componentStyles);

export { StyledMultiselectMoreAnchor };
