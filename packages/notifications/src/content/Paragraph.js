/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'notifications.paragraph';

/**
 * Used for multi-line Notification content. Supports all `<div>` props
 */
const Paragraph = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: classNames(CalloutStyles['c-callout__paragraph'])
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Paragraph;
