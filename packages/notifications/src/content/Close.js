import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

/**
 * Used to close a Notification. Supports all `<button>` props
 */
const Close = styled.button.attrs({
  className: props =>
    classNames(CalloutStyles['c-callout__close'], {
      // State
      [CalloutStyles['is-focused']]: props.focused,
      [CalloutStyles['is-hovered']]: props.hovered
    })
})`
  ${props => retrieveTheme('notifications.close', props)};
`;

Close.propTypes = {
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

/** @component */
export default Close;
