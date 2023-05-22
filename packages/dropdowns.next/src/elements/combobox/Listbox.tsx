/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { autoUpdate, flip, offset, size, useFloating } from '@floating-ui/react-dom';
import { IListboxProps } from '../../types';
import { StyledFloating, StyledListbox } from '../../views';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

export const Listbox = forwardRef<HTMLUListElement, IListboxProps>(
  (
    {
      appendToNode,
      children,
      isCompact,
      isExpanded,
      maxHeight,
      options,
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
            setWidth(rects.reference.width);

            if (rects.floating.height > availableHeight) {
              setHeight(availableHeight);
            }
          }
        })
      ]
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
        timeout = setTimeout(() => {
          setIsVisible(false);
          setHeight(undefined);
        }, 200 /* match menu opacity transition */);
      }

      return () => clearTimeout(timeout);
    }, [isExpanded]);

    useEffect(
      () => {
        if (height) {
          // Reset height on options change.
          setHeight(undefined);
          update();
        }
      },
      /* eslint-disable-line react-hooks/exhaustive-deps */ [
        /* height, // prevent height update loop */
        options,
        update
      ]
    );

    const Node = (
      <StyledFloating
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
          style={{ height }}
          {...props}
          ref={ref}
        >
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
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  triggerRef: PropTypes.any.isRequired,
  zIndex: PropTypes.number
};
