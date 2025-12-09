/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPageBase } from './StyledPageBase.js';

const COMPONENT_ID$5 = 'pagination.page';
const sizeStyles$1 = props => {
  const height = props.theme.space.base * 8;
  return css(["min-width:", "px;max-width:", "px;&[aria-current='true']{max-width:none;}"], height, height * 2);
};
const StyledPage = styled(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPage",
  componentId: "sc-sxjfwy-0"
})(["", ";&[aria-current=\"true\"]{font-weight:", ";}", ";"], props => sizeStyles$1(props), props => props.theme.fontWeights.semibold, componentStyles);

export { StyledPage };
