/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledOptionIcon } from '../combobox/StyledOptionIcon';

const COMPONENT_ID = 'dropdowns.menu.item.icon';

interface IStyledItemIconProps {
  $isExternalLinkIcon?: boolean;
}

const colorStyles = ({ $isExternalLinkIcon }: IStyledItemIconProps) => {
  return css`
    color: ${$isExternalLinkIcon && 'inherit'};
  `;
};

const sizeStyles = ({
  $isExternalLinkIcon,
  theme
}: IStyledItemIconProps & ThemeProps<DefaultTheme>) => {
  const size = theme.iconSizes.sm;
  const marginHorizontal = `${theme.space.base * 2}px`;

  return css`
    align-self: ${$isExternalLinkIcon && 'center'};
    margin-${theme.rtl ? 'right' : 'left'}: ${$isExternalLinkIcon && marginHorizontal};
    width: ${$isExternalLinkIcon && size};
    height: ${$isExternalLinkIcon && size};
  `;
};

export const StyledItemIcon = styled(StyledOptionIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemIconProps>`
  transform: ${p => p.$isExternalLinkIcon && p.theme.rtl && 'scaleX(-1)'};

  ${sizeStyles}

  ${colorStyles}

  ${componentStyles};
})`;
