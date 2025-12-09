/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledInput } from '../select/StyledInput.js';

const COMPONENT_ID = 'dropdowns.multiselect_input';
const visibleStyling = _ref => {
  let {
    $isVisible,
    isCompact,
    theme
  } = _ref;
  const margin = $isVisible ? `${theme.space.base / 2}px` : 0;
  const minWidth = $isVisible ? `${theme.space.base * 15}px` : 0;
  let height = '0';
  if ($isVisible) {
    height = `${theme.space.base * (isCompact ? 5 : 8)}px`;
  }
  return css(["opacity:", ";margin:", ";width:", ";min-width:", ";height:", ";"], !$isVisible && 0, margin, !$isVisible && 0, minWidth, height);
};
const StyledMultiselectInput = styled(StyledInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  isBare: true
}).withConfig({
  displayName: "StyledMultiselectInput",
  componentId: "sc-iiow29-0"
})(["flex-basis:", "px;flex-grow:1;align-self:center;min-height:0;", ";", ";"], props => props.theme.space.base * 15, props => visibleStyling(props), componentStyles);

export { StyledMultiselectInput };
