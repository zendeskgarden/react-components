/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'accordions.step_inner_content';

interface IStyledInnerContentProps extends ThemeProps<DefaultTheme> {
  inert?: string;
}

export const StyledInnerContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledInnerContentProps>`
  overflow: hidden;
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ theme }) => getColor({ theme, variable: 'foreground.default' })};
  font-size: ${props => props.theme.fontSizes.md};

  ${componentStyles};
`;
