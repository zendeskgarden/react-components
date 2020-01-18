/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.header';

export interface IStyledHeaderProps {
  /**
   * Enable danger header styling
   */
  isDanger?: boolean;
}

export const StyledHeader = styled.div.attrs<IStyledHeaderProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog__header'], {
    // Danger styling
    [ModalStyles['c-dialog__header--danger']]: props.isDanger
  })
}))<IStyledHeaderProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
