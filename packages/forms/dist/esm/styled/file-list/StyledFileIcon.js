/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file.icon';
const colorStyles = _ref => {
  let {
    theme,
    $validation
  } = _ref;
  const color = $validation ? undefined : getColor({
    theme,
    variable: 'foreground.subtle'
  });
  return css(["color:", ";"], color);
};
const sizeStyles = _ref2 => {
  let {
    $isCompact,
    theme
  } = _ref2;
  const width = $isCompact ? theme.iconSizes.sm : theme.iconSizes.md;
  const margin = `${theme.space.base * 2}px`;
  return css(["width:", ";margin-", ":", ";"], width, theme.rtl ? 'left' : 'right', margin);
};
const StyledFileIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileIcon",
  componentId: "sc-7b3q0c-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledFileIcon };
