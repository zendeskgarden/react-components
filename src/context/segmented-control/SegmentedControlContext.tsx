/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createContext } from 'react';

import type { ISegmentedControlProps } from '../../types/elements';

export interface ISegmentedControlContext extends Pick<ISegmentedControlProps, 'isCompact'> {
  /** Groups the native radios so the browser provides a single Tab stop */
  name: string;
  selectedValue: string | undefined;
  /** `true` once the selection pill is measured and positioned under the selected segment */
  hasPill: boolean;
  onSelect: (value: string) => void;
  /** Tells the group where a segment's label element is, so the pill can measure it */
  registerSegment: (value: string, element: HTMLLabelElement | null) => void;
}

export const SegmentedControlContext = createContext<ISegmentedControlContext | undefined>(
  undefined
);

export const SegmentedControlProvider = SegmentedControlContext.Provider;
