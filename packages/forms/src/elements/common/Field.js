/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from '@zendeskgarden/container-field';
import { FieldContext } from '../../utils/useFieldContext';
import { StyledField } from '../../styled';

/**
 * Provides layout and ID context for child components; accepts all `<div>`
 * attributes and events.
 */
const Field = React.forwardRef((props, ref) => {
  const getMessageProps = messageProps => ({ role: 'alert', ...messageProps });
  const fieldProps = { ...useField(props.id), getMessageProps };

  return (
    <FieldContext.Provider value={fieldProps}>
      <StyledField {...props} ref={ref} />
    </FieldContext.Provider>
  );
});

Field.propTypes = {
  /** Field ID and prefix for generated label, input, and hint IDs */
  id: PropTypes.string
};

export default Field;
