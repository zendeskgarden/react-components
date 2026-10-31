/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Merged under a `ClearableInput` child's own `wrapperProps` when it sits inside a date picker
 * `InputGroup` (DatePicker's own, or a `StartGroup`/`EndGroup`) - that outer group already groups
 * the input with its buttons, under the same field label, so the `ClearableInput`'s inner
 * `InputGroup` shouldn't repeat it. A consumer's own `wrapperProps` still win.
 */
export const NESTED_GROUP_PROPS = { role: undefined, 'aria-labelledby': undefined };
