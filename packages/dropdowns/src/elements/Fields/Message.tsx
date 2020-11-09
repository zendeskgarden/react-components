/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { Message as FormMessage } from '@zendeskgarden/react-forms';
import { VALIDATION } from '../../utils/validation';

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  /** Show success, warning, and danger validation messages with the message component. */
  validation?: VALIDATION;
}

/**
 * Accepts all `<div>` props. Must be nested with a `<Field>` component.
 */
export const Message = React.forwardRef<HTMLDivElement, IMessageProps>((props, ref) => (
  <FormMessage ref={ref} {...props} />
));

Message.displayName = 'Message';

Message.propTypes = {
  validation: PropTypes.oneOf(['success', 'warning', 'error'])
};
