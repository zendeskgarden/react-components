/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import useDatePickerContext from '../utils/useDatePickerContext';
import { GardenPlacement } from '../../../types';
import { StyledMenu, StyledMenuWrapper } from '../../../styled';
import { useFloatingDialog } from '../../../utils/use-floating-dialog';

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
 * Wraps `DatePicker`'s calendar in a non-modal `role="dialog"` that
 * opens/closes via the internal `Trigger`/input wiring. Already labelled
 * via `aria-labelledby` (see `getDialogProps` in `useDatePicker`), so unlike
 * `DatePickerRange.Dialog` it takes no `aria-label` of its own.
 */
export const Dialog = ({
  children,
  placement: _placement = PLACEMENT_DEFAULT,
  isAnimated = true,
  zIndex = 1000,
  appendToNode,
  ...menuProps
}: PropsWithChildren<IDialogProps>) => {
  const { isOpen, dialogRef, getDialogProps, getReferenceElement } = useDatePickerContext();

  const { placement, transform, isVisible, rtl } = useFloatingDialog({
    isOpen,
    dialogRef,
    getReferenceElement,
    placement: _placement,
    isAnimated
  });

  const Node = (
    <StyledMenuWrapper
      {...getDialogProps({ style: { transform } })}
      $isAnimated={!!isAnimated && (isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!isOpen || undefined}
      data-test-id="datepicker-menu"
      data-test-open={isOpen}
      data-test-rtl={rtl}
    >
      {!!(isOpen || isVisible) && <StyledMenu {...menuProps}>{children}</StyledMenu>}
    </StyledMenuWrapper>
  );

  return appendToNode ? createPortal(Node, appendToNode) : Node;
};

Dialog.displayName = 'DatePicker.Dialog';
