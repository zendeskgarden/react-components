/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import {
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_inner_content';

export const StyledInnerContent = styled.div.attrs<ThemeProps<DefaultTheme>>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledInnerContent.defaultProps = {
  theme: DEFAULT_THEME
};
