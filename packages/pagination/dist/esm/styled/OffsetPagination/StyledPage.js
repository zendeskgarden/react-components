/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPageBase } from './StyledPageBase.js';

const COMPONENT_ID = 'pagination.page';
const sizeStyles = props => {
  const height = props.theme.space.base * 8;
  return css(["min-width:", "px;max-width:", "px;&[aria-current='true']{max-width:none;}"], height, height * 2);
};
const StyledPage = styled(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPage",
  componentId: "sc-sxjfwy-0"
})(["", ";&[aria-current=\"true\"]{font-weight:", ";}", ";"], props => sizeStyles(props), props => props.theme.fontWeights.semibold, componentStyles);

export { StyledPage };
