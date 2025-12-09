/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { Input } from '@zendeskgarden/react-forms';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.input';
const hiddenStyling = css(["position:fixed;border:0;clip:rect(1px,1px,1px,1px);padding:0;width:1px;height:1px;overflow:hidden;white-space:nowrap;"]);
const StyledInput = styled(Input).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  isBare: true
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-kykaw8-0"
})(["", ";", ";"], props => props.$isHidden && hiddenStyling, componentStyles);

export { StyledInput };
