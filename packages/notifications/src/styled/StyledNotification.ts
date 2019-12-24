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
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import { VALIDATION_TYPE, ARRAY_VALIDATION_TYPE } from '../utils/types';

const COMPONENT_ID = 'notifications.notification';

export interface IStyledNotificationProps {
  type?: VALIDATION_TYPE;
}

/**
 * Supports all `<div>` props
 */
export const StyledNotification = styled.div.attrs<IStyledNotificationProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CalloutStyles['c-callout'], CalloutStyles['c-callout--dialog'], {
    // RTL
    [CalloutStyles['is-rtl']]: isRtl(props),

    // Validation types
    [CalloutStyles['c-callout--success']]: props.type === 'success',
    [CalloutStyles['c-callout--warning']]: props.type === 'warning',
    [CalloutStyles['c-callout--error']]: props.type === 'error',
    [CalloutStyles['c-callout--info']]: props.type === 'info'
  })
}))<IStyledNotificationProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNotification.propTypes = {
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE)
};
