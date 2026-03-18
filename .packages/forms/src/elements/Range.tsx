/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import React, { useState, useEffect, useCallback, useRef, ChangeEvent } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { StyledRangeInput } from '../styled';
import { IRangeProps } from '../types';
import useFieldContext from '../utils/useFieldContext';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Range = React.forwardRef<HTMLInputElement, IRangeProps>(
  ({ hasLowerTrack = true, min = 0, max = 100, step = 1, ...other }, ref) => {
    const [backgroundSize, setBackgroundSize] = useState('0');
    const rangeRef = useRef<HTMLInputElement>();
    const fieldContext = useFieldContext();

    const updateBackgroundWidthFromInput = useCallback(
      (rangeTarget: HTMLInputElement) => {
        let relativeMax = max as number;
        const { value } = rangeTarget;

        if (parseFloat(relativeMax as any) < parseFloat(min as string)) {
          relativeMax = 100;
        }

        const percentage =
          (100 * ((value as unknown as number) - (min as number))) /
          (relativeMax - (min as number));

        setBackgroundSize(`${percentage}%`);
      },
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
      [max, min, step]
    );

    useEffect(() => {
      updateBackgroundWidthFromInput(rangeRef.current!);
    }, [rangeRef, updateBackgroundWidthFromInput, other.value]);

    const onChange = hasLowerTrack
      ? composeEventHandlers(other.onChange, (event: ChangeEvent<HTMLInputElement>) => {
          updateBackgroundWidthFromInput(event.target);
        })
      : other.onChange;

    let combinedProps = {
      $backgroundSize: backgroundSize,
      $hasLowerTrack: hasLowerTrack,
      max,
      min,
      ref: mergeRefs([rangeRef, ref]),
      step,
      ...other,
      onChange
    } as any;

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps);
    }

    return <StyledRangeInput {...combinedProps} />;
  }
);

Range.displayName = 'Range';
