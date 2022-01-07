/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  InputHTMLAttributes,
  ChangeEvent
} from 'react';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import mergeRefs from 'react-merge-refs';
import useFieldContext from '../utils/useFieldContext';
import { StyledRangeInput } from '../styled';

export interface IRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  /** @ignore */
  hasLowerTrack?: boolean;
}

/**
 * @extends InputHTMLAttributes<HTMLInputElement>
 */
export const Range = React.forwardRef<HTMLInputElement, IRangeProps>(
  ({ hasLowerTrack, min, max, step, ...props }, ref) => {
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
    }, [rangeRef, updateBackgroundWidthFromInput, props.value]);

    const onChange = hasLowerTrack
      ? composeEventHandlers(props.onChange, (event: ChangeEvent<HTMLInputElement>) => {
          updateBackgroundWidthFromInput(event.target);
        })
      : props.onChange;

    let combinedProps = {
      ref: mergeRefs([rangeRef, ref]),
      hasLowerTrack,
      min,
      max,
      step,
      backgroundSize,
      ...props,
      onChange
    };

    if (fieldContext) {
      combinedProps = fieldContext.getInputProps(combinedProps, { isDescribed: true });
    }

    return <StyledRangeInput {...(combinedProps as any)} />;
  }
);

Range.defaultProps = {
  hasLowerTrack: true,
  min: 0,
  max: 100,
  step: 1
};

Range.displayName = 'Range';
