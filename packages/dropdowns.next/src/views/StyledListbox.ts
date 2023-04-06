/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.listbox';

export const StyledListbox = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow-y: scroll;

  &&& {
    display: block;
    padding-top: ${props => props.theme.space.base}px;
    padding-bottom: ${props => props.theme.space.base}px;
  }
`;

StyledListbox.defaultProps = {
  theme: DEFAULT_THEME
};
