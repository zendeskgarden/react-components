/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin, StyledRange, trackStyles } from '../common/StyledRange';
import { checkeredBackground } from '../common/checkeredBackground';
import { IRGBColor } from '../../utils/types';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha';

const gradientBackground = (props: IRGBColor & ThemeProps<DefaultTheme>) => {
  const direction = `to ${props.theme.rtl ? 'left' : 'right'}`;
  const fromColor = `rgba(${props.red}, ${props.green}, ${props.blue}, 0)`;
  const toColor = `rgb(${props.red}, ${props.green}, ${props.blue})`;
  const positionY = `${getTrackMargin(props.theme)}px`;
  const height = `${getTrackHeight(props.theme)}px`;

  return `linear-gradient(${direction}, ${fromColor}, ${toColor}) 0 ${positionY} / 100% ${height} no-repeat`;
};

export const StyledAlphaRange = styled(StyledRange as 'input').attrs<IRGBColor>(props => ({
  style: {
    backgroundSize: 'auto' /* Range reset */,
    background: `${gradientBackground(props)},
      ${checkeredBackground(props.theme, 12, 5, 'repeat-x')}`
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IRGBColor>`
  ${trackStyles(`
    background-image: none;
  `)}
`;

StyledAlphaRange.defaultProps = {
  theme: DEFAULT_THEME
};
