/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getValueAndUnit } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

interface IStyledLoadingPlaceholderProps {
  $fontSize: string | number;
  $width?: string;
  $height?: string;
}

const sizeStyles = ({
  $width = '1em',
  $height = '0.9em',
  $fontSize
}: IStyledLoadingPlaceholderProps) => {
  const [value, unit] = getValueAndUnit($fontSize);
  let fontSize;

  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }

  return css`
    width: ${$width};
    height: ${$height};
    font-size: ${fontSize};
  `;
};

export const StyledLoadingPlaceholder = styled.div<IStyledLoadingPlaceholderProps>`
  display: inline-block;

  ${sizeStyles};

  ${componentStyles}
`;
