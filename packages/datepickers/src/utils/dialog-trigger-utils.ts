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
    dialogEl.querySelector<HTMLElement>('[data-test-selected="true"]') ||
    dialogEl.querySelector<HTMLElement>('[data-test-today="true"]') ||
    dialogEl.querySelector<HTMLElement>('[data-test-id="day"]');

  target?.focus();
};

export const isInsideWidget = (
  target: Node,
  widgetRefs: RefObject<HTMLElement | null>[]
): boolean => widgetRefs.some(ref => !!ref.current?.contains(target));

/**
 * Per the APG dialog pattern: settle and close when focus leaves the widget
 * entirely, just close (no settle) when it returns to a trigger field from
 * elsewhere in the widget, otherwise do nothing (e.g. moving between two
 * fields, or into a `ClearableInput`'s own clear button).
 */
export const resolveWidgetBlur = ({
  target,
  relatedTarget,
  fieldRefs,
  widgetRefs
}: {
  target: Node;
  relatedTarget: Node | null;
  fieldRefs: RefObject<HTMLElement | null>[];
  widgetRefs: RefObject<HTMLElement | null>[];
}): { shouldSettle: boolean; shouldClose: boolean } => {
  const isBlurringFromField = fieldRefs.some(ref => ref.current === target);
  const isReturningToField =
    !isBlurringFromField && !!relatedTarget && fieldRefs.some(ref => ref.current === relatedTarget);

  if (isReturningToField) {
    return { shouldSettle: false, shouldClose: true };
  }

  if (!relatedTarget || !isInsideWidget(relatedTarget, widgetRefs)) {
    return { shouldSettle: true, shouldClose: true };
  }

  return { shouldSettle: false, shouldClose: false };
};

/** True only for a pointer click arriving from outside the widget - never for Tab focus, which dispatches no `click`. */
export const shouldOpenOnFieldClick = ({
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
