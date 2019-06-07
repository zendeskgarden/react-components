/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import ButtonStyles from '@zendeskgarden/css-buttons';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.button_group_view';

/**
 * Accepts all `<div>` props
 */
const ButtonGroupView = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ButtonStyles['l-btn-group'], {
    [ButtonStyles['is-rtl']]: isRtl(props)
  })
}))`
  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default ButtonGroupView;
