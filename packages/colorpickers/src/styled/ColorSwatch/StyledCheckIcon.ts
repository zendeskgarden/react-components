/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { parseToRgb, readableColor } from 'polished';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorswatch_check';

interface IStyledCheckIcon {
  color: string;
}

const colorStyles = (props: IStyledCheckIcon & ThemeProps<DefaultTheme>) => {
  const { theme, color } = props;
  const darkCheckColor = getColor('neutralHue', 800, theme);
  const { alpha } = parseToRgb(color) as IRGBColor;
  let checkColor = readableColor(color, darkCheckColor, theme.colors.background);

  if (alpha !== undefined && alpha < 0.4) {
    checkColor = darkCheckColor as string;
  }

  return `
    color: ${checkColor}
  `;
};

export const StyledCheckIcon = styled(CheckIcon)`
  width: ${props => props.theme.space.base * 5}px;
  height: ${props => props.theme.space.base * 5}px;
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckIcon.defaultProps = {
  theme: DEFAULT_THEME
};
