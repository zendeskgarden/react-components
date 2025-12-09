/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.separator';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'border.subtle'
  });
  return css(["background-color:", ";"], backgroundColor);
};
const sizeStyles = props => {
  const margin = `${props.theme.space.base}px`;
  const height = props.theme.borderWidths.sm;
  return css(["margin:", " 0;height:", ";"], margin, height);
};
const StyledListboxSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledListboxSeparator",
  componentId: "sc-1p6toh2-0"
})(["cursor:default;", ";", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledListboxSeparator };
