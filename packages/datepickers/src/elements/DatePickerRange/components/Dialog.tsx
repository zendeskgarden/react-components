/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { PropsWithChildren, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useText } from '@zendeskgarden/react-theming';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import { IDatePickerRangeDialogProps, PLACEMENT } from '../../../types';
import { StyledMenu, StyledMenuWrapper } from '../../../styled';
import { useFloatingDialog } from '../../../utils/use-floating-dialog';

const PLACEMENT_DEFAULT = 'bottom-start';

/**
 * Anchors its floating position to `Start`'s input, falling back to
 * `End`'s input then the first rendered `Trigger` button.
 */
export const Dialog = ({
  children,
  placement: _placement = PLACEMENT_DEFAULT,
  isAnimated = true,
  zIndex = 1000,
  appendToNode,
  'aria-label': ariaLabelProp,
  ...menuProps
}: PropsWithChildren<IDatePickerRangeDialogProps>) => {
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
