/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

const COMPONENT_ID = 'splitter.separator';

interface IStyledSeparatorProps {
  isHorizontal: boolean;
}

const sizeStyles = ({ isHorizontal, theme }: IStyledSeparatorProps & ThemeProps<DefaultTheme>) => {
  const separatorWidth = isHorizontal === false ? theme.borderWidths.sm : '100%';
  const separatorHeight = isHorizontal ? theme.borderWidths.sm : '100%';

  return css`
    margin: 0 auto;
    width: ${separatorWidth};
    height: ${separatorHeight};
  `;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const greyBackgroundColor = getColor('neutralHue', 300, theme);

  return css`
    background-color: ${greyBackgroundColor};
  `;
};

export const StyledSeparator = styled.div.attrs<IStyledSeparatorProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSeparatorProps>`
  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSeparator.defaultProps = {
  theme: DEFAULT_THEME
};
