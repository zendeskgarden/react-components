/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBaseRow, IStyledRowProps } from './StyledRow';
import { StyledOverflowButton } from './StyledOverflowButton';

const COMPONENT_ID = 'tables.header_row';

const getHeaderRowHeight = (props: IStyledRowProps & ThemeProps<DefaultTheme>) => {
  if (props.size === 'large') {
    return `${props.theme.space.base * 18}px`;
  } else if (props.size === 'small') {
    return `${props.theme.space.base * 10}px`;
  }

  return `${props.theme.space.base * 12}px`;
};

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  return css`
    border-bottom-color: ${getColor({ variable: 'border.default', theme })};
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const rowHeight = getHeaderRowHeight(props);

  return css`
    height: ${rowHeight};
    vertical-align: bottom;

    ${StyledOverflowButton} {
      margin-top: 0;
      margin-bottom: calc(${math(`${rowHeight} / 2`)} - 1em);
    }
  `;
};

export const StyledHeaderRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${colorStyles}

  ${sizeStyles}

  ${StyledOverflowButton} {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderRow.defaultProps = {
  theme: DEFAULT_THEME
};
