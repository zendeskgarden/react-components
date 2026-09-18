/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { RefObject, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  autoPlacement,
  autoUpdate,
  flip,
  platform,
  size,
  useFloating,
  Placement
} from '@floating-ui/react-dom';
import { DEFAULT_THEME, getFloatingPlacements } from '@zendeskgarden/react-theming';
import { GardenPlacement } from '../types';

const PLACEMENT_DEFAULT = 'bottom-start';

interface IUseFloatingDialogOptions {
  isOpen: boolean;
  dialogRef: RefObject<HTMLDivElement | null>;
  getReferenceElement: () => Element | null;
  placement?: GardenPlacement;
  isAnimated?: boolean;
}

interface IUseFloatingDialogReturnValue {
  placement: Placement;
  transform: string | undefined;
  isVisible: boolean;
  rtl: boolean;
}

/** Shared floating-ui positioning and open/close fade-timing bookkeeping for `DatePicker` and `DatePickerRange`'s own `Dialog`. */
export function useFloatingDialog({
  isOpen,
  dialogRef,
  getReferenceElement,
  placement: _placement = PLACEMENT_DEFAULT,
  isAnimated = true
}: IUseFloatingDialogOptions): IUseFloatingDialogReturnValue {
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const [isVisible, setIsVisible] = useState(false);

  const [floatingPlacement] = getFloatingPlacements(
    theme,
    _placement === 'auto' ? PLACEMENT_DEFAULT : _placement!
  );

  const {
    refs,
    placement,
    update,
    floatingStyles: { transform }
  } = useFloating({
    platform: {
      ...platform,
      isRTL: () => theme.rtl
    },
    elements: {
      reference: getReferenceElement(),
      floating: dialogRef?.current as HTMLElement | null
    },
    placement: floatingPlacement,
    middleware: [
      _placement === 'auto' ? autoPlacement() : flip(),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${Math.max(0, availableWidth)}px`,
            maxHeight: `${Math.max(0, availableHeight)}px`,
            overflow: 'hidden'
          });

          const menu = elements.floating.firstElementChild as HTMLElement | null;

          if (menu) {
            Object.assign(menu.style, { maxWidth: '100%', maxHeight: '100%' });
          }
        }
      })
    ]
  });

  useEffect(() => {
    let cleanup: () => void;

    if (isOpen && refs.reference.current && refs.floating.current) {
      cleanup = autoUpdate(refs.reference.current, refs.floating.current, update, {
        elementResize: typeof ResizeObserver === 'function'
      });
    }

    return () => cleanup && cleanup();
  }, [isOpen, refs.reference, refs.floating, update]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      setIsVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setIsVisible(false), 200);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeout);
  }, [isOpen, isAnimated]);

  return { placement, transform, isVisible, rtl: theme.rtl };
}
