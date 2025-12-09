/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabpanel';
const sizeStyles = _ref => {
  let {
    theme,
    $isVertical
  } = _ref;
  const margin = $isVertical ? `${theme.space.base * 8}px` : undefined;
  return css(["margin-", ":", ";"], theme.rtl ? 'right' : 'left', margin);
};
const StyledTabPanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabPanel",
  componentId: "sc-7lhrmp-0"
})(["display:block;vertical-align:", ";color-scheme:only ", ";", ";&[aria-hidden='true']{display:none;}", ";"], props => props.$isVertical && 'top', p => p.theme.colors.base, sizeStyles, componentStyles);

export { StyledTabPanel };
