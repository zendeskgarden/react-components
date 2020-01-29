/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import { StyledHint, StyledCheckHint, StyledRadioHint, StyledToggleHint } from '../../styled';

/**
 * Must be rendered within a `<Field>` element; accepts all `<div>` attributes
 * and events.
 */
export const Hint = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { getHintProps } = useFieldContext();
    const type = useInputContext();

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

    return <HintComponent ref={ref} {...(getHintProps(props) as any)} />;
  }
);
