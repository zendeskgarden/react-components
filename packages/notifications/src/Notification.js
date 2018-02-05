import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import Well from './Well';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Supports all `<div>` props
 */
const Notification = styled(Well).attrs({
  floating: true,
  className: props =>
    classNames({
      // Validation types
      [CalloutStyles['c-callout--success']]: props.type === VALIDATION.SUCCESS,
      [CalloutStyles['c-callout--warning']]: props.type === VALIDATION.WARNING,
      [CalloutStyles['c-callout--error']]: props.type === VALIDATION.ERROR
    })
})`
  ${props => retrieveTheme('notifications.notification', props)};
`;

Notification.propTypes = {
  recessed: PropTypes.bool,
  type: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default Notification;
