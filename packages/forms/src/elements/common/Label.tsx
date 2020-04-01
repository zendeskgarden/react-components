/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import useFieldContext from '../../utils/useFieldContext';
import useInputContext from '../../utils/useInputContext';
import {
  StyledLabel,
  StyledCheckLabel,
  StyledCheckSvg,
  StyledDashSvg,
  StyledRadioLabel,
  StyledRadioSvg,
  StyledToggleLabel,
  StyledToggleSvg
} from '../../styled';

export interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  /** Style using regular (non-bold) font weight */
  isRegular?: boolean;
}

/**
 * Must be rendered within a `<Field>` element; accepts all `<label>` attributes
 * and events.
 */
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>((props, ref) => {
  const fieldContext = useFieldContext();
  const type = useInputContext();

  let combinedProps = props;

  if (fieldContext) {
    combinedProps = fieldContext.getLabelProps(combinedProps);
  }

  if (type === 'radio') {
    return (
      <StyledRadioLabel ref={ref} {...(combinedProps as any)}>
        <StyledRadioSvg />
        {props.children}
      </StyledRadioLabel>
    );
  } else if (type === 'checkbox') {
    return (
      <StyledCheckLabel ref={ref} {...(combinedProps as any)}>
        <StyledCheckSvg />
        <StyledDashSvg />
        {props.children}
      </StyledCheckLabel>
    );
  } else if (type === 'toggle') {
    return (
      <StyledToggleLabel ref={ref} {...(combinedProps as any)}>
        <StyledToggleSvg />
        {props.children}
      </StyledToggleLabel>
    );
  }

  return <StyledLabel ref={ref} {...(combinedProps as any)} />;
});

Label.displayName = 'Label';

Label.propTypes = {
  isRegular: PropTypes.bool
};
