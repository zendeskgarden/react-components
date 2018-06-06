/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.body';

/**
 * Accepts all `<div>` props
 */
const Body = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: ModalStyles['c-dialog__body']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Body.hasType = () => Body;

/** @component */
export default Body;
