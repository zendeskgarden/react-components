/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'dropdowns.combobox.label';

export const StyledLabel = styled(Field.Label).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  vertical-align: revert;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledLabel.defaultProps = {
  theme: DEFAULT_THEME
};
