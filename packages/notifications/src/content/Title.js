import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Used for Notification titles. Supports all `<div>` props
 */
const Title = styled.div.attrs({
  className: classNames(CalloutStyles['c-callout__title'])
})`
  ${props => retrieveTheme('notifications.title', props)};
`;

/** @component */
export default Title;
