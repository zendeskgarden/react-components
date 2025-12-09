/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.item';
const sizeStyles = _ref => {
  let {
    theme
  } = _ref;
  return css(["line-height:", ";white-space:nowrap;& > :link,& > :visited{white-space:inherit;}"], getLineHeight(theme.space.base * 5, theme.fontSizes.md));
};
const colorStyles = _ref2 => {
  let {
    $isCurrent,
    theme
  } = _ref2;
  return css(["color:", ";", ""], $isCurrent ? getColor({
    variable: 'foreground.subtle',
    theme
  }) : 'inherit', $isCurrent && `
      & > :link,
      & > :visited,
      & > :link:hover,
      & > :visited:hover,
      & > :link:focus,
      & > :visited:focus {
        color: inherit; /* [1] */
      }
    `);
};
const StyledBreadcrumbItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBreadcrumbItem",
  componentId: "sc-r0suq7-0"
})(["font-size:inherit;", " ", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledBreadcrumbItem };
