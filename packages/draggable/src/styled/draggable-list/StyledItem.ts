/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.item';

export interface IStyledItemProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

const sizeStyles = (props: IStyledItemProps) => {
  const {
    isHorizontal,
    theme: { space }
  } = props;

  return css`
    padding: ${isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`};
  `;
};

export const StyledItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemProps>`
  display: flex;

  ${sizeStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
