/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  MouseEventHandler,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import { IListboxProps } from '../../types';
import { StyledFloatingListbox, StyledListbox } from '../../views';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';

export const Listbox = forwardRef<HTMLUListElement, IListboxProps>(
  (
    {
      appendToNode,
      children,
      isCompact,
      isExpanded,
      maxHeight,
      minHeight,
      onMouseDown,
      triggerRef,
      zIndex,
      ...props
    },
    ref
  ) => {
    const floatingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState<number>();
    const [width, setWidth] = useState<number>();
    /* istanbul ignore next */
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const {
      refs,
      placement,
      update,
      floatingStyles: { transform }
    } = useFloating<HTMLElement>({
      elements: { reference: triggerRef?.current, floating: floatingRef?.current },
      placement: 'bottom-start',
      middleware: [
        offset(theme.space.base),
        flip(),
        size({
          apply: ({ rects, availableHeight }) => {
            /* istanbul ignore if */
            if (rects.reference.width > 0) {
              setWidth(rects.reference.width);

              if (
                !(minHeight === null || minHeight === 'fit-content') &&
                rects.floating.height > availableHeight
              ) {
                setHeight(availableHeight);
              }
            }
          }
        })
      ]
    });
    /* Prevent listbox close on scrollbar click */
    const handleMouseDown: MouseEventHandler = event => event.preventDefault();

    useEffect(() => {
      // Only allow listbox positioning updates on expanded combobox.
      let cleanup: () => void;

      if (isExpanded && refs.reference.current && refs.floating.current) {
        cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
          elementResize: typeof ResizeObserver === 'function'
        });
      }

      return () => cleanup && cleanup();
    }, [isExpanded, refs.reference, refs.floating, update]);

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      /* istanbul ignore else */
      if (isExpanded) {
        setIsVisible(true);
      } else {
        timeout = setTimeout(() => {
          setIsVisible(false);
          setHeight(undefined);
        }, 200 /* match menu opacity transition */);
      }

      return () => clearTimeout(timeout);
    }, [isExpanded]);

    useEffect(
      () => {
        /* istanbul ignore if */
        if (height) {
          // Reset height on options change.
          setHeight(undefined);
          update();
        }
      },
      /* eslint-disable-line react-hooks/exhaustive-deps */ [
        /* height, // prevent height update loop */
        children,
        update
      ]
    );

    const Node = (
      <StyledFloatingListbox
        data-garden-animate={isVisible ? 'true' : 'false'}
        isHidden={!isExpanded}
        position={placement === 'bottom-start' ? 'bottom' : 'top'}
        style={{ transform, width }}
        zIndex={zIndex}
        ref={floatingRef}
      >
        <StyledListbox
          isCompact={isCompact}
          maxHeight={maxHeight}
          minHeight={minHeight}
          onMouseDown={composeEventHandlers(onMouseDown, handleMouseDown)}
          style={{ height }}
          {...props}
          ref={ref}
        >
          {!!isVisible && children}
        </StyledListbox>
      </StyledFloatingListbox>
    );

    return appendToNode ? createPortal(Node, appendToNode) : Node;
  }
);

Listbox.displayName = 'Listbox';

Listbox.propTypes = {
  appendToNode: PropTypes.any,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  zIndex: PropTypes.number
};
