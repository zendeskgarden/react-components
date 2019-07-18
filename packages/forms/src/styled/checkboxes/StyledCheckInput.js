/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Hidden `<input>` used to show custom checkbox visualization. Accepts all `<input>` props.
 */
const StyledCheckInput = styled.input.attrs({
  className: CheckboxStyles['c-chk__input'],
  type: 'checkbox',
  tabIndex: 0
})`
  ${props => retrieveComponentStyles('forms.check_input', props)};
`;

export default StyledCheckInput;
