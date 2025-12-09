/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton.js';

const COMPONENT_ID$2 = 'buttons.anchor';
const StyledAnchor = styled(StyledButton).attrs(props => ({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3',
  as: 'a',
  dir: props.theme.rtl ? 'rtl' : undefined,
  $isLink: true,
  type: undefined
})).withConfig({
  displayName: "StyledAnchor",
  componentId: "sc-xshgmo-0"
})(["direction:", ";", ";"], props => props.theme.rtl && 'rtl', componentStyles);

export { StyledAnchor };
