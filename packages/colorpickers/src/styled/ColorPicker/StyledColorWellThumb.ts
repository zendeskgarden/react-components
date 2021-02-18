/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker.colorwell_thumb';

interface IStyledSaturationPointerProps {
  top: number;
  left: number;
}

export const StyledColorWellThumb = styled.div.attrs<IStyledSaturationPointerProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'colorwell-thumb',
  style: {
    top: `${props.top}%`,
    left: `${props.left}%`
  }
}))<IStyledSaturationPointerProps>`
  position: absolute;
  border: 2px solid ${props => props.theme.colors.background};
  cursor: default;
  /* stylelint-disable */
  transform: translate(
    -${props => props.theme.space.base * 2.5}px,
    -${props => props.theme.space.base * 2.5}px
  );
  /* stylelint-enable */
  border-radius: 50%;
  box-shadow: ${props =>
    `0 ${props.theme.space.base}px ${props.theme.space.base * 2}px 0 ${getColor(
      'neutralHue',
      800,
      props.theme,
      0.24
    )}`};
  width: ${props => props.theme.space.base * 4}px;
  height: ${props => props.theme.space.base * 4}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWellThumb.defaultProps = {
  theme: DEFAULT_THEME
};
