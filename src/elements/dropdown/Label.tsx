/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useFieldContext } from '../../hooks/dropdown/useFieldContext';
import { IComboboxLabelProps } from '../../types/elements';
import { StyledLabel } from '../../views/dropdown/StyledLabel';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Field.Label` instead
 *
 * @extends LabelHTMLAttributes<HTMLLabelElement>
 */
export const Label = forwardRef<HTMLLabelElement, IComboboxLabelProps>(
  ({ onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const { labelProps } = useFieldContext();

    return (
      <StyledLabel
        {...labelProps}
        onClick={composeEventHandlers(onClick, labelProps?.onClick)}
        onMouseEnter={composeEventHandlers(onMouseEnter, labelProps?.onMouseEnter)}
        onMouseLeave={composeEventHandlers(onMouseLeave, labelProps?.onMouseLeave)}
        {...props}
        data-garden-id={COMPONENT_IDS['dropdowns.combobox.label']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

Label.displayName = 'Field.Label';

Label.propTypes = {
  hidden: PropTypes.bool,
  isRegular: PropTypes.bool
};
