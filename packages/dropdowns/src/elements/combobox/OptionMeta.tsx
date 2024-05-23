/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import useOptionContext from '../../context/useOptionContext';
import { StyledOptionMeta } from '../../views';

const OptionMetaComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isDisabled, type } = useOptionContext();

    return <StyledOptionMeta isDisabled={isDisabled} $type={type} {...props} ref={ref} />;
  }
);

OptionMetaComponent.displayName = 'Option.Meta';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const OptionMeta = OptionMetaComponent;
