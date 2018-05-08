/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import { version } from '../../package.json';
const COMPONENT_ID = 'modals.body';

/**
 * Accepts all `<div>` props
 */
const Body = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ModalStyles['c-dialog__body']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Body;
