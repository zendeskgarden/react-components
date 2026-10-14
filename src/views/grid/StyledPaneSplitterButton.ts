/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ChevronButton } from '@zendeskgarden/react-buttons';
import styled, { css, DefaultTheme } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { Orientation } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

interface IStyledSplitterButtonProps {
  $orientation: Orientation;
  $isRotated: boolean;
}

export const getSize = (theme: DefaultTheme) => theme.space.base * 6;

const sizeStyles = ({ theme }: IStyledBaseProps) => {
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
}: IStyledSplitterButtonProps & IStyledBaseProps) => {
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

// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
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
