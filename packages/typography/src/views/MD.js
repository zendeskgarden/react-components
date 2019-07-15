/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  zdFontFamilyMonospace,
  zdFontSizeMd,
  zdFontSizeMdMonospace,
  zdLineHeightMd
} from '@zendeskgarden/css-variables';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.md';

const StyledMD = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${zdLineHeightMd};
  font-family: ${props => (props.monospace ? zdFontFamilyMonospace : null)};
  font-size: ${props => (props.monospace ? zdFontSizeMdMonospace : zdFontSizeMd)};

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all standard props relating to provided `tag`
 */
const MD = ({ tag, ...other }) => {
  const CustomTagMD = StyledMD.withComponent(tag);

  return <CustomTagMD {...other} />;
};

MD.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any,
  /** Render monospace font */
  monospace: PropTypes.bool
};

MD.defaultProps = {
  tag: 'div'
};

/** @component */
export default MD;
