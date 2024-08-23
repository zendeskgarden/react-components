/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import {
  getColor,
  getLineHeight,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.item';

export interface IStyledBreadcrumbItemProps {
  $isCurrent?: boolean;
}

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => css`
  line-height: ${getLineHeight(theme.space.base * 5, theme.fontSizes.md)};
  white-space: nowrap;

  & > :link,
  & > :visited {
    white-space: inherit;
  }
`;

/**
 * 1. These CSS pseudo-classes are used to match the equivalent of :any-link, which
 *     is not used here because it is not currently supported in Microsoft Edge.
 */
const colorStyles = ({
  $isCurrent,
  theme
}: IStyledBreadcrumbItemProps & ThemeProps<DefaultTheme>) => css`
  color: ${$isCurrent ? getColor({ variable: 'foreground.subtle', theme }) : 'inherit'};

  ${$isCurrent &&
  `
      & > :link,
      & > :visited,
      & > :link:hover,
      & > :visited:hover,
      & > :link:focus,
      & > :visited:focus {
        color: inherit; /* [1] */
      }
    `}
`;

export const StyledBreadcrumbItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBreadcrumbItemProps>`
  font-size: inherit;

  ${sizeStyles}

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
