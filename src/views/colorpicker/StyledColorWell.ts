/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { hsl, rgba } from 'polished';
import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { IStyledBaseProps } from '../../types/views';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell';

interface IStyledColorWellProps {
  $hue: number;
}

const background = (props: IStyledColorWellProps & IStyledBaseProps) => {
  const blackAlpha = rgba(props.theme.palette.black as string, 0.9);
  const black = `linear-gradient(0deg, ${props.theme.palette.black}, ${blackAlpha} 1%, transparent 99%)`;
  const whiteAngle = `${props.theme.rtl ? -90 : 90}deg`;
  const white = `linear-gradient(${whiteAngle}, ${props.theme.palette.white} 1%, transparent)`;
  const colorValue = hsl(props.$hue, 1, 0.5);
  const color = `linear-gradient(${colorValue}, ${colorValue})`;

  return `${black}, ${white}, ${color}`;
};

// MIGRATE(component-ids): .attrs with non-data props — move them to the element JSX, after the last spread
export const StyledColorWell = styled.div.attrs<IStyledColorWellProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'colorwell',
  style: {
    background: background(props)
  }
}))<IStyledColorWellProps>`
  position: relative;
  margin-bottom: ${props => props.theme.space.base * 2}px;
  cursor: pointer;
  height: 208px;
  overflow: hidden;

  ${componentStyles};
`;
