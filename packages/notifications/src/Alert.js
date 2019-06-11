/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme } from '@zendeskgarden/react-theming';

import Well from './Well';
const COMPONENT_ID = 'notifications.alert';

const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};

/**
 * Supports all `<div>` props
 */
const Alert = styled(Well).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  recessed: props.type === VALIDATION.INFO,
  className: classNames(props.className, {
    // Validation types
    [CalloutStyles['c-callout--success']]: props.type === VALIDATION.SUCCESS,
    [CalloutStyles['c-callout--warning']]: props.type === VALIDATION.WARNING,
    [CalloutStyles['c-callout--error']]: props.type === VALIDATION.ERROR,
    [CalloutStyles['c-callout--info']]: props.type === VALIDATION.INFO
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Alert.propTypes = {
  type: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR, VALIDATION.INFO])
    .isRequired
};

/** @component */
export default Alert;
