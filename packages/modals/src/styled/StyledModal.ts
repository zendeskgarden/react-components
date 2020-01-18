/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.modal_view';

export interface IStyledModalProps {
  isLarge?: boolean;
  isAnimated?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledModal = styled.div.attrs<IStyledModalProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog'], {
    // Sizing
    [ModalStyles['c-dialog--large']]: props.isLarge,

    // States
    [ModalStyles['is-open']]: props.isAnimated,

    // RTL
    [ModalStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledModalProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledModal.propTypes = {
  isLarge: PropTypes.bool,
  isAnimated: PropTypes.bool
};

StyledModal.defaultProps = {
  theme: DEFAULT_THEME
};
