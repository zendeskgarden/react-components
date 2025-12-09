/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItem } from '../StyledItem.js';

const COMPONENT_ID$a = 'dropdowns.header_item';
const getHorizontalPadding = props => {
  if (props.$hasIcon) {
    return undefined;
  }
  return `${props.theme.space.base * 3}px`;
};
const StyledHeaderItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItem",
  componentId: "sc-1xosinr-0"
})(["cursor:default;padding-right:", ";padding-left:", ";font-weight:", ";", ";"], props => getHorizontalPadding(props), props => getHorizontalPadding(props), props => props.theme.fontWeights.semibold, componentStyles);

export { StyledHeaderItem };
