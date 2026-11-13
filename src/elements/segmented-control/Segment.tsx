/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useSegmentedControlContext } from '../../hooks/segmented-control/useSegmentedControlContext';
import type { ISegmentedControlSegmentProps } from '../../types/elements';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledSegment } from '../../views/segmented-control/StyledSegment';
import { StyledSegmentInput } from '../../views/segmented-control/StyledSegmentInput';
import { StyledSegmentLabel } from '../../views/segmented-control/StyledSegmentLabel';
import { COMPONENT_IDS } from '../utils';

const SegmentComponent = forwardRef<HTMLLabelElement, ISegmentedControlSegmentProps>(
  ({ children, value, ...other }, ref) => {
    const { name, selectedValue, isCompact, hasPill, onSelect, registerSegment } =
      useSegmentedControlContext();
    const isSelected = value === selectedValue;

    return (
      <StyledSegmentLabel
        {...other}
        ref={mergeRefs<HTMLLabelElement>([ref, element => registerSegment(value, element)])}
        data-garden-id={COMPONENT_IDS['segmented_controls.segment_label']}
        data-garden-version={PACKAGE_VERSION}
      >
        {/* The input must precede the segment; sibling selectors style it */}
        <StyledSegmentInput
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          onChange={() => onSelect(value)}
          data-garden-id={COMPONENT_IDS['segmented_controls.segment_input']}
          data-garden-version={PACKAGE_VERSION}
        />
        <StyledSegment
          $hasPill={hasPill}
          $isCompact={isCompact}
          $isSelected={isSelected}
          data-garden-id={COMPONENT_IDS['segmented_controls.segment']}
          data-garden-version={PACKAGE_VERSION}
        >
          {children}
        </StyledSegment>
      </StyledSegmentLabel>
    );
  }
);

SegmentComponent.displayName = 'SegmentedControl.Segment';

SegmentComponent.propTypes = {
  value: PropTypes.string.isRequired
};

/**
 * @extends HTMLAttributes<HTMLLabelElement>
 */
export const Segment = SegmentComponent;
