/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ThemeContext } from 'styled-components';
import { autoPlacement, autoUpdate, flip, platform, useFloating } from '@floating-ui/react-dom';
import { DEFAULT_THEME, getFloatingPlacements, useText } from '@zendeskgarden/react-theming';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { GardenPlacement } from '../../../types';
import { StyledMenu, StyledMenuWrapper } from '../../../styled';

interface IDialogProps extends HTMLAttributes<HTMLDivElement> {
  /** Appends the dialog to the element provided **/
  appendToNode?: Element | DocumentFragment;
  /** Adjusts the position of the dialog **/
  placement?: GardenPlacement;
  /** Animates the dialog **/
  isAnimated?: boolean;
  /** Sets the `z-index` of the dialog **/
  zIndex?: number;
}

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * Wraps `DatePickerRange.Calendar` in a non-modal `role="dialog"` that
 * opens/closes via a consumer-composed `DatePickerRange.Trigger` and/or a
 * field with `opensDialog`. Styled and floated the same way `DatePicker`'s
 * own popover is - via `StyledMenuWrapper`/`StyledMenu` and `floating-ui`
 * positioning - anchored to `Start`'s input, falling back to `End`'s input
 * then the `Trigger` button, whichever is rendered.
 */
export const Dialog = ({
  children,
  placement: _placement = PLACEMENT_DEFAULT,
  isAnimated = true,
  zIndex = 1000,
  appendToNode,
  ...props
}: PropsWithChildren<IDialogProps>) => {
  const { isOpen, dialogRef, getDialogProps, getReferenceElement } = useDatePickerContext();
  const theme = useContext(ThemeContext) || DEFAULT_THEME;
  const [isVisible, setIsVisible] = useState(false);
  const ariaLabel = useText(Dialog, props, 'aria-label', 'Choose dates');

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
    middleware: [_placement === 'auto' ? autoPlacement() : flip()]
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

  const Node = (
    <StyledMenuWrapper
      {...getDialogProps({
        ...props,
        'aria-label': ariaLabel!,
        style: { transform, ...props.style }
      })}
      $isAnimated={!!isAnimated && (isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!isOpen || undefined}
      data-test-id="range-dialog"
      data-test-open={isOpen}
      data-test-rtl={theme.rtl}
    >
      {!!(isOpen || isVisible) && <StyledMenu>{children}</StyledMenu>}
    </StyledMenuWrapper>
  );

  return appendToNode ? createPortal(Node, appendToNode) : Node;
};

Dialog.displayName = 'DatePickerRange.Dialog';
