/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { useMemo, forwardRef } from 'react';

import { FieldsetProvider } from '../../context/form/FieldsetContext';
import { IFieldsetProps } from '../../types/elements';
import { StyledFieldset } from '../../views/form/StyledFieldset';
import { COMPONENT_IDS } from '../utils';
import { Legend } from './Legend';

const FieldsetComponent = forwardRef<HTMLFieldSetElement, IFieldsetProps>(
  ({ isCompact, ...other }, ref) => {
    const fieldsetContext = useMemo(() => ({ isCompact }), [isCompact]);

    return (
      <FieldsetProvider value={fieldsetContext}>
        <StyledFieldset
          {...other}
          $isCompact={isCompact}
          as="fieldset"
          data-garden-id={COMPONENT_IDS['forms.fieldset']}
          data-garden-version={PACKAGE_VERSION}
          ref={ref}
        />
      </FieldsetProvider>
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
