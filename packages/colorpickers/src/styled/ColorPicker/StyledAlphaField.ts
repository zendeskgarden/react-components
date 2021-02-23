/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { Field } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha_field';

export const StyledAlphaField = styled((Field as unknown) as 'div').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  top: ${props => props.theme.space.base * 2}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledAlphaField.defaultProps = {
  theme: DEFAULT_THEME
};
