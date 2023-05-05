/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import {
  getColor,
  getLineHeight,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.item';

export interface IStyledBreadcrumbItemProps {
  isCurrent?: boolean;
}

/**
 * These CSS pseudo-classes are used to match the equivalent of :any-link, which
 * is not used here because it is not currently supported in Microsoft Edge.
 */
const linkStyles = ({ isCurrent }: IStyledBreadcrumbItemProps) => css`
  & > :link,
  & > :visited {
    white-space: inherit;
  }

  ${isCurrent &&
  `
      & > :link,
      & > :visited,
      & > :link:hover,
      & > :visited:hover,
      & > :link:focus,
      & > :visited:focus {
        color: inherit;
      }
    `}
`;

export const StyledBreadcrumbItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledBreadcrumbItemProps>`
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  white-space: nowrap;
  color: ${props => (props.isCurrent ? getColor(props.theme.colors.neutralHue, 600) : 'inherit')};
  font-size: inherit;

  ${linkStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBreadcrumbItem.defaultProps = {
  theme: DEFAULT_THEME
};
