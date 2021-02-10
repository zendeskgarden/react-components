/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker.colorwell';

interface IStyledColorWellProps {
  hue: number;
}

export const StyledColorWellGradient = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* stylelint-disable */
  background: linear-gradient(
      0deg,
      ${props => props.theme.palette.black},
      ${props => getColor(props.theme.palette.black, undefined, props.theme, 0.9)} 1%,
      transparent 99%
    ),
    linear-gradient(
      ${props => props.theme.rtl && '-'}90deg,
      ${props => props.theme.colors.background} 1%,
      rgba(0, 0, 0, 0)
    );
  /* stylelint-enable */
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWellGradient.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledColorWell = styled.div.attrs<IStyledColorWellProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-test-id': 'colorwell',
  style: {
    background: `hsl(${props.hue}, 100%, 50%)`
  }
}))<IStyledColorWellProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledColorWell.defaultProps = {
  theme: DEFAULT_THEME
};
