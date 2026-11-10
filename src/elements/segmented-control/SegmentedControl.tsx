/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { ISegmentedControlProps, SEGMENTED_CONTROL_SIZE } from '../../types/elements';
import { useSegmentedControl } from '../../utils/segmented-control/useSegmentedControl';
import { useSelectionPill } from '../../utils/segmented-control/useSelectionPill';
import { StyledPill } from '../../views/segmented-control/StyledPill';
import { StyledSegment } from '../../views/segmented-control/StyledSegment';
import { StyledSegmentedControl } from '../../views/segmented-control/StyledSegmentedControl';
import { StyledSegmentInput } from '../../views/segmented-control/StyledSegmentInput';
import { StyledSegmentLabel } from '../../views/segmented-control/StyledSegmentLabel';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SegmentedControl = forwardRef<HTMLDivElement, ISegmentedControlProps>(
  ({ options, value, defaultValue, onChange, size = 'medium', isFullWidth, ...other }, ref) => {
    const theme = useGardenTheme();
    const {
      uniqueOptions,
      selectedValue,
      pressedValue,
      hasSelection,
      segments,
      consumeKeyboardSelection,
      handleBlur,
      getSegmentProps
    } = useSegmentedControl({
      options,
      value,
      defaultValue,
      onChange,
      onBlur: other.onBlur,
      isRtl: theme.rtl
    });
    /* Only labels and layout props change where segments sit, never option values */
    const layoutKey = JSON.stringify([
      uniqueOptions.map(option => option.label),
      size,
      isFullWidth,
      theme.rtl
    ]);
    const { pillRef, isReady } = useSelectionPill(
      hasSelection ? selectedValue : undefined,
      layoutKey,
      segments,
      consumeKeyboardSelection
    );
    const hasPill = isReady && hasSelection;

    return (
      <StyledSegmentedControl
        {...other}
        $isFullWidth={isFullWidth}
        ref={ref}
        role="radiogroup"
        tabIndex={undefined}
        onBlur={handleBlur}
        data-garden-id={COMPONENT_IDS['segmented_controls.segmented_control']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledPill
          $isReady={hasPill}
          ref={pillRef}
          aria-hidden="true"
          data-garden-id={COMPONENT_IDS['segmented_controls.pill']}
          data-garden-version={PACKAGE_VERSION}
        />
        {uniqueOptions.map((option, index) => (
          <StyledSegmentLabel
            key={option.value}
            ref={element => {
              if (element) {
                segments.current.set(option.value, element);
              } else {
                segments.current.delete(option.value);
              }
            }}
            data-garden-id={COMPONENT_IDS['segmented_controls.segment_label']}
            data-garden-version={PACKAGE_VERSION}
          >
            {/* The input must precede the segment; sibling selectors style it */}
            <StyledSegmentInput
              {...getSegmentProps(option.value, index)}
              data-garden-id={COMPONENT_IDS['segmented_controls.segment_input']}
              data-garden-version={PACKAGE_VERSION}
            />
            <StyledSegment
              $hasPill={hasPill}
              $isPressed={option.value === pressedValue}
              $isSelected={option.value === selectedValue}
              $size={size}
              data-garden-id={COMPONENT_IDS['segmented_controls.segment']}
              data-garden-version={PACKAGE_VERSION}
            >
              {option.label}
            </StyledSegment>
          </StyledSegmentLabel>
        ))}
      </StyledSegmentedControl>
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';

SegmentedControl.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(SEGMENTED_CONTROL_SIZE),
  isFullWidth: PropTypes.bool
};
