/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, Ref, RefObject } from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';

/**
 * `React.HTMLProps<T>` resolves to `AllHTMLAttributes<T>` - the union of
 * every attribute across every HTML element, regardless of `T` - which
 * collides with Garden's own strictly-typed props (e.g. Button's `size`)
 * when spread directly onto a styled component in JSX. This narrows to the
 * attributes actually common to any element, properly scoped by `T`, using
 * the modern `Ref<T>` (not `React.ClassAttributes`' legacy string ref).
 */
export type ElementProps<T extends Element> = HTMLAttributes<T> & { ref?: Ref<T> };

/**
 * Move focus onto the selected date, today, or the first day cell in a
 * calendar dialog's grid, in that priority order.
 */
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
 * Decides what a non-modal calendar dialog should do when focus leaves one
 * of its widget elements, per the APG dialog pattern: settle the typed
 * value and close when focus leaves the widget entirely, just close (no
 * settle) when it returns to one of the widget's own trigger fields, or do
 * nothing when it simply moves between other elements still inside the
 * widget (e.g. a `ClearableInput`'s clear button).
 */
export const resolveWidgetBlur = ({
  relatedTarget,
  fieldRefs,
  widgetRefs
}: {
  relatedTarget: Node | null;
  fieldRefs: RefObject<HTMLElement | null>[];
  widgetRefs: RefObject<HTMLElement | null>[];
}): { shouldSettle: boolean; shouldClose: boolean } => {
  const isReturningToField =
    !!relatedTarget && fieldRefs.some(ref => ref.current === relatedTarget);

  if (isReturningToField) {
    return { shouldSettle: false, shouldClose: true };
  }

  if (!relatedTarget || !isInsideWidget(relatedTarget, widgetRefs)) {
    return { shouldSettle: true, shouldClose: true };
  }

  return { shouldSettle: false, shouldClose: false };
};

/**
 * Opens on a pointer click (direct, or forwarded by a `<label>`) arriving
 * from outside the widget, leaving focus on the field rather than moving it
 * into the dialog (unlike a toggle button/Down Arrow, which both do). Never
 * true for keyboard-only (Tab) focus, since that never dispatches `click`.
 */
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

/**
 * Composes a plain action (e.g. shifting a calendar's preview window) onto
 * a `type="button"` prop-getter's output - shared shape for every toolbar
 * paddle getter across both `useDatePicker` and `useDatePickerRange`.
 */
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
