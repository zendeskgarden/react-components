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

/**
 * Accepts all `<div>` props
 */
const Backdrop = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['l-backdrop'], {
    [ModalStyles['l-backdrop--center']]: props.center,
    [ModalStyles['is-visible']]: props.animate,

    // RTL
    [ModalStyles['is-rtl']]: isRtl(props)
  })
}))`
  font-family: ${props => props.theme.fonts.system};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

Backdrop.defaultProps = {
  theme: DEFAULT_THEME
};

Backdrop.propTypes = {
  center: PropTypes.bool,
  animate: PropTypes.bool,
  /** @ignore */
  theme: PropTypes.object
};

/** @component */
export default Backdrop;
