/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_line';
const StyledLine = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLine",
  componentId: "sc-1gkpjbr-0"
})(["display:block;position:absolute;top:", "px;right:", ";left:", ";flex:1;border-top:", ";border-color:", ";"], props => props.theme.space.base * 3, props => `calc(50% + ${props.theme.space.base * 6}px)`, props => `calc(-50% + ${props.theme.space.base * 6}px)`, props => props.theme.borders.sm, _ref => {
  let {
    theme
  } = _ref;
  return getColor({
    theme,
    variable: 'border.default'
  });
});

export { StyledLine };
