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

const COMPONENT_ID = 'checkboxes.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CheckboxStyles['c-chk__hint'], {
    // RTL
    [CheckboxStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Hint.hasType = () => Hint;

/** @component */
export default Hint;
