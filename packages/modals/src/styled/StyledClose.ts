/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import ModalStyles from '@zendeskgarden/css-modals';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.close';

export interface IStyledCloseProps {
  hovered?: boolean;
}

/**
 * Supports all `<button>` props.
 */
export const StyledClose = styled.button.attrs<IStyledCloseProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog__close'], {
    // State
    [ModalStyles['is-hovered']]: props.hovered
  })
}))<IStyledCloseProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledClose.defaultProps = {
  theme: DEFAULT_THEME
};
