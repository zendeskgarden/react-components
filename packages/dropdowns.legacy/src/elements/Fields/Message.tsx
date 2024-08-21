/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IMessageProps, Message as FormMessage, VALIDATION } from '@zendeskgarden/react-forms';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = React.forwardRef<HTMLDivElement, IMessageProps>((props, ref) => (
  <FormMessage ref={ref} {...props} />
));

Message.displayName = 'Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION)
};
