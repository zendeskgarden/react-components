/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { Label } from '@zendeskgarden/react-forms';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_label';
const StyledLabel = styled(Label).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1vxt3m9-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], componentStyles);

export { StyledLabel };
