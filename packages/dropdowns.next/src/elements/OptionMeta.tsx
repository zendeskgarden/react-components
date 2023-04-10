/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import useOptionContext from '../context/useOptionContext';
import { StyledItemMeta } from '../views';

const OptionMetaComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isDisabled } = useOptionContext();

    return <StyledItemMeta isDisabled={isDisabled} {...props} ref={ref} />;
  }
);

OptionMetaComponent.displayName = 'Option.Meta';

export const OptionMeta = OptionMetaComponent;
