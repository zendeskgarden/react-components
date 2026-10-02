/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren } from 'react';
import { useText } from '@zendeskgarden/react-theming';
import { createPortal } from 'react-dom';
import useDatePickerContext from '../utils/useDatePickerContext';
import { IDatePickerDialogProps } from '../../../types';
import { StyledMenu, StyledMenuWrapper } from '../../../styled';
import { useFloatingDialog } from '../../../utils/use-floating-dialog';
import { DEFAULT_TOGGLE_CALENDAR_LABEL } from '../../../components/CalendarButton';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * Labelled via `aria-labelledby` by its trigger button (see `getDialogProps`) - or, without
 * one, by `toggleCalendarLabel` directly.
 */
export const Dialog = ({
  children,
  placement: _placement = PLACEMENT_DEFAULT,
  isAnimated = true,
  zIndex = 1000,
  appendToNode,
  isCompact,
  hasTrigger = true,
  toggleCalendarLabel,
  ...menuProps
}: PropsWithChildren<IDatePickerDialogProps>) => {
  const { isOpen, dialogRef, getDialogProps, getReferenceElement } = useDatePickerContext();
  const ariaLabel = useText(
    Dialog,
    { toggleCalendarLabel },
    'toggleCalendarLabel',
    DEFAULT_TOGGLE_CALENDAR_LABEL,
    !hasTrigger
  );

  const { placement, transform, isVisible, rtl } = useFloatingDialog({
    isOpen,
    dialogRef,
    getReferenceElement,
    placement: _placement,
    isAnimated,
    isCompact
  });

  const Node = (
    <StyledMenuWrapper
      {...getDialogProps({ 'aria-label': ariaLabel, style: { transform } })}
      $isAnimated={!!isAnimated && (isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!isOpen || undefined}
      inert={isOpen ? undefined : ''}
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
