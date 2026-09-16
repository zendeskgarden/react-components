/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, PropsWithChildren, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useText } from '@zendeskgarden/react-theming';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { GardenPlacement, PLACEMENT } from '../../../types';
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
 * Wraps `DatePickerRange.Calendar` in a non-modal `role="dialog"` that
 * opens/closes via a consumer-composed `DatePickerRange.Trigger` and/or
 * `Start`/`End`, which automatically wire themselves to it once it's
 * rendered. Styled and floated the same way `DatePicker`'s
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
  'aria-label': ariaLabelProp,
  ...menuProps
}: PropsWithChildren<IDialogProps>) => {
  const { isOpen, dialogRef, getDialogProps, getReferenceElement, registerDialog } =
    useDatePickerContext();
  const ariaLabel = useText(Dialog, { 'aria-label': ariaLabelProp }, 'aria-label', 'Choose dates');

  useEffect(() => registerDialog(), [registerDialog]);

  const { placement, transform, isVisible, rtl } = useFloatingDialog({
    isOpen,
    dialogRef,
    getReferenceElement,
    placement: _placement,
    isAnimated
  });

  const Node = (
    <StyledMenuWrapper
      {...getDialogProps({ 'aria-label': ariaLabel!, style: { transform } })}
      $isAnimated={!!isAnimated && (isOpen || isVisible)}
      $placement={placement}
      $zIndex={zIndex}
      aria-hidden={!isOpen || undefined}
      data-test-id="range-dialog"
      data-test-open={isOpen}
      data-test-rtl={rtl}
    >
      {!!(isOpen || isVisible) && <StyledMenu {...menuProps}>{children}</StyledMenu>}
    </StyledMenuWrapper>
  );

  return appendToNode ? createPortal(Node, appendToNode) : Node;
};

Dialog.displayName = 'DatePickerRange.Dialog';

Dialog.propTypes = {
  appendToNode: PropTypes.any,
  placement: PropTypes.oneOf(PLACEMENT),
  isAnimated: PropTypes.bool,
  zIndex: PropTypes.number
};
