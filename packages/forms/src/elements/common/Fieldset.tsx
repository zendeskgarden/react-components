/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useMemo,
  forwardRef,
  RefAttributes,
  PropsWithoutRef,
  FieldsetHTMLAttributes,
  ForwardRefExoticComponent
} from 'react';
import { Legend } from './Legend';
import { StyledFieldset } from '../../styled';
import { FieldsetContext } from '../../utils/useFieldsetContext';

export interface IFieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Applies compact styling
   */
  isCompact?: boolean;
}

interface IStaticFieldsetExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Legend: typeof Legend;
}

/**
 * @extends FieldsetHTMLAttributes<HTMLFieldSetElement>
 */
export const Fieldset = forwardRef<HTMLFieldSetElement, IFieldsetProps>((props, ref) => {
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
}) as IStaticFieldsetExport<HTMLFieldSetElement, IFieldsetProps>;
/* eslint-enable react/display-name */

Fieldset.Legend = Legend;

Fieldset.displayName = 'Fieldset';
