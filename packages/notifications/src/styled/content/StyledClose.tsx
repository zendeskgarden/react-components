/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.close';

export interface IStyledCloseProps {
  isFocused?: boolean;
  isHovered?: boolean;
}

/**
 * Used to close a Notification. Supports all `<button>` props
 */
export const StyledClose = styled.button.attrs<IStyledCloseProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button',
  className: classNames(CalloutStyles['c-callout__close'], {
    // State
    [CalloutStyles['is-focused']]: props.isFocused,
    [CalloutStyles['is-hovered']]: props.isHovered
  })
}))<IStyledCloseProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
