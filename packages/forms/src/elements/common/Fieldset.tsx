/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { FieldsetHTMLAttributes } from 'react';
import { StyledFieldset } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLFieldSetElement>
 */
export const Fieldset = React.forwardRef<
  HTMLFieldSetElement,
  FieldsetHTMLAttributes<HTMLFieldSetElement>
>((props, ref) => {
  return <StyledFieldset {...props} ref={ref} />;
});

Fieldset.displayName = 'Fieldset';
