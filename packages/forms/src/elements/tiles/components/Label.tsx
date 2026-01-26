/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useState, useEffect, useRef, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { StyledTileLabel } from '../../../styled';
import { useTilesContext } from '../../../utils/useTilesContext';

const LabelComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, forwardedRef) => {
    const [title, setTitle] = useState<string | undefined>('');
    const ref = useRef<HTMLSpanElement>();
    const tilesContext = useTilesContext();

    useEffect(() => {
      if (ref.current) {
        setTitle(ref.current.textContent || undefined);
      }
    }, [ref]);

    return (
      <StyledTileLabel
        ref={mergeRefs([ref, forwardedRef])}
        title={title}
        $isCentered={tilesContext?.isCentered}
        {...props}
      />
    );
  }
);

LabelComponent.displayName = 'Tiles.Label';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Label = LabelComponent;
