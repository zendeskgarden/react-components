/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { zdFontFamilyMonospace, zdFontSizeSmMonospace } from '@zendeskgarden/css-variables';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import SM from './SM';

const COMPONENT_ID = 'typography.monospace_sm';

/**
 * Accepts all standard props relating to provided `tag`
 */
const MonospaceSM = styled(SM).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  font-family: ${zdFontFamilyMonospace};

  && {
    font-size: ${zdFontSizeSmMonospace};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

MonospaceSM.propTypes = {
  /** Any valid DOM element for the styled component */
  tag: PropTypes.any
};

/** @component */
export default MonospaceSM;
