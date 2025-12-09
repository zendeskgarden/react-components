/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { getStatusSize } from './utility.js';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase.js';

const COMPONENT_ID = 'avatars.status-indicator.indicator';
const StyledStandaloneStatusIndicator = styled(StyledStatusIndicatorBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $type: props.$type ?? 'offline'
})).withConfig({
  displayName: "StyledStandaloneStatusIndicator",
  componentId: "sc-1xt1heq-0"
})(["position:relative;box-sizing:content-box;margin-top:", ";", ";"], props => `calc((${props.theme.lineHeights.md} - ${getStatusSize(props, '0')}) / 2)`, componentStyles);

export { StyledStandaloneStatusIndicator };
