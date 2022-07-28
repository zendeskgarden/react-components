/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect } from 'react';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import { StyledHint, StyledCheckHint, StyledRadioHint, StyledToggleHint } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Hint = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const fieldContext = useFieldContext();
    const type = useInputContext();

    useEffect(() => {
      if (fieldContext && !fieldContext.hasHint) {
        fieldContext.setHasHint(true);
      }

      return () => {
        if (fieldContext && fieldContext.hasHint) {
          fieldContext.setHasHint(false);
        }
      };
    }, [fieldContext]);

    let HintComponent;

    if (type === 'checkbox') {
      HintComponent = StyledCheckHint;
    } else if (type === 'radio') {
      HintComponent = StyledRadioHint;
    } else if (type === 'toggle') {
      HintComponent = StyledToggleHint;
    } else {
      HintComponent = StyledHint;
    }

    let combinedProps = props;

    if (fieldContext) {
      combinedProps = fieldContext.getHintProps(combinedProps);
    }

    return <HintComponent ref={ref} {...(combinedProps as any)} />;
  }
);

Hint.displayName = 'Hint';
