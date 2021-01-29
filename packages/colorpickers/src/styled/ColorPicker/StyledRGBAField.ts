/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Field } from '@zendeskgarden/react-forms';
import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpicker.rgb.field';

export const StyledRGBAField = styled(Field).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-direction: column;
  width: 51px;
  text-align: center;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRGBAField.defaultProps = {
  theme: DEFAULT_THEME
};
