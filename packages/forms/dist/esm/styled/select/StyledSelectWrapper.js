/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { SELECTOR_FOCUS_VISIBLE } from '@zendeskgarden/react-theming';
import { StyledTextFauxInput } from '../text/StyledTextFauxInput.js';
import { StyledSelect } from './StyledSelect.js';

const COMPONENT_ID = 'forms.select_wrapper';
const sizeStyles = _ref => {
  let {
    theme,
    $isCompact
  } = _ref;
  const height = `${theme.space.base * ($isCompact ? 8 : 10)}px`;
  return css(["max-height:", ";"], height);
};
const StyledSelectWrapper = styled(StyledTextFauxInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSelectWrapper",
  componentId: "sc-i7b6hw-0"
})(["position:relative;padding:0;overflow:visible;", ";& > ", "{border-color:transparent;background-color:transparent;", "{box-shadow:unset;}}"], sizeStyles, StyledSelect, SELECTOR_FOCUS_VISIBLE);

export { StyledSelectWrapper };
