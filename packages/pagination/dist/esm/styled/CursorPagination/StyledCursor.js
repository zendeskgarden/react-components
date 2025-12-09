/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPageBase } from '../OffsetPagination/StyledPageBase.js';

const COMPONENT_ID = 'cursor_pagination.cursor';
const StyledCursor = styled(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'button'
}).withConfig({
  displayName: "StyledCursor",
  componentId: "sc-507ee-0"
})(["display:flex;align-items:center;border:none;background:transparent;padding:", ";overflow:visible;&:not(", "-of-type){margin-right:", "px;}", ";"], props => `0px ${props.theme.space.base * 2}px`, props => props.theme.rtl ? ':first' : ':last', props => props.theme.space.base, componentStyles);

export { StyledCursor };
