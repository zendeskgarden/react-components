import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../package.json';
import Well from './Well';
const COMPONENT_ID = 'notifications.notification';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Supports all `<div>` props
 */
const Notification = styled(Well).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  floating: true,
  className: props =>
    classNames({
      // Validation types
      [CalloutStyles['c-callout--success']]: props.type === VALIDATION.SUCCESS,
      [CalloutStyles['c-callout--warning']]: props.type === VALIDATION.WARNING,
      [CalloutStyles['c-callout--error']]: props.type === VALIDATION.ERROR
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Notification.propTypes = {
  recessed: PropTypes.bool,
  type: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default Notification;
