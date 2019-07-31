/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.icon';

export const StyledIcon = styled(({ children, rotated, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transform: ${props => props.rotated && `rotate(${isRtl(props) ? '-' : '+'}180deg)`};
  transition: transform 0.25s ease-in-out;
  margin-top: -2px;
  vertical-align: middle;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.propTypes = {
  rotated: PropTypes.bool,
  theme: PropTypes.object
};

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
