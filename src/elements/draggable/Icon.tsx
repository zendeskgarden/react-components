/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes, useEffect } from 'react';

import { useDropzoneContext } from '../../hooks/draggable/useDropzoneContext';
import { StyledIcon } from '../../views/draggable/StyledIcon';
import { COMPONENT_IDS } from '../utils';

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
      data-garden-id={COMPONENT_IDS['dropzone.icon']}
      data-garden-version={PACKAGE_VERSION}
      $hasMessage={hasMessage}
      $isVertical={isVertical}
      ref={ref}
    />
  );
});

Icon.displayName = 'Dropzone.Icon';
