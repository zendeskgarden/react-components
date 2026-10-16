/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import { useState, useEffect, useCallback, useRef, ChangeEvent, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { IRangeProps } from '../../types/elements';
import { StyledRangeInput } from '../../views/form/StyledRangeInput';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Range = forwardRef<HTMLInputElement, IRangeProps>(
  ({ hasLowerTrack = true, min = 0, max = 100, step = 1, ...other }, ref) => {
    const [backgroundSize, setBackgroundSize] = useState('0');
    const rangeRef = useRef<HTMLInputElement>(undefined);
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

    return (
      <StyledRangeInput
        {...combinedProps}
        data-garden-id={COMPONENT_IDS['forms.range']}
        data-garden-version={PACKAGE_VERSION}
        style={{
          ...combinedProps.style,
          backgroundSize: hasLowerTrack ? backgroundSize : combinedProps.style?.backgroundSize
        }}
        type="range"
      />
    );
  }
);

Range.displayName = 'Range';
