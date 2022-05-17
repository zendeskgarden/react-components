/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect } from 'react';
import { Hint as FormHint } from '@zendeskgarden/react-forms';

import useDropdownContext from '../../utils/useDropdownContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Hint = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { setHint } = useDropdownContext();

    useEffect(() => {
      setHint(true);

      return () => setHint(false);
    }, [setHint]);

    return <FormHint ref={ref} {...props} />;
  }
);

Hint.displayName = 'Hint';
