/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'typography.icon';
const sizeStyles$1 = props => {
  const margin = props.$isStart && `${props.theme.space.base * 2}px`;
  const size = props.theme.iconSizes.md;
  return css(["margin-", ":", ";width:", ";height:", ";"], props.theme.rtl ? 'left' : 'right', margin, size, size);
};
const StyledIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-10rfb5b-0"
})(["position:relative;top:-1px;vertical-align:middle;", ";", ";"], props => sizeStyles$1(props), componentStyles);

export { StyledIcon };
