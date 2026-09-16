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
  appendToNode?: Element | DocumentFragment;
  placement?: GardenPlacement;
  isAnimated?: boolean;
  zIndex?: number;
}

const PLACEMENT_DEFAULT = 'bottom-start';

/** Already labelled via `aria-labelledby` (see `getDialogProps`), unlike `DatePickerRange.Dialog`. */
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
