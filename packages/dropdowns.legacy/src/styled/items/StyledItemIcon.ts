/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';
import { getItemPaddingVertical } from './StyledItem';

const COMPONENT_ID = 'dropdowns.item_icon';

interface IStyledItemIconProps {
  $isCompact?: boolean;
  $isVisible?: boolean;
  $isDisabled?: boolean;
}

const getSizeStyles = (props: IStyledItemIconProps & ThemeProps<DefaultTheme>) => {
  return css`
    width: ${props.theme.iconSizes.md};
    height: calc(${props.theme.space.base * 5}px + ${math(`${getItemPaddingVertical(props)} * 2`)});
  `;
};

export const StyledItemIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemIconProps>`
  display: flex;
  position: absolute;
  top: 0;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 3}px;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s ease-in-out;
  opacity: ${props => (props.$isVisible ? '1' : '0')};
  color: ${props =>
    props.$isDisabled
      ? 'inherit'
      : getColor({ theme: props.theme, variable: 'foreground.primary' })};

  ${props => getSizeStyles(props)};

  & > * {
    width: ${props => props.theme.iconSizes.md};
    height: ${props => props.theme.iconSizes.md};
  }
`;
