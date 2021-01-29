/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.saturation_circle';

export const StyledSaturationCircle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable */
  transform: translate(
    -${props => props.theme.space.base * 2}px,
    -${props => props.theme.space.base * 2}px
  );
  /* stylelint-enable */
  border-radius: 50%;
  /* stylelint-disable */
  box-shadow: 0 0 0 1.5px ${props => props.theme.colors.background},
    inset 0 0 1px 1px rgba(0, 0, 0, 0.3), 0 0 1px 2px rgba(0, 0, 0, 0.4);
  /* stylelint-enable */
  width: ${props => props.theme.space.base * 4}px;
  height: ${props => props.theme.space.base * 4}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSaturationCircle.defaultProps = {
  theme: DEFAULT_THEME
};
