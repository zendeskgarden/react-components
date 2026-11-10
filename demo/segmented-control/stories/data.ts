/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { ISegmentedControlOption } from '../../../src/index';

export const OPTIONS: ISegmentedControlOption[] = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' }
];

/* Uneven label widths exercise the pill resizing as it moves */
export const LONG_OPTIONS: ISegmentedControlOption[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'history', label: 'Conversation history' },
  { value: 'customer', label: 'Customer' },
  { value: 'fields', label: 'Ticket fields' },
  { value: 'activity', label: 'Activity log and audit trail' }
];
