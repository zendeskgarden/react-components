/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell';

interface IStyledColorWellProps {
  hue: number;
}

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
