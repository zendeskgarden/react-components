/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ModalStyles from '@zendeskgarden/css-modals';

import useModalContext from '../utils/useModalContext';

const COMPONENT_ID = 'modals.body';

/**
 * Accepts all `<div>` props
 */
const StyledBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: ModalStyles['c-dialog__body']
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

const Body = props => {
  const { getContentProps } = useModalContext();

  return <StyledBody {...getContentProps({ ...props })} />;
};

/** @component */
export default Body;
