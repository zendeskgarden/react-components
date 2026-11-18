/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';

import { SegmentedControlContext } from '../../context/segmented-control/SegmentedControlContext';

/**
 * Retrieve SegmentedControl component context. A segment cannot work without
 * its group, so outside production a missing group throws.
 */
export const useSegmentedControlContext = () => {
  const context = useContext(SegmentedControlContext);

  if (process.env.NODE_ENV !== 'production' && context === undefined) {
    throw new Error(
      'Error: <SegmentedControl.Segment> must be rendered inside a <SegmentedControl>.'
    );
  }

  return context!;
};
