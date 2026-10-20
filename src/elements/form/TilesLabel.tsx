/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, useState, useEffect, useRef, forwardRef } from 'react';

import { useTilesContext } from '../../hooks/form/useTilesContext';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledTileLabel } from '../../views/form/StyledTileLabel';
import { COMPONENT_IDS } from '../utils';

const LabelComponent = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (props, forwardedRef) => {
    const [title, setTitle] = useState<string | undefined>('');
    const ref = useRef<HTMLSpanElement>(undefined);
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
        data-garden-id={COMPONENT_IDS['forms.tile_label']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

LabelComponent.displayName = 'Tiles.Label';

/**
 * @extends HTMLAttributes<HTMLSpanElement>
 */
export const Label = LabelComponent;
