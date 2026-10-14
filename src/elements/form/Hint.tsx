/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { HTMLAttributes, useEffect, forwardRef } from 'react';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useInputContext } from '../../hooks/form/useInputContext';
import { StyledCheckHint } from '../../views/form/StyledCheckHint';
import { StyledHint } from '../../views/form/StyledHint';
import { StyledRadioHint } from '../../views/form/StyledRadioHint';
import { StyledToggleHint } from '../../views/form/StyledToggleHint';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Field.Hint` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Hint = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { hasHint, setHasHint, getHintProps } = useFieldContext() || {};
  const type = useInputContext();

  useEffect(() => {
    if (!hasHint && setHasHint) {
      setHasHint(true);
    }

    return () => {
      if (hasHint && setHasHint) {
        setHasHint(false);
      }
    };
  }, [hasHint, setHasHint]);

  let HintComponent;
  let id;

  if (type === 'checkbox') {
    HintComponent = StyledCheckHint;
    id = COMPONENT_IDS['forms.checkbox_hint'];
  } else if (type === 'radio') {
    HintComponent = StyledRadioHint;
    id = COMPONENT_IDS['forms.radio_hint'];
  } else if (type === 'toggle') {
    HintComponent = StyledToggleHint;
    id = COMPONENT_IDS['forms.toggle_hint'];
  } else {
    HintComponent = StyledHint;
    id = COMPONENT_IDS['forms.input_hint'];
  }

  let combinedProps = props;

  if (getHintProps) {
    combinedProps = getHintProps(combinedProps);
  }

  return (
    <HintComponent
      ref={ref}
      {...(combinedProps as any)}
      data-garden-id={id}
      data-garden-version={PACKAGE_VERSION}
    />
  );
});

Hint.displayName = 'Field.Hint';
