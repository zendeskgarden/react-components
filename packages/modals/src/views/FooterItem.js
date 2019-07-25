/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.footer_item';

/**
 * Accepts all `<span>` props
 */
const FooterItem = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: ModalStyles['c-dialog__footer__item']
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

/** @component */
export default FooterItem;
