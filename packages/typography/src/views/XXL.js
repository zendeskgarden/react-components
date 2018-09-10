/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdFontSizeXxl, zdLineHeightXxl } from '@zendeskgarden/css-variables';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.xxl';

const StyledXXL = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${zdLineHeightXxl};
  font-size: ${zdFontSizeXxl};

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all standard props relating to the provided `tag`
 */
const XXL = ({ tag, ...other }) => {
  const CustomTagXXL = StyledXXL.withComponent(tag);

  return <CustomTagXXL {...other} />;
};

XXL.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.string
};

XXL.defaultProps = {
  tag: 'div'
};

/** @component */
export default XXL;
