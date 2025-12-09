/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default from 'react';
import PropTypes from 'prop-types';
import { Message as Message$1, VALIDATION } from '@zendeskgarden/react-forms';

const Message = React__default.forwardRef((props, ref) => React__default.createElement(Message$1, Object.assign({
  ref: ref
}, props)));
Message.displayName = 'Message';
Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION)
};

export { Message };
