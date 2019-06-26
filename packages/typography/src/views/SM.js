/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTheme, retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.sm';

const StyledSM = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  line-height: ${props => props.theme.lineHeights.sm};
  font-family: ${props => (props.monospace ? props.theme.fonts.mono : null)};
  /* stylelint-disable-next-line declaration-colon-newline-after */
  font-size: ${props =>
    props.monospace ? props.theme.fontSizes.mono.sm : props.theme.fontSizes.sm};

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSM.defaultProps = {
  theme: defaultTheme
};

/**
 * Accepts all standard props relating to provided `tag`
 */
const SM = ({ tag, ...other }) => {
  const CustomTagSM = StyledSM.withComponent(tag);

  return <CustomTagSM {...other} />;
};

SM.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any,
  /** Render monospace font */
  monospace: PropTypes.bool
};

SM.defaultProps = {
  tag: 'div'
};

/** @component */
export default SM;
