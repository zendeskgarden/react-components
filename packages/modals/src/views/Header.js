/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.header';

/**
 * Accepts all `<div>` props
 */
const Header = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog__header'], {
    // Danger styling
    [ModalStyles['c-dialog__header--danger']]: props.danger
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Header.hasType = () => Header;

/** @component */
export default Header;
