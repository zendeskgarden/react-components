import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'notifications.title';

/**
 * Used for Notification titles. Supports all `<div>` props
 */
const Title = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: classNames(CalloutStyles['c-callout__title'])
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Title;
