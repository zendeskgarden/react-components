/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes, useEffect } from 'react';

import { StyledIcon } from '../../../styled';
import { useDropzoneContext } from '../../../utils/useDropzoneContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Icon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { hasIcon, setHasIcon, hasMessage, isVertical } = useDropzoneContext();

  useEffect(() => {
    if (setHasIcon && !hasIcon) {
      setHasIcon(true);
    }

    return () => {
      if (setHasIcon && hasIcon) {
        setHasIcon(false);
      }
    };
  }, [setHasIcon, hasIcon]);

  return (
    <StyledIcon
      aria-hidden="true"
      {...props}
      $hasMessage={hasMessage}
      $isVertical={isVertical}
      ref={ref}
    />
  );
});

Icon.displayName = 'Dropzone.Icon';
