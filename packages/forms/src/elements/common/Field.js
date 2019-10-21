/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from '@zendeskgarden/container-field';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { FieldContext } from '../../utils/useFieldContext';
import { StyledField } from '../../styled';

/**
 * Provides layout and ID context for child components; accepts all `<div>`
 * attributes and events.
 */
const Field = React.forwardRef(({ id, ...other }, ref) => {
  const scope = useCombinedRefs(ref);
  const getMessageProps = props => ({ role: 'alert', ...props });
  const fieldProps = { ...useField(id), getMessageProps };

  useFocusVisible({ scope });

  return (
    <FieldContext.Provider value={fieldProps}>
      <StyledField {...other} ref={scope} />
    </FieldContext.Provider>
  );
});

Field.propTypes = {
  /** Prefix for generated label, input, and hint IDs */
  id: PropTypes.string
};

export default Field;
