/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import { VALIDATION_TYPES } from '../utils/types';

const COMPONENT_ID = 'notifications.alert';

export interface IStyledAlertProps {
  type?: VALIDATION_TYPES;
}

/**
 * Supports all `<div>` props
 */
export const StyledAlert = styled.div.attrs<IStyledAlertProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CalloutStyles['c-callout'], {
    // RTL
    [CalloutStyles['is-rtl']]: isRtl(props),

    // Styles
    [CalloutStyles['c-callout--recessed']]: props.type === 'info',

    // Validation types
    [CalloutStyles['c-callout--success']]: props.type === 'success',
    [CalloutStyles['c-callout--warning']]: props.type === 'warning',
    [CalloutStyles['c-callout--error']]: props.type === 'error',
    [CalloutStyles['c-callout--info']]: props.type === 'info'
  })
}))<IStyledAlertProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
