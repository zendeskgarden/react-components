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
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = forwardRef<HTMLDivElement, IMessageProps>((props, ref) => {
  const { hasMessage, setHasMessage } = useFieldContext();

  useEffect(() => {
    // context callback
    setHasMessage(true);

    return () => setHasMessage(false);
  }, [hasMessage, setHasMessage]);

  return <StyledMessage {...props} ref={ref} />;
});

Message.displayName = 'Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
