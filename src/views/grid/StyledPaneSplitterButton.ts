/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { ChevronButton } from '../../elements/button/ChevronButton';
import type { IGardenTheme } from '../../theming/types';
import { componentStyles } from '../../theming/utils/componentStyles';
import { Orientation } from '../../types/elements';
import type { WithTheme } from '../../types/views';

interface IStyledSplitterButtonProps {
  $orientation: Orientation;
  $isRotated: boolean;
}

export const getSize = (theme: IGardenTheme) => theme.space.base * 6;

const sizeStyles = ({ theme }: WithTheme) => {
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
}: WithTheme<IStyledSplitterButtonProps>) => {
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

export const StyledPaneSplitterButton = styled(ChevronButton)<
  WithTheme<IStyledSplitterButtonProps>
>`
  ${sizeStyles};

  & > svg {
    width: ${p => p.theme.iconSizes.md};
    height: ${p => p.theme.iconSizes.md};
  }

  ${transformStyles};

  ${componentStyles};
`;
