/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { VALIDATION } from '@zendeskgarden/react-forms';
import { IMessageProps } from '../../types';
import useFieldContext from '../../context/useFieldContext';
import { StyledMessage } from '../../views';

/**
 * @deprecated use `Field.Message` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { messageProps, setHasMessage } = useFieldContext();

  useEffect(() => {
    setHasMessage(true);

    return () => setHasMessage(false);
  }, [setHasMessage]);

  return <StyledMessage {...messageProps} {...props} ref={ref} />;
});

Message.displayName = 'Field.Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
