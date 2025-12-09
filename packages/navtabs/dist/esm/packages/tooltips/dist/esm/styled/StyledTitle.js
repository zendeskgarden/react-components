/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tooltip.title';
const StyledTitle = styled.strong.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.7.1'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-vnjcvz-0"
})(["display:none;margin:0;font-weight:", ";", ";"], props => props.theme.fontWeights.semibold, componentStyles);

export { StyledTitle };
