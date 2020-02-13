/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider_track_rail';

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const height = math(`${props.theme.space.base} * 1.5px`);
  const margin = math(`${props.theme.space.base} * 2.5px`);

  return css`
    margin: 0 ${props.theme.rtl ? `-${margin}` : margin} 0
      ${props.theme.rtl ? margin : `-${margin}`};
    height: ${height};
  `;
};

export const StyledSliderTrackRail = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: relative;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliderTrackRail.defaultProps = {
  theme: DEFAULT_THEME
};
