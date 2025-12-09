/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { getRowHeight } from './style-utils.js';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID$9 = 'tables.overflow_button';
const OVERFLOW_BUTTON_SIZE = '2em';
const StyledOverflowButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOverflowButton",
  componentId: "sc-1eba2ml-0"
})(["margin-top:calc(", " - 1em);width:100%;min-width:unset;height:", ";font-size:inherit;", ";"], props => math(`${getRowHeight(props)} / 2`), OVERFLOW_BUTTON_SIZE, componentStyles);

export { StyledOverflowButton };
