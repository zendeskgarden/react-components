/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledBaseRow, IStyledRowProps } from './StyledRow';
import { StyledCell } from './StyledCell';
import { getLineHeight } from './StyledTable';

const COMPONENT_ID = 'tables.group_row';

const sizeStyles = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  const height = `${props.theme.space.base * 8}px`;
  const lineHeight = getLineHeight(props);

  return css`
    height: ${height};
    line-height: ${lineHeight};
    font-size: ${props.theme.fontSizes.sm};

    ${StyledCell} {
      padding: ${math(`(${height} - ${lineHeight}) / 2`)} ${props.theme.space.base * 3}px;
    }
  `;
};

export const StyledGroupRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  background-color: ${props => getColor('neutralHue', 100, props.theme)};
  ${props => sizeStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledGroupRow.defaultProps = {
  theme: DEFAULT_THEME
};
