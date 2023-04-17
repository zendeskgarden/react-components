/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { autoUpdate, flip, size, useFloating } from '@floating-ui/react-dom';
import { IListboxProps } from '../types';
import { StyledFloating, StyledListbox } from '../views';
import { createPortal } from 'react-dom';

export const Listbox = forwardRef<HTMLDivElement, IListboxProps>(
  ({ appendToNode, children, isExpanded, maxHeight, triggerRef, ...props }, ref) => {
    const listboxRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>();
    const { refs, placement, update, x, y } = useFloating<HTMLElement>({
      placement: 'bottom-start',
      middleware: [flip(), size({ apply: ({ rects }) => setWidth(rects.reference.width) })]
    });
    const devicePixelRatio = window.devicePixelRatio || 1; // TODO replace `window` with theme object
    const horizontal = Math.round(devicePixelRatio * (x ?? 0)) / devicePixelRatio;
    const vertical = Math.round(devicePixelRatio * (y ?? 0)) / devicePixelRatio;
    const transform = `translate(${horizontal}px, ${vertical}px)`;

    useLayoutEffect(() => {
      refs.setReference(triggerRef?.current);
      refs.setFloating(listboxRef?.current);
    }, [refs, triggerRef, listboxRef]);

    useEffect(() => {
      // Only allow listbox positioning updates on expanded combobox.
      let cleanup: () => void;

      if (isExpanded && refs.reference.current && refs.floating.current) {
        cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
          elementResize: false
        });
      }

      return () => cleanup && cleanup();
    }, [isExpanded, refs.reference, refs.floating, update]);

    const Node = (
      <StyledFloating
        data-garden-animate={isExpanded}
        isHidden={!isExpanded}
        position={placement === 'bottom-start' ? 'bottom' : 'top'}
        style={{ transform, width }}
        {...props}
        ref={mergeRefs([listboxRef, ref])}
      >
        <StyledListbox maxHeight={maxHeight}>{children}</StyledListbox>
      </StyledFloating>
    );

    return appendToNode ? createPortal(Node, appendToNode) : Node;
  }
);

Listbox.displayName = 'Listbox';

Listbox.propTypes = {
  appendToNode: PropTypes.any,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  zIndex: PropTypes.number
};
