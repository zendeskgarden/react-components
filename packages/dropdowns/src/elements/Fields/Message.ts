/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { StyledMessage, VALIDATION } from '../../styled';
import { HTMLAttributes } from 'react';

export interface IMessageProps extends HTMLAttributes<HTMLDivElement> {
  validation?: VALIDATION;
}

/**
 * Accepts all `<div>` props. Must be nested with a `<Field>` component.
 */
const Message = StyledMessage as React.FunctionComponent<IMessageProps>;

Message.propTypes = {
  validation: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR])
};

export default Message;
