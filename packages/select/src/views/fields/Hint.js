/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { Hint as TextfieldHint } from '@zendeskgarden/react-textfields';

const COMPONENT_ID = 'select.hint';

/**
 * Accepts all `<div>` props
 */
const Hint = TextfieldHint.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Hint.propTypes = {
  small: PropTypes.bool
};

Hint.hasType = () => Hint;

/** @component */
export default Hint;
