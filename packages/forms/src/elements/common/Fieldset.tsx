/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Legend } from './Legend';
import { IFieldsetProps } from '../../types';
import { StyledFieldset } from '../../styled';
import { FieldsetContext } from '../../utils/useFieldsetContext';

const FieldsetComponent = forwardRef<HTMLFieldSetElement, IFieldsetProps>(
  ({ isCompact, ...other }, ref) => {
    const fieldsetContext = useMemo(() => ({ isCompact }), [isCompact]);

    return (
      <FieldsetContext.Provider value={fieldsetContext}>
        <StyledFieldset {...other} ref={ref} $isCompact={isCompact} />
      </FieldsetContext.Provider>
    );
  }
);

FieldsetComponent.displayName = 'Fieldset';

FieldsetComponent.propTypes = {
  isCompact: PropTypes.bool
};

/**
 * @extends FieldsetHTMLAttributes<HTMLFieldSetElement>
 */
export const Fieldset = FieldsetComponent as typeof FieldsetComponent & {
  Legend: typeof Legend;
};

Fieldset.Legend = Legend;
