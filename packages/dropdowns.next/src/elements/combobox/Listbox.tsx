/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { autoUpdate, flip, size, useFloating } from '@floating-ui/react-dom';
import { DEFAULT_THEME, useWindow } from '@zendeskgarden/react-theming';
import { IListboxProps } from '../../types';
import { StyledFloating, StyledListbox } from '../../views';

export const Listbox = forwardRef<HTMLUListElement, IListboxProps>(
  ({ appendToNode, children, isExpanded, maxHeight, triggerRef, ...props }, ref) => {
    const floatingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [width, setWidth] = useState<number>();
    const { refs, placement, update, x, y } = useFloating<HTMLElement>({
      placement: 'bottom-start',
      middleware: [flip(), size({ apply: ({ rects }) => setWidth(rects.reference.width) })]
    });
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const win = useWindow(theme);
    const devicePixelRatio = win?.devicePixelRatio || 1;
    const horizontal = Math.round(devicePixelRatio * (x ?? 0)) / devicePixelRatio;
    const vertical = Math.round(devicePixelRatio * (y ?? 0)) / devicePixelRatio;
    const transform = `translate(${horizontal}px, ${vertical}px)`;

    useLayoutEffect(() => {
      // https://floating-ui.com/docs/react#refs
      refs.setReference(triggerRef?.current);
      refs.setFloating(floatingRef?.current);
    }, [refs, triggerRef, floatingRef]);

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
