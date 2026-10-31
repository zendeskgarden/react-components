/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  PropsWithChildren,
  HTMLAttributes,
  Ref,
  RefObject,
  cloneElement,
  useEffect
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import { ClearableInput } from '@zendeskgarden/react-forms';
import useDatePickerContext from '../utils/useDatePickerRangeContext';
import useDatePickerRangeFieldContext from '../utils/useDatePickerRangeFieldContext';
import { NESTED_GROUP_PROPS } from '../../../utils/nested-group-utils';

type IEndProps = HTMLAttributes<HTMLInputElement> & {
  /**
   * The element bounding this field - its input plus any extra focusable elements, like a
   * clear button - so focus moving between them isn't treated as leaving the field. Only
   * needed when the child isn't a `ClearableInput` itself and the field isn't inside a
   * `EndGroup`, e.g. for a custom component that wraps `ClearableInput`.
   */
  wrapperRef?: RefObject<HTMLElement | null>;
};

/**
 * Renders no wrapper of its own, so the child composes as a true, direct
 * child of whatever the consumer wraps it in (e.g. `InputGroup`). Only a
 * `ClearableInput` child also receives its own `wrapperRef`/`wrapperProps`
 * (see `getEndWrapperProps`), so blur detection spans its clear button - any other
 * child (e.g. `Input`, `MediaInput`) would pass them on to its DOM input.
 */
export const End = ({ children, wrapperRef }: PropsWithChildren<IEndProps>) => {
  const {
    hasDialog,
    registerFieldState,
    registerFieldWrapperRef,
    getEndInputProps,
    getEndWrapperProps,
    getFieldTriggerProps
  } = useDatePickerContext();

  const childElement = React.Children.only(
    children as React.ReactElement & React.RefAttributes<HTMLInputElement>
  );
  const { disabled, readOnly, required } = childElement.props;

  useEffect(
    () =>
      registerFieldState('end', {
        disabled: !!disabled,
        readOnly: !!readOnly,
        required: !!required
      }),
    [registerFieldState, disabled, readOnly, required]
  );
  const isClearableInput = childElement.type === ClearableInput;
  const isInsideFieldGroup = useDatePickerRangeFieldContext() !== undefined;

  useEffect(
    () => (wrapperRef ? registerFieldWrapperRef('end', wrapperRef) : undefined),
    [registerFieldWrapperRef, wrapperRef]
  );

  let inputProps: Record<string, unknown> = getEndInputProps(childElement.props);

  inputProps = {
    ...inputProps,
    ref: mergeRefs([inputProps.ref as Ref<HTMLInputElement>, childElement.ref ?? null])
  };

  if (isClearableInput) {
    const consumerWrapperProps = childElement.props.wrapperProps ?? {};
    const groupProps = isInsideFieldGroup ? NESTED_GROUP_PROPS : {};

    if (wrapperRef) {
      inputProps = { ...inputProps, wrapperProps: { ...groupProps, ...consumerWrapperProps } };
    } else {
      // Composes the consumer's own wrapper handlers with this field's blur handling.
      const { ref: clearableWrapperRef, ...wrapperProps } =
        getEndWrapperProps(consumerWrapperProps);

      inputProps = {
        ...inputProps,
        wrapperRef: clearableWrapperRef,
        wrapperProps: { ...groupProps, ...wrapperProps }
      };
    }
  }

  if (hasDialog) {
    inputProps = getFieldTriggerProps(inputProps);
  }

  return cloneElement(childElement, inputProps);
};

End.displayName = 'DatePickerRange.End';
