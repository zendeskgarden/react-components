/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckHint } from '../checkboxes/StyledCheckHint';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Accepts all `<div>` props
 */
const StyleRadioHint = styled(StyledCheckHint).attrs(props => ({
  className: classNames(props.className, CheckboxStyles['c-chk__hint--radio'])
}))`
  ${props => retrieveComponentStyles('forms.radio_hint', props)};
`;

export default StyleRadioHint;
