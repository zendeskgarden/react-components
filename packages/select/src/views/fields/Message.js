/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { Message as TextfieldMessage } from '@zendeskgarden/react-textfields';

const COMPONENT_ID = 'select.message';
const VALIDATION = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Accepts all `<div>` props
 */
const Message = TextfieldMessage.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

/** @component */
export default Message;
