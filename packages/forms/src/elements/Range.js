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
import { StyledRangeInput } from '../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all
 * `<input type="range">` attributes and events.
 */
const Range = React.forwardRef(({ min, max, step, ...props }, ref) => {
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    [max, min, step]
  );

  useEffect(() => {
    updateBackgroundWidthFromInput(rangeRef.current);
  }, [rangeRef, updateBackgroundWidthFromInput]);

  return (
    <StyledRangeInput
      {...getInputProps(
        {
          ref: rangeRef,
          min,
          max,
          step,
          backgroundSize,
          ...props,
          onChange: composeEventHandlers(props.onChange, event => {
            updateBackgroundWidthFromInput(event.target);
          })
        },
        { isDescribed: true }
      )}
    />
  );
});

Range.propTypes = {
  /** @ignore */
  min: PropTypes.number,
  /** @ignore */
  max: PropTypes.number,
  /** @ignore */
  step: PropTypes.number,
  /** @ignore */
  onChange: PropTypes.func
};

Range.defaultProps = {
  min: 0,
  max: 100,
  step: 1
};

export default Range;
