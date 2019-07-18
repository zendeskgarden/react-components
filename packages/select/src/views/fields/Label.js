/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { Label as TextfieldLabel } from '@zendeskgarden/react-textfields';

const COMPONENT_ID = 'select.label';

/**
 * Accepts all `<label>` props
 */
const Label = styled(TextfieldLabel).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

Label.propTypes = {
  regular: PropTypes.bool,
  small: PropTypes.bool
};

Label.hasType = () => Label;

/** @component */
export default Label;
