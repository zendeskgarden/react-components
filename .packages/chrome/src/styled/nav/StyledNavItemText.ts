/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';

import { getNavWidth } from '../utils';
import { StyledNavButton } from './StyledNavButton';

const COMPONENT_ID = 'chrome.nav_item_text';

export interface IStyledNavItemTextProps {
  $isWrapped?: boolean;
  $isExpanded?: boolean;
}

const sizeStyles = ({
  theme,
  $isExpanded,
  $isWrapped
}: IStyledNavItemTextProps & ThemeProps<DefaultTheme>) => {
  const clip = $isExpanded ? 'auto' : undefined;
  const lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
  const margin = $isExpanded
    ? `0 ${math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}`
    : undefined;
  const width = $isExpanded ? 'auto' : undefined;
  const height = $isExpanded ? 'auto' : undefined;
  const whiteSpace = $isWrapped ? undefined : 'nowrap';

  return css`
    clip: rect(1px, 1px, 1px, 1px);
    margin: ${margin};
    width: 1px;
    height: 1px;
    line-height: ${lineHeight};
    white-space: ${whiteSpace};

    ${StyledNavButton} > && {
      clip: ${clip};
      width: ${width};
      height: ${height};
    }
  `;
};

export const StyledNavItemText = styled.span.attrs<IStyledNavItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledNavItemTextProps>`
  position: absolute;
  order: 1;
  overflow: hidden;

  ${StyledNavButton} > && {
    position: ${props => (props.$isExpanded ? 'static' : undefined)};
    flex: ${props => (props.$isExpanded ? 1 : undefined)};
    text-overflow: ${props => (props.$isExpanded ? 'ellipsis' : undefined)};
  }

  ${sizeStyles};

  ${componentStyles};
`;
