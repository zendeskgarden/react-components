/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { FauxInput } from '@zendeskgarden/react-forms';

const COMPONENT_ID$6 = 'dropdowns.faux_input';
const StyledFauxInput = styled(FauxInput).attrs(props => ({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3',
  mediaLayout: true,
  theme: props.theme
})).withConfig({
  displayName: "StyledFauxInput",
  componentId: "sc-bk8odf-0"
})(["cursor:", ";min-width:", "px;", ";"], props => !props.disabled && 'pointer', props => props.theme.space.base * (props.isCompact ? 25 : 36), componentStyles);

export { StyledFauxInput };
