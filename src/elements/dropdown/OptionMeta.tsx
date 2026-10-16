/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, forwardRef } from 'react';

import { useOptionContext } from '../../hooks/dropdown/useOptionContext';
import { StyledOptionMeta } from '../../views/dropdown/StyledOptionMeta';
import { COMPONENT_IDS } from '../utils';

const OptionMetaComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isDisabled } = useOptionContext();

    return (
      <StyledOptionMeta
        $isDisabled={isDisabled}
        {...props}
        data-garden-id={COMPONENT_IDS['dropdowns.combobox.option.meta']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      />
    );
  }
);

OptionMetaComponent.displayName = 'Option.Meta';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const OptionMeta = OptionMetaComponent;
