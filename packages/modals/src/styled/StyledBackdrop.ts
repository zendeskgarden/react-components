/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { DEFAULT_THEME, retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

const COMPONENT_ID = 'modals.backdrop';

export interface IStyledBackdropProps {
  isCentered?: boolean;
  isAnimated?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledBackdrop = styled.div.attrs<IStyledBackdropProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['l-backdrop'], {
    [ModalStyles['l-backdrop--center']]: props.isCentered,
    [ModalStyles['is-visible']]: props.isAnimated,

    // RTL
    [ModalStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledBackdropProps>`
  font-family: ${props => props.theme.fonts.system};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledBackdrop.defaultProps = {
  theme: DEFAULT_THEME
};

StyledBackdrop.propTypes = {
  isCentered: PropTypes.bool,
  isAnimated: PropTypes.bool
};
