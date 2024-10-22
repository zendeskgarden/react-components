/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

import { StyledItem } from '../StyledItem';

const COMPONENT_ID = 'dropdowns.header_item';

export interface IStyledHeaderItemProps {
  /** Applies icon styling */
  $hasIcon?: boolean;
  $isCompact?: boolean;
}

const getHorizontalPadding = (props: IStyledHeaderItemProps & ThemeProps<DefaultTheme>) => {
  if (props.$hasIcon) {
    return undefined;
  }

  return `${props.theme.space.base * 3}px`;
};

/**
 * Accepts all `<li>` props
 */
export const StyledHeaderItem = styled(StyledItem).attrs<IStyledHeaderItemProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderItemProps>`
  cursor: default;
  padding-right: ${props => getHorizontalPadding(props)};
  padding-left: ${props => getHorizontalPadding(props)};
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
