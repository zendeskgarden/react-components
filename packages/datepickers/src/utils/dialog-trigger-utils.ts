/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { RefObject } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { ElementProps } from '../types';

/** Focuses the selected date, else today, else the first day cell - in that priority order. */
export const focusIntoDialog = (dialogEl: HTMLElement | null): void => {
  if (!dialogEl) {
    return;
  }

  const target =
    dialogEl.querySelector<HTMLElement>('[role="gridcell"][aria-selected="true"]') ||
    dialogEl.querySelector<HTMLElement>('[aria-current="date"]') ||
    dialogEl.querySelector<HTMLElement>('[role="gridcell"][tabindex]');

  target?.focus();
};

export const isInsideWidget = (
  target: Node,
  widgetRefs: RefObject<HTMLElement | null>[]
): boolean => widgetRefs.some(ref => !!ref.current?.contains(target));

/**
 * Settle and close when focus leaves the widget entirely, otherwise do nothing (e.g. moving
 * between two fields, from the dialog back to a field, or into a `ClearableInput`'s own clear
 * button).
 */
export const resolveWidgetBlur = ({
  relatedTarget,
  widgetRefs
}: {
  relatedTarget: Node | null;
  widgetRefs: RefObject<HTMLElement | null>[];
}): { shouldSettle: boolean; shouldClose: boolean } =>
  !relatedTarget || !isInsideWidget(relatedTarget, widgetRefs)
    ? { shouldSettle: true, shouldClose: true }
    : { shouldSettle: false, shouldClose: false };

/**
 * For a click on a field's group, not the field itself: true only when the click arrives from
 * outside the widget, so a click on a button inside the group (e.g. a `ClearableInput`'s clear
 * button) bubbling up to it doesn't open the dialog.
 */
export const shouldOpenOnGroupClick = ({
  isOpen,
  previousActiveElement,
  widgetRefs
}: {
  isOpen: boolean;
  previousActiveElement: Element | null;
  widgetRefs: RefObject<HTMLElement | null>[];
}): boolean =>
  !isOpen && (!previousActiveElement || !isInsideWidget(previousActiveElement, widgetRefs));

/** Shared shape for every toolbar paddle getter across both `useDatePicker` and `useDatePickerRange`. */
export const composeActionButtonProps = (
  action: () => void,
  props: ElementProps<HTMLButtonElement> & { type?: 'button' | 'submit' | 'reset' } = {}
): ElementProps<HTMLButtonElement> & { type: 'button' | 'submit' | 'reset' } => {
  const { onClick, type, ...other } = props;

  return {
    type: type ?? 'button',
    onClick: composeEventHandlers(onClick, action),
    ...other
  };
};
