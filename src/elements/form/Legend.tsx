/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { StyledLegend } from '../../views/form/StyledLegend';
import { COMPONENT_IDS } from '../utils';

const LegendComponent = forwardRef<HTMLLegendElement, HTMLAttributes<HTMLLegendElement>>(
  (props, ref) => {
    return (
      <StyledLegend
        {...props}
        as="legend"
        data-garden-id={COMPONENT_IDS['forms.fieldset_legend']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

LegendComponent.displayName = 'Fieldset.Legend';

/**
 * @extends HTMLAttributes<HTMLLegendElement>
 */
export const Legend = LegendComponent;
