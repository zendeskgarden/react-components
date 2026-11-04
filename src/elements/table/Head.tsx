/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, RefObject, useEffect, useRef } from 'react';
import useResizeObserver from 'use-resize-observer';

import { useTableHeadContext } from '../../hooks/table/useTableHeadContext';
import { IHeadProps } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledHead } from '../../views/table/StyledHead';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Table.Head` instead
 *
 * @extends HTMLAttributes<HTMLTableSectionElement>
 */
export const Head = forwardRef<HTMLTableSectionElement, IHeadProps>(
  ({ isSticky, ...props }, ref) => {
    const headRef = useRef<HTMLTableSectionElement>(null);
    const { setStickyHeadHeight } = useTableHeadContext();
    const isObserved = !!isSticky && typeof ResizeObserver !== 'undefined';

    useResizeObserver({
      ref: isObserved ? (headRef as RefObject<HTMLTableSectionElement>) : null,
      onResize: () => setStickyHeadHeight(headRef.current?.offsetHeight)
    });

    useEffect(() => {
      if (!isSticky) {
        return undefined;
      }

      setStickyHeadHeight(headRef.current?.offsetHeight);

      return () => setStickyHeadHeight(undefined);
    }, [isSticky, setStickyHeadHeight]);

    return (
      <StyledHead
        ref={mergeRefs([headRef, ref])}
        $isSticky={isSticky}
        {...props}
        data-garden-id={COMPONENT_IDS['tables.head']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }
);

Head.displayName = 'Table.Head';
