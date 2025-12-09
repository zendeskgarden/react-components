/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { IconButton } from '@zendeskgarden/react-buttons';

const COMPONENT_ID$3 = 'chrome.sheet_close';
const positionStyles = ({
  theme
}) => {
  const top = `${theme.space.base * 2.5}px`;
  const position = `${theme.space.base * 2}px`;
  return css(["top:", ";", ":", ";"], top, theme.rtl ? 'left' : 'right', position);
};
const StyledSheetClose = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetClose",
  componentId: "sc-1ab02oq-0"
})(["position:absolute;", ";", ";"], positionStyles, componentStyles);

export { StyledSheetClose };
