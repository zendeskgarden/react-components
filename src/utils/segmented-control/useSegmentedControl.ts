/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { KEYS, getControlledValue, useId } from '@zendeskgarden/container-utilities';
import {
  useCallback,
  useRef,
  useState,
  type ComponentPropsWithRef,
  type FocusEventHandler,
  type KeyboardEvent
} from 'react';

import type { ISegmentedControlProps } from '../../types/elements';

export interface IUseSegmentedControlProps extends Pick<
  ISegmentedControlProps,
  'options' | 'value' | 'defaultValue' | 'onChange' | 'onBlur'
> {
  /** Flips the horizontal arrow keys */
  isRtl?: boolean;
}

/* Maps a key to the direction focus moves through the options (0 = ignore) */
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
 * Selection, roving focus, and pointer gestures. These are independent of the
 * visual selection pill, which only observes the result.
 */
export const useSegmentedControl = ({
  options,
  value,
  defaultValue,
  onChange,
  onBlur,
  isRtl
}: IUseSegmentedControlProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const selectedValue = getControlledValue(value, internalValue);
  const uniqueOptions = options.filter(
    (option, index) => options.findIndex(item => item.value === option.value) === index
  );
  const hasSelection = uniqueOptions.some(option => option.value === selectedValue);
  const name = useId();
  const inputs = useRef(new Map<string, HTMLInputElement>());
  const segments = useRef(new Map<string, HTMLLabelElement>());
  /* Remembers a selection made with the keyboard so the pill can snap to it */
  const keyboardSelection = useRef<string | undefined>(undefined);
  const consumeKeyboardSelection = useCallback((selected: string) => {
    const isKeyboardSelection = keyboardSelection.current === selected;

    keyboardSelection.current = undefined;

    return isKeyboardSelection;
  }, []);
  const [focusedValue, setFocusedValue] = useState<string>();
  const focusedOption = uniqueOptions.find(option => option.value === focusedValue);
  /* The single Tab stop: focused option, else selected option, else the first */
  const entryValue =
    focusedOption?.value ?? (hasSelection ? selectedValue : uniqueOptions[0]?.value);
  const gesture = useRef<{ value: string; cancelled: boolean; released: boolean } | undefined>(
    undefined
  );
  const [pressedValue, setPressedValue] = useState<string>();
  const cancelPress = (optionValue: string) => {
    if (gesture.current?.value === optionValue && !gesture.current.released) {
      gesture.current.cancelled = true;
      setPressedValue(undefined);
    }
  };

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
      setFocusedValue(undefined);
      /* A keyboard selection the parent never applied must not outlive focus */
      keyboardSelection.current = undefined;
    }

    onBlur?.(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const step = getNavigationStep(event.key, isRtl);

    if (!step) {
      return;
    }

    event.preventDefault();

    /* Wrap around at either end. The index is valid; the event came from a rendered option. */
    const next = uniqueOptions[(index + step + uniqueOptions.length) % uniqueOptions.length]!;

    inputs.current.get(next.value)?.focus();
    select(next.value, true);
  };

  const getSegmentProps = (optionValue: string, index: number): ComponentPropsWithRef<'input'> => ({
    type: 'radio',
    name,
    value: optionValue,
    checked: optionValue === selectedValue,
    tabIndex: optionValue === entryValue ? 0 : -1,
    ref: element => {
      if (element) {
        inputs.current.set(optionValue, element);
      } else {
        inputs.current.delete(optionValue);
      }
    },
    onFocus: () => setFocusedValue(optionValue),
    onKeyDown: event => handleKeyDown(event, index),
    onPointerDown: event => {
      if (event.button !== 0 || !event.isPrimary) {
        return;
      }

      gesture.current = { value: optionValue, cancelled: false, released: false };
      setPressedValue(optionValue);
    },
    onPointerUp: () => {
      if (gesture.current?.value === optionValue) {
        gesture.current.released = true;
      }

      setPressedValue(undefined);
    },
    onPointerLeave: () => cancelPress(optionValue),
    onPointerCancel: () => cancelPress(optionValue),
    onLostPointerCapture: () => cancelPress(optionValue),
    onClick: event => {
      const cancelled = gesture.current?.cancelled;

      gesture.current = undefined;
      setPressedValue(undefined);

      /* A pointer click (detail > 0) after a cancelled press must not select */
      if (event.detail !== 0 && cancelled) {
        event.preventDefault();
      }
    },
    onChange: event => {
      if (!event.nativeEvent.defaultPrevented) {
        select(optionValue);
      }
    }
  });

  return {
    uniqueOptions,
    selectedValue,
    pressedValue,
    hasSelection,
    segments,
    consumeKeyboardSelection,
    handleBlur,
    getSegmentProps
  };
};
