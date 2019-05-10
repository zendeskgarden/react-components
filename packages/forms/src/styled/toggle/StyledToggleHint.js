/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import StyledCheckHint from '../checkboxes/StyledCheckHint';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Accepts all `<div>` props
 */
const StyledToggleHint = styled(StyledCheckHint).attrs(props => ({
  className: classNames(props.className, CheckboxStyles['c-chk__hint--toggle'])
}))`
  ${props => retrieveTheme('forms.toggle_hint', props)};
`;

export default StyledToggleHint;
