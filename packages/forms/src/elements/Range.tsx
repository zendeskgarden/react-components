/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useCallback, InputHTMLAttributes, ChangeEvent } from 'react';
import { composeEventHandlers, useCombinedRefs } from '@zendeskgarden/container-utilities';
import useFieldContext from '../utils/useFieldContext';
import { StyledRangeInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="range">` attributes and events.
 */
export const Range = React.forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ min, max, step, ...props }, ref) => {
    const [backgroundSize, setBackgroundSize] = useState('0');
    const rangeRef = useCombinedRefs(ref);
    const fieldContext = useFieldContext();

    const updateBackgroundWidthFromInput = useCallback(
      (rangeTarget: HTMLInputElement) => {
        let relativeMax = max as number;
        const { value } = rangeTarget;

        if (parseFloat(relativeMax as any) < parseFloat(min as string)) {
          relativeMax = 100;
        }

        const percentage =
          (100 * (((value as unknown) as number) - (min as number))) /
          (relativeMax - (min as number));

        setBackgroundSize(`${percentage}%`);
      },
      /* eslint-disable-next-line react-hooks/exhaustive-deps */
      [max, min, step]
    );

    useEffect(() => {
      updateBackgroundWidthFromInput(rangeRef.current!);
    }, [rangeRef, updateBackgroundWidthFromInput]);

    let combinedProps = {
      ref: rangeRef,
      min,
      max,
      step,
      backgroundSize,
      ...props,
      onChange: composeEventHandlers(props.onChange, (event: ChangeEvent<HTMLInputElement>) => {
        updateBackgroundWidthFromInput(event.target);
      })
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
    }

    return <StyledRangeInput {...(combinedProps as any)} />;
  }
);

Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};
