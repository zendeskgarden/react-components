import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalloutStyles from '@zendesk/garden-css-callouts';
import { retrieveTheme } from '@zendesk/garden-react-theming';

import { version } from '../package.json';
import Well from './Well';
const COMPONENT_ID = 'notifications.alert';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Supports all `<div>` props
 */
const Alert = styled(Well).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
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

Alert.propTypes = {
  recessed: PropTypes.bool,
  floating: PropTypes.bool,
  type: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR]).isRequired
};

/** @component */
export default Alert;
