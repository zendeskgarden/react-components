/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const listStyles = props => {
  const rtl = props.theme.rtl;
  return css(["direction:", ";margin:0;margin-", ":24px;padding:0;list-style-position:outside;list-style-type:", ";"], rtl ? 'rtl' : 'ltr', rtl ? 'right' : 'left', props.$listType);
};
const ORDERED_ID = 'typography.ordered_list';
const StyledOrderedList = styled.ol.attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList__StyledOrderedList",
  componentId: "sc-jdbsfi-0"
})(["", ";", ";"], listStyles, componentStyles);
const UNORDERED_ID = 'typography.unordered_list';
const StyledUnorderedList = styled.ul.attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledList__StyledUnorderedList",
  componentId: "sc-jdbsfi-1"
})(["", ";", ";"], listStyles, componentStyles);

export { StyledOrderedList, StyledUnorderedList };
