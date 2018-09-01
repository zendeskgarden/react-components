/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

const COMPONENT_ID = 'toggles.input';

/**
 * Hidden `<input>` used to show custom toggle visualization. Accepts all `<input>` props
 */
const Input = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: CheckboxStyles['c-chk__input'],
  type: 'checkbox',
  tabIndex: 0
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Input;
