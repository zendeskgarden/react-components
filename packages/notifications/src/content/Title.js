/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.title';

/**
 * Used for Notification titles. Supports all `<div>` props
 */
const Title = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CalloutStyles['c-callout__title'])
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Title;
