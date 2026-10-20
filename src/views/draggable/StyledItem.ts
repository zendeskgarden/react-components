/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, DefaultTheme, ThemeProps, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

export interface IStyledItemProps extends ThemeProps<DefaultTheme> {
  $isHorizontal?: boolean;
}

const sizeStyles = (props: IStyledItemProps) => {
  const {
    $isHorizontal,
    theme: { space }
  } = props;

  return css`
    padding: ${$isHorizontal ? `0 ${space.xxs}` : `${space.xxs} 0`};
  `;
};

export const StyledItem = styled.li<IStyledItemProps>`
  display: flex;

  ${sizeStyles}

  ${componentStyles};
`;
