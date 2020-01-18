/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledClose } from '../styled';
import { useModalsContext } from '../utils/useModalContext';

/**
 * Used to close a Modal. Accepts all `<button>` props.
 */
export const Close = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps } = useModalsContext();

    return <StyledClose ref={ref} {...getCloseProps(props)} />;
  }
);
