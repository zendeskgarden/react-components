/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { Button } from '@zendeskgarden/react-buttons';

const StyledButton = styled(Button).attrs({
  isNeutral: true,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledButton",
  componentId: "sc-1dlijfv-0"
})(["padding:0;width:", "px;max-width:", "px;&:last-of-type:not(:first-child){border-top-", "-radius:", " !important;border-bottom-", "-radius:", " !important;}"], props => props.theme.space.base * 17, props => props.theme.space.base * 17, props => props.theme.rtl ? 'left' : 'right', props => props.theme.borderRadii.md, props => props.theme.rtl ? 'left' : 'right', props => props.theme.borderRadii.md);

export { StyledButton };
