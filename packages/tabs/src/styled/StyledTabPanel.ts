/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tabpanel';

interface IStyledTabPanelProps {
  $isVertical?: boolean;
}

const sizeStyles = ({ theme, $isVertical }: IStyledTabPanelProps & ThemeProps<DefaultTheme>) => {
  const margin = $isVertical ? `${theme.space.base * 8}px` : undefined;

  return css`
    margin-${theme.rtl ? 'right' : 'left'}: ${margin};
  `;
};

export const StyledTabPanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledTabPanelProps>`
  display: block;
  vertical-align: ${props => props.$isVertical && 'top'};
  color-scheme: only ${p => p.theme.colors.base};

  ${sizeStyles};

  &[aria-hidden='true'] {
    display: none;
  }

  ${componentStyles};
`;
