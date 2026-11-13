/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { KEYS, getControlledValue, useId } from '@zendeskgarden/container-utilities';
import { useCallback, useRef, useState, type FocusEventHandler, type KeyboardEvent } from 'react';

import type { ISegmentedControlProps } from '../../types/elements';

export interface IUseSegmentedControlProps extends Pick<
  ISegmentedControlProps,
  'value' | 'defaultValue' | 'onChange' | 'onBlur' | 'onKeyDown'
> {
  /** Flips the horizontal arrow keys */
  isRtl?: boolean;
}

/* Maps a key to the direction focus moves through the segments (0 = ignore) */
const getNavigationStep = (key: string, isRtl?: boolean) => {
  switch (key) {
    case KEYS.RIGHT:
      return isRtl ? -1 : 1;
    case KEYS.LEFT:
      return isRtl ? 1 : -1;
    case KEYS.DOWN:
      return 1;
    case KEYS.UP:
      return -1;
    default:
      return 0;
  }
};

/**
 * Selection and keyboard navigation for a group of segments. These are
 * independent of the visual selection pill, which only observes the result.
 *
 * The segments are native radios that share a `name`, so the browser provides
 * the single Tab stop (the selected segment, else the first). Arrow keys are
 * handled here so they select as they move, wrap, and flip in RTL. The order of
 * segments is read from the DOM when a key is pressed, so segments can be any
 * children, in any wrapper.
 */
export const useSegmentedControl = ({
  value,
  defaultValue,
  onChange,
  onBlur,
  onKeyDown,
  isRtl
}: IUseSegmentedControlProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedValue = getControlledValue(value, internalValue);
  const name = useId();
  const segments = useRef(new Map<string, HTMLLabelElement>());
  /* Remembers a selection made with the keyboard so the pill can snap to it */
  const keyboardSelection = useRef<string | undefined>(undefined);
  const consumeKeyboardSelection = useCallback((selected: string) => {
    const isKeyboardSelection = keyboardSelection.current === selected;

    keyboardSelection.current = undefined;

    return isKeyboardSelection;
  }, []);

  const registerSegment = useCallback((segmentValue: string, element: HTMLLabelElement | null) => {
    const map = segments.current;

    if (element) {
      const existing = map.get(segmentValue);

      if (existing && existing !== element && existing.isConnected) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn(
            `Warning: more than one <SegmentedControl.Segment> has the value "${segmentValue}". Segment values must be unique.`
          );
        }
      }

      map.set(segmentValue, element);
    } else {
      map.delete(segmentValue);
    }
  }, []);

  const select = (nextValue: string, keyboard = false) => {
    keyboardSelection.current = keyboard ? nextValue : undefined;

    if (nextValue === selectedValue) {
      return;
    }

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
  };

  const handleBlur: FocusEventHandler<HTMLDivElement> = event => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      /* A keyboard selection the parent never applied must not outlive focus */
      keyboardSelection.current = undefined;
    }

    onBlur?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const step = getNavigationStep(event.key, isRtl);

    if (!step) {
      return;
    }

    const inputs = Array.from(
      event.currentTarget.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    );
    const index = inputs.indexOf(event.target as HTMLInputElement);

    /* Ignore keys from anything that is not one of this group's radios */
    if (index === -1) {
      return;
    }

    event.preventDefault();

    /* Wrap around at either end */
    const next = inputs[(index + step + inputs.length) % inputs.length]!;

    next.focus();
    select(next.value, true);
  };

  return {
    selectedValue,
    name,
    segments,
    registerSegment,
    select,
    consumeKeyboardSelection,
    handleBlur,
    handleKeyDown
  };
};
