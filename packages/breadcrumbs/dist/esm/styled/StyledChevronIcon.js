/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { em } from 'polished';
import { StyledBaseIcon, getColor } from '@zendeskgarden/react-theming';

const StyledChevronIcon = styled(StyledBaseIcon).withConfig({
  displayName: "StyledChevronIcon",
  componentId: "sc-9r9qrm-0"
})(["transform:", ";margin:0 ", ";color:", ";"], p => p.theme.rtl && `rotate(180deg);`, p => em(p.theme.space.base, p.theme.fontSizes.md), p => getColor({
  variable: 'foreground.subtle',
  theme: p.theme
}));

export { StyledChevronIcon };
