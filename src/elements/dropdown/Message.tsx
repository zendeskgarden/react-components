/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { VALIDATION } from '@zendeskgarden/react-forms';
import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';

import { useFieldContext } from '../../hooks/dropdown/useFieldContext';
import { IComboboxMessageProps } from '../../types/elements';
import { StyledMessage } from '../../views/dropdown/StyledMessage';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Field.Message` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Message = forwardRef<HTMLDivElement, IComboboxMessageProps>((props, ref) => {
  const { messageProps, setHasMessage } = useFieldContext();

  useEffect(() => {
    setHasMessage(true);

    return () => setHasMessage(false);
  }, [setHasMessage]);

  return (
    <StyledMessage
      {...messageProps}
      {...props}
      data-garden-id={COMPONENT_IDS['dropdowns.combobox.message']}
      data-garden-version={PACKAGE_VERSION}
      ref={ref}
    />
  );
});

Message.displayName = 'Field.Message';

Message.propTypes = {
  validation: PropTypes.oneOf(VALIDATION),
  validationLabel: PropTypes.string
};
