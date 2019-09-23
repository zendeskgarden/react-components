/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers, useCombinedRefs } from '@zendeskgarden/container-utilities';
import useFieldContext from '../utils/useFieldContext';
import { StyledRangeSingleThumb } from '../styled';

/**
 * Accepts all `<input [type="range"]>` props.
 * Must be rendered within a `<Field>` component.
 */
const Range = React.forwardRef(({ min, max, step, ...otherProps }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState(0);
  const rangeRef = useCombinedRefs(ref);
  const { getInputProps } = useFieldContext();

  const updateBackgroundWidthFromInput = useCallback(
    rangeTarget => {
      let relativeMax = max;
      const { value } = rangeTarget;

      if (parseFloat(relativeMax) < parseFloat(min)) {
        relativeMax = 100;
      }

      const percentage = (100 * (value - min)) / (relativeMax - min);

      setBackgroundSize(`${percentage}%`);
    },
    [max, min]
  );

  useEffect(() => {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput]);

  return (
    <StyledRangeSingleThumb
      {...getInputProps(
        {
          'data-garden-id': 'forms.range_single_thumb',
          'data-garden-version': PACKAGE_VERSION,
          ref: rangeRef,
          min,
          max,
          step,
          backgroundSize,
          focused: isFocused,
          ...otherProps,
          onFocus: composeEventHandlers(otherProps.onFocus, () => {
            setIsFocused(true);
          }),
          onBlur: composeEventHandlers(otherProps.onBlur, () => {
            setIsFocused(false);
          }),
          onChange: composeEventHandlers(otherProps.onChange, event => {
            updateBackgroundWidthFromInput(event.target);
          })
        },
        { isDescribed: true }
      )}
    />
  );
});

Range.propTypes = {
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Range;
