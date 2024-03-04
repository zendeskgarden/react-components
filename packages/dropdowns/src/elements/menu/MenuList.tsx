/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  DEFAULT_THEME,
  getArrowPosition,
  getFloatingPlacements,
  getMenuPosition
} from '@zendeskgarden/react-theming';
import {
  autoPlacement,
  autoUpdate,
  platform,
  flip,
  offset,
  size,
  useFloating
} from '@floating-ui/react-dom';
import { IMenuListProps, PLACEMENT } from '../../types';
import { StyledFloatingMenu, StyledMenu } from '../../views';
import { createPortal } from 'react-dom';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const MenuList = forwardRef<HTMLUListElement, IMenuListProps>(
  (
    {
      appendToNode,
      hasArrow,
      isCompact,
      isExpanded,
      fallbackPlacements: _fallbackPlacements,
      maxHeight,
      minHeight,
      placement: _placement,
      triggerRef,
      zIndex,
      children,
      ...props
    },
    ref
  ) => {
    const floatingRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(isExpanded);
    const [height, setHeight] = useState<number>();
    /* istanbul ignore next */
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const [floatingPlacement, fallbackPlacements] = getFloatingPlacements(
      theme,
      _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!,
      _fallbackPlacements
    );

    const {
      refs,
      placement,
      update,
      floatingStyles: { transform }
    } = useFloating<HTMLElement>({
      platform: {
        ...platform,
        // Defers RTL to Garden
        // References:
        // - https://github.com/floating-ui/floating-ui/issues/1530
        // - https://github.com/floating-ui/floating-ui/blob/master/packages/dom/src/platform/isRTL.ts#L3
        isRTL: () => theme.rtl
      },
      elements: { reference: triggerRef?.current, floating: floatingRef?.current },
      placement: floatingPlacement,
      middleware: [
        offset(theme.space.base * (hasArrow ? 2 : 1)),
        _placement === 'auto' ? autoPlacement() : flip({ fallbackPlacements }),
        size({
          apply: ({ rects, availableHeight }) => {
            /* istanbul ignore if */
            if (!(minHeight === null || minHeight === 'fit-content')) {
              if (rects.floating.height > availableHeight) {
                setHeight(availableHeight);
              }
            }
          }
        })
      ]
    });

    useEffect(() => {
      // Only allow positioning updates on expanded menu.
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
      <StyledFloatingMenu
        data-garden-animate={isVisible}
        isHidden={!isExpanded}
        position={getMenuPosition(placement)}
        zIndex={zIndex}
        style={{ transform }}
        ref={floatingRef}
      >
        <StyledMenu
          data-garden-animate-arrow={isVisible}
          arrowPosition={hasArrow ? getArrowPosition(theme, placement) : undefined}
          isCompact={isCompact}
          minHeight={minHeight}
          maxHeight={maxHeight}
          style={{ height }}
          {...props}
          ref={ref}
        >
          {isVisible && children}
        </StyledMenu>
      </StyledFloatingMenu>
    );

    return appendToNode ? createPortal(Node, appendToNode) : Node;
  }
);

MenuList.displayName = 'MenuList';

MenuList.propTypes = {
  appendToNode: PropTypes.any,
  hasArrow: PropTypes.bool,
  isCompact: PropTypes.bool,
  isExpanded: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  placement: PropTypes.oneOf(PLACEMENT),
  triggerRef: PropTypes.any,
  zIndex: PropTypes.number
};

MenuList.defaultProps = {
  maxHeight: '400px',
  placement: PLACEMENT_DEFAULT,
  zIndex: 1000
};
