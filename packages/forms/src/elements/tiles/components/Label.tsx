/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useState, useEffect } from 'react';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledTileLabel } from '../../../styled';
import { useTilesContext } from '../../../utils/useTilesContext';

/**
 * Accepts all `<span>` attributes
 */
export const Label = React.forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, forwardedRef) => {
    const [title, setTitle] = useState<string | undefined>('');
    const ref = useCombinedRefs(forwardedRef);
    const tilesContext = useTilesContext();

    useEffect(() => {
      if (ref.current) {
        setTitle(ref.current.textContent || undefined);
      }
    }, [ref]);

    return (
      <StyledTileLabel
        ref={ref}
        title={title}
        isStacked={tilesContext && tilesContext.isStacked}
        {...props}
      />
    );
  }
);

Label.displayName = 'TileLabel';
