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
  zdFontSizeLg,
  zdFontSizeLgMonospace,
  zdLineHeightLg
} from '@zendeskgarden/css-variables';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.lg';

const StyledLG = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${zdLineHeightLg};
  font-family: ${props => (props.monospace ? zdFontFamilyMonospace : null)};
  font-size: ${props => (props.monospace ? zdFontSizeLgMonospace : zdFontSizeLg)};

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * Accepts all standard props relating to provided `tag`
 */
const LG = ({ tag, ...other }) => {
  const CustomTagLG = StyledLG.withComponent(tag);

  return <CustomTagLG {...other} />;
};

LG.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any,
  /** Render monospace font */
  monospace: PropTypes.bool
};

LG.defaultProps = {
  tag: 'div'
};

/** @component */
export default LG;
