/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getCheckeredBackground } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin, StyledRange } from '../common/StyledRange';
import { IRGBColor } from '../../types';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha';

const background = (props: IRGBColor & ThemeProps<DefaultTheme>) => {
  const direction = `to ${props.theme.rtl ? 'left' : 'right'}`;
  const fromColor = `rgba(${props.red}, ${props.green}, ${props.blue}, 0)`;
  const toColor = `rgb(${props.red}, ${props.green}, ${props.blue})`;
  const positionY = getTrackMargin(props);
  const height = getTrackHeight(props);
  const overlay = `linear-gradient(${direction}, ${fromColor}, ${toColor}) 0 ${positionY}px / 100% ${height}px no-repeat`;

  return getCheckeredBackground({
    theme: props.theme,
    size: height,
    positionY,
    repeat: 'repeat-x',
    overlay
  });
};

export const StyledAlphaRange = styled(StyledRange as 'input').attrs<IRGBColor>(props => ({
  style: {
    backgroundSize: 'auto',
    background: background(props)
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IRGBColor>`
  /* stylelint-disable no-empty-source */
`;

StyledAlphaRange.defaultProps = {
  theme: DEFAULT_THEME
};
