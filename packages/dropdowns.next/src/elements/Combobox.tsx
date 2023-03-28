/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IComboboxProps } from '../types';
import { StyledCombobox } from '../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Combobox = forwardRef<HTMLDivElement, IComboboxProps>((props, ref) => (
  <StyledCombobox ref={ref} {...props} />
));

Combobox.displayName = 'Combobox';

Combobox.propTypes = {
  isCompact: PropTypes.bool
};
