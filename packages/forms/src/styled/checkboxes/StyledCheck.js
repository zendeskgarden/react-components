/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import CheckboxStyles from '@zendeskgarden/css-forms/dist/checkbox.css';

/**
 * Used as a layout wrapper for other Checkbox views. Accepts all `<div>` props.
 */
const StyledCheckbox = styled.div.attrs(props => ({
  className: classNames(CheckboxStyles['c-chk'], {
    // RTL
    [CheckboxStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme('forms.checkbox', props)};
`;

export default StyledCheckbox;
