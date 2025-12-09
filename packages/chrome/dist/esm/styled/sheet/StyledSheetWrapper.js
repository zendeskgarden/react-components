/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_wrapper';
const transformStyles = _ref => {
  let {
    theme,
    $isAnimated,
    $isOpen,
    $placement
  } = _ref;
  const transition = $isAnimated ? 'transform 250ms ease-in-out' : undefined;
  let transform;
  if ($isOpen) {
    transform = 'translateX(0)';
  } else if ($placement === 'start') {
    transform = `translateX(${theme.rtl ? 100 : -100}%)`;
  } else {
    transform = `translateX(${theme.rtl ? -100 : 100}%)`;
  }
  return css(["transform:", ";transition:", ";"], transform, transition);
};
const StyledSheetWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetWrapper",
  componentId: "sc-f6x9zb-0"
})(["display:flex;position:relative;flex-direction:column;min-width:", ";", ";", ";"], props => props.$size, transformStyles, componentStyles);

export { StyledSheetWrapper };
