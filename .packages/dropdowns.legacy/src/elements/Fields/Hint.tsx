/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Hint as FormHint } from '@zendeskgarden/react-forms';
import React, { HTMLAttributes } from 'react';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Hint = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <FormHint ref={ref} {...props} />
);

Hint.displayName = 'Hint';
