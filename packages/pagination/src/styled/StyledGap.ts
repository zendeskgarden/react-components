/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledPage } from './StyledPage';

const COMPONENT_ID = 'pagination.gap';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const shift = 2;
  const marginTop = `-${shift}px`;
  const fontSize = math(`${props.theme.fontSizes.md} + ${shift}`);

  return css`
    margin-top: ${marginTop};
    font-size: ${fontSize};
  `;
};

export const StyledGap = styled(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  cursor: default;

  ${props => sizeStyles(props)};

  &:hover {
    background-color: transparent;
    color: inherit;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGap.defaultProps = {
  theme: DEFAULT_THEME
};
