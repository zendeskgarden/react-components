/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledLegend } from '../../styled';

const LegendComponent = forwardRef<HTMLLegendElement, HTMLAttributes<HTMLLegendElement>>(
  (props, ref) => {
    return <StyledLegend {...props} ref={ref} />;
  }
);

LegendComponent.displayName = 'Fieldset.Legend';

/**
 * @extends HTMLAttributes<HTMLLegendElement>
 */
export const Legend = LegendComponent;
