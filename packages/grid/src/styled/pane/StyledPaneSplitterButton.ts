/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { ChevronButton } from '@zendeskgarden/react-buttons';
import { Orientation } from '../../types';

interface IStyledSplitterButtonProps {
  $orientation: Orientation;
  $isRotated: boolean;
}

export const getSize = (theme: DefaultTheme) => theme.space.base * 6;

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const size = `${getSize(theme)}px`;

  return css`
    width: ${size};
    min-width: ${size};
    height: ${size};
  `;
};

const transformStyles = ({
  $isRotated,
  $orientation,
  theme
}: IStyledSplitterButtonProps & ThemeProps<DefaultTheme>) => {
  let degrees = 0;

  if ($isRotated) {
    degrees = theme.rtl ? -180 : 180;
  }

  if ($orientation === 'end') {
    degrees += theme.rtl ? -90 : 90;
  } else if ($orientation === 'start') {
    degrees += theme.rtl ? 90 : -90;
  } else if ($orientation === 'bottom') {
    degrees += 180;
  }

  return css`
    & > svg {
      transform: rotate(${degrees}deg);
    }
  `;
};

export const StyledPaneSplitterButton = styled(ChevronButton).attrs<IStyledSplitterButtonProps>({
  'data-garden-version': PACKAGE_VERSION,
  isBasic: true,
  isPill: true,
  size: 'small'
})<IStyledSplitterButtonProps>`
  ${sizeStyles};

  ${transformStyles};

  ${componentStyles};
`;
