/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { autoUpdate, flip, size, useFloating } from '@floating-ui/react-dom';
import { IListboxProps } from '../../types';
import { StyledFloating, StyledListbox } from '../../views';

export const Listbox = forwardRef<HTMLUListElement, IListboxProps>(
  ({ appendToNode, children, isExpanded, maxHeight, triggerRef, zIndex, ...props }, ref) => {
    const floatingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [width, setWidth] = useState<number>();
    const {
      refs,
      placement,
      update,
      floatingStyles: { transform }
    } = useFloating<HTMLElement>({
      elements: { reference: triggerRef?.current, floating: floatingRef?.current },
      placement: 'bottom-start',
      middleware: [flip(), size({ apply: ({ rects }) => setWidth(rects.reference.width) })]
    });

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

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      if (isExpanded) {
        setIsVisible(true);
      } else {
        timeout = setTimeout(() => setIsVisible(false), 200 /* match menu opacity transition */);
      }

      return () => clearTimeout(timeout);
    }, [isExpanded]);

    const Node = (
      <StyledFloating
        data-garden-animate={isVisible ? 'true' : 'false'}
        isHidden={!isExpanded}
        position={placement === 'bottom-start' ? 'bottom' : 'top'}
        style={{ transform, width }}
        zIndex={zIndex}
        ref={floatingRef}
      >
        <StyledListbox maxHeight={maxHeight} {...props} ref={ref}>
          {isVisible && children}
        </StyledListbox>
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
