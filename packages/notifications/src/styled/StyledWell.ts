/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveComponentStyles, isRtl, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.well';

export interface IStyledWellProps {
  isRecessed?: boolean;
  isFloating?: boolean;
}

/**
 * Supports all `<div>` props
 */
export const StyledWell = styled.div.attrs<IStyledWellProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CalloutStyles['c-callout'], {
    // RTL
    [CalloutStyles['is-rtl']]: isRtl(props),

    // Styles
    [CalloutStyles['c-callout--recessed']]: props.isRecessed,
    [CalloutStyles['c-callout--dialog']]: props.isFloating
  })
}))<IStyledWellProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledWell.defaultProps = {
  theme: DEFAULT_THEME
};
