/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.step_content';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const { rtl, space } = props.theme;
  const padding = space.base * 4;
  const paddingRight = rtl ? space.base * 6 : '0';
  const paddingLeft = rtl ? '0' : space.base * 6;
  const marginRight = rtl ? space.base * 3 : '0';
  const marginLeft = rtl ? '0' : space.base * 3;

  return css`
    margin: ${space.base}px ${marginRight}px ${space.base}px ${marginLeft}px;
    padding: ${padding}px ${paddingRight}px ${padding}px ${paddingLeft}px;
  `;
};

export const StyledContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME
};
