import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
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
