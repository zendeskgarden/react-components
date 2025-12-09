/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$a = 'tables.caption';
const StyledCaption = styled.caption.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCaption",
  componentId: "sc-113y327-0"
})(["display:table-caption;text-align:", ";", ";"], props => props.theme.rtl ? 'right' : 'left', componentStyles);

export { StyledCaption };
