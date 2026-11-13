/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';

import { SegmentedControlProvider } from '../../context/segmented-control/SegmentedControlContext';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import type { ISegmentedControlProps } from '../../types/elements';
import { useSegmentedControl } from '../../utils/segmented-control/useSegmentedControl';
import { useSelectionPill } from '../../utils/segmented-control/useSelectionPill';
import { StyledPill } from '../../views/segmented-control/StyledPill';
import { StyledSegmentedControl } from '../../views/segmented-control/StyledSegmentedControl';
import { COMPONENT_IDS } from '../utils';
import { Segment } from './Segment';

const SegmentedControlComponent = forwardRef<HTMLDivElement, ISegmentedControlProps>(
  ({ children, value, defaultValue, onChange, isCompact, isFullWidth, ...other }, ref) => {
    const theme = useGardenTheme();
    const {
      selectedValue,
      name,
      segments,
      registerSegment,
      select,
      consumeKeyboardSelection,
      handleBlur,
      handleKeyDown
    } = useSegmentedControl({
      value,
      defaultValue,
      onChange,
      onBlur: other.onBlur,
      onKeyDown: other.onKeyDown,
      isRtl: theme.rtl
    });
    /* Only layout props and direction change where segments sit, never values */
    const layoutKey = JSON.stringify([isCompact, isFullWidth, theme.rtl]);
    const { pillRef, isReady } = useSelectionPill(
      selectedValue,
      layoutKey,
      segments,
      consumeKeyboardSelection
    );

    const { 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy } = other;

    useEffect(() => {
      /* A radio group with no name is announced as an unlabeled group */
      if (process.env.NODE_ENV === 'development' && !ariaLabel && !ariaLabelledBy) {
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: <SegmentedControl> needs an accessible name. Provide `aria-label` or `aria-labelledby`.'
        );
      }
    }, [ariaLabel, ariaLabelledBy]);

    return (
      <SegmentedControlProvider
        value={{
          name,
          selectedValue,
          isCompact,
          hasPill: isReady,
          onSelect: select,
          registerSegment
        }}
      >
        <StyledSegmentedControl
          {...other}
          $isFullWidth={isFullWidth}
          ref={ref}
          role="radiogroup"
          tabIndex={undefined}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          data-garden-id={COMPONENT_IDS['segmented_controls.segmented_control']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledPill
            $isReady={isReady}
            ref={pillRef}
            aria-hidden="true"
            data-garden-id={COMPONENT_IDS['segmented_controls.pill']}
            data-garden-version={PACKAGE_VERSION}
          />
          {children}
        </StyledSegmentedControl>
      </SegmentedControlProvider>
    );
  }
);

SegmentedControlComponent.displayName = 'SegmentedControl';

SegmentedControlComponent.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  isCompact: PropTypes.bool,
  isFullWidth: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const SegmentedControl = SegmentedControlComponent as typeof SegmentedControlComponent & {
  Segment: typeof Segment;
};

SegmentedControl.Segment = Segment;
