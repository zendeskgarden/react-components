/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$7 = 'pagination.list_item';
const StyledListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListItem",
  componentId: "sc-16j4sju-0"
})(["box-sizing:border-box;margin-left:", ";user-select:none;&", "{margin-left:0;}", ";"], props => `${props.theme.space.base}px`, props => props.theme.rtl ? ':last-of-type' : ':first-of-type', componentStyles);

export { StyledListItem };
