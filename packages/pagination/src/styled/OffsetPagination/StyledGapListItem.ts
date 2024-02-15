/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getLineHeight,
  getColor
} from '@zendeskgarden/react-theming';
import { StyledListItem } from './StyledListItem';

const COMPONENT_ID = 'pagination.gap';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const shift = 2;
  const fontSize = math(`${props.theme.fontSizes.md} + ${shift}`);
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(height, fontSize);
  const padding = `${props.theme.space.base * 1.5}px`;

  return css`
    padding: 0 ${padding};
    min-width: ${height};
    max-width: ${math(`${height} * 2`)}; /* [1] */
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

export const StyledGapListItem = styled(StyledListItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;
  text-align: center;
  color: ${p => getColor('neutralHue', 600, p.theme)};

  ${props => sizeStyles(props)};

  &:hover {
    color: inherit;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGapListItem.defaultProps = {
  theme: DEFAULT_THEME
};
