/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getColor } from '@zendeskgarden/react-theming';

const sizeStyles$4 = ({
  theme
}) => {
  return css(["border-bottom:", ";vertical-align:top;box-sizing:border-box;"], theme.borders.sm);
};
const colorStyles$5 = ({
  theme,
  $isStriped
}) => {
  const borderColor = getColor({
    variable: 'border.subtle',
    theme
  });
  const backgroundColor = getColor({
    variable: 'background.subtle',
    transparency: theme.opacity[100],
    light: {
      offset: 300
    },
    dark: {
      offset: -600
    },
    theme
  });
  return css(["border-bottom-color:", ";background-color:", ";"], borderColor, $isStriped && backgroundColor);
};
const StyledBaseRow = styled.tr.withConfig({
  displayName: "StyledBaseRow",
  componentId: "sc-1t4zqg4-0"
})(["display:table-row;transition:background-color 0.1s ease-in-out;", " ", ""], sizeStyles$4, colorStyles$5);

export { StyledBaseRow };
