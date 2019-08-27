/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import useModalContext from '../utils/useModalContext';

const COMPONENT_ID = 'modals.header';

/**
 * Accepts all `<div>` props
 */
const StyledHeader = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ModalStyles['c-dialog__header'], {
    // Danger styling
    [ModalStyles['c-dialog__header--danger']]: props.danger
  })
}))`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

const Header = props => {
  const { getTitleProps } = useModalContext();

  return <StyledHeader {...getTitleProps()} {...props} />;
};

/** @component */
export default Header;
