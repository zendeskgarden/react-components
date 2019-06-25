/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdFontSizeXxxl, zdLineHeightXxxl } from '@zendeskgarden/css-variables';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.xxxl';

const StyledXXXL = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${zdLineHeightXxxl};
  font-size: ${zdFontSizeXxxl};

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

/**
 * Accepts all standard props relating to provided `tag`
 */
const XXXL = ({ tag, ...other }) => {
  const CustomTagXXXL = StyledXXXL.withComponent(tag);

  return <CustomTagXXXL {...other} />;
};

XXXL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any
};

XXXL.defaultProps = {
  tag: 'div'
};

/** @component */
export default XXXL;
