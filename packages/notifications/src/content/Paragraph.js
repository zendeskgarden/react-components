import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Used for multi-line Notification content. Supports all `<div>` props
 */
const Paragraph = styled.div.attrs({
  className: classNames(CalloutStyles['c-callout__paragraph'])
})`
  ${props => retrieveTheme('notifications.paragraph', props)};
`;

/** @component */
export default Paragraph;
