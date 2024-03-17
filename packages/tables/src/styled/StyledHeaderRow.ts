/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
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

export const StyledHeaderRow = styled(StyledBaseRow).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  border-bottom-color: ${props => getColorV8('neutralHue', 300, props.theme)};
  height: ${getHeaderRowHeight};
  vertical-align: bottom;
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${StyledOverflowButton} {
    opacity: 1;
    margin-top: 0;
    margin-bottom: calc(${props => math(`${getHeaderRowHeight(props)} / 2`)} - 1em);
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderRow.defaultProps = {
  theme: DEFAULT_THEME
};
