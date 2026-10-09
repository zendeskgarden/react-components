/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getValueAndUnit } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getHueColor } from '../../theming/utils/getHueColor';
import type { IStyledBaseProps } from '../../types/views';
import { delayedVisibilityKeyframes } from '../utils/animations';

interface IStyledSVGProps {
  'data-garden-id': string;
  $color?: string;
  $fontSize?: string | number;
  $width: number | string;
  $height: number | string;
  $containerWidth?: string;
  $containerHeight?: string;
  $delayShow?: number;
}

const colorStyles = ({ theme, $color = 'inherit' }: IStyledSVGProps & IStyledBaseProps) => {
  const color = getHueColor({ theme, value: $color });

  return css`
    color: ${color};
  `;
};

const sizeStyles = ({
  $containerWidth = '1em',
  $containerHeight = '0.9em',
  $fontSize = 'inherit'
}: IStyledSVGProps) => {
  const [value, unit] = getValueAndUnit($fontSize);
  let fontSize;

  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }

  return css`
    width: ${$containerWidth};
    height: ${$containerHeight};
    font-size: ${fontSize};
  `;
};

const delayedVisibilityStyles = ({ $delayShow }: IStyledSVGProps) => {
  if ($delayShow && $delayShow !== 0) {
    return css`
      /* stylelint-disable-next-line time-min-milliseconds */
      animation: ${delayedVisibilityKeyframes} 1ms ${$delayShow}ms linear 1 forwards;
      visibility: hidden;
    `;
  }

  return undefined;
};

// MIGRATE(component-ids): .attrs with non-data props — move to the base tag, element JSX or default parameters
export const StyledSVG = styled.svg.attrs<IStyledSVGProps>(props => ({
  'data-garden-version': PACKAGE_VERSION,
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  viewBox: `0 0 ${props.$width} ${props.$height}`,
  role: 'img'
}))<IStyledSVGProps>`
  ${sizeStyles};

  ${colorStyles};

  ${componentStyles};

  ${delayedVisibilityStyles};
`;
