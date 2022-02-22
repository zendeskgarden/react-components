/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, forwardRef, FieldsetHTMLAttributes } from 'react';
import { Legend } from './Legend';
import { StyledFieldset } from '../../styled';
import { FieldsetContext } from '../../utils/useFieldsetContext';

export interface IFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
}

const FieldsetComponent = forwardRef<HTMLFieldSetElement, IFieldsetProps>((props, ref) => {
  const fieldsetContext = useMemo(
    () => ({
      isCompact: props.isCompact
    }),
    [props.isCompact]
  );

  return (
    <FieldsetContext.Provider value={fieldsetContext}>
      <StyledFieldset {...props} ref={ref} />
    </FieldsetContext.Provider>
  );
});

FieldsetComponent.displayName = 'Fieldset';

/**
 * @extends FieldsetHTMLAttributes<HTMLFieldSetElement>
 */
export const Fieldset = FieldsetComponent as typeof FieldsetComponent & {
  Legend: typeof Legend;
};

Fieldset.Legend = Legend;
