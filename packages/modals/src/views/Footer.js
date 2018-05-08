/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme, isRtl } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.footer';

/**
 * Accepts all `<div>` props
 */
const Footer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ModalStyles['c-dialog__footer']
})`
  && > * {
    ${props => (isRtl(props) ? 'margin-right: 8px' : 'margin-left: 8px')};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Footer;
