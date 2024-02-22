/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPageBase } from './StyledPageBase';

const COMPONENT_ID = 'pagination.page';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const height = props.theme.space.base * 8;

  return css`
    min-width: ${height}px;
    max-width: ${height * 2}px;

    &[aria-current='true'] {
      max-width: none;
    }
  `;
};

export const StyledPage = styled(StyledPageBase).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => sizeStyles(props)};

  /* stylelint-disable */
  /* prettier-ignore */
  &[aria-current="true"] {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPage.defaultProps = {
  theme: DEFAULT_THEME
};
