/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@zendeskgarden/container-field';
import { useFocusVisible } from '@zendeskgarden/container-focusvisible';
import { FieldContext } from '../../utils/useFieldContext';
import { StyledField } from '../../styled';

/**
 * Provides accessibility attributes to child form fields. Accepts all `<div>`
 * attributes and events.
 */
function Field({ id, children, ...other }) {
  const scope = useRef();
  const fieldProps = useField(id);

  useFocusVisible({ scope });

  return (
    <FieldContext.Provider value={fieldProps}>
      <StyledField {...other} ref={scope}>
        {children}
      </StyledField>
    </FieldContext.Provider>
  );
}

Field.propTypes = {
  /**
   * The ID that is used as the base for accessiblity attributes
   */
  id: PropTypes.string,
  children: PropTypes.node
};

export default Field;
