/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'colorpickers.colorpicker_hex_field';

export const StyledHexField = styled((Field as unknown) as 'div').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  spellcheck: false
})`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.space.base * 21.5}px;
  text-align: center;

  input {
    direction: ltr;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHexField.defaultProps = {
  theme: DEFAULT_THEME
};
