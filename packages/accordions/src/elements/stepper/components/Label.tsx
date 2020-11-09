/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import CheckCircleStrokeIcon from '@zendeskgarden/svg-icons/src/16/check-sm-stroke.svg';
import { StyledLabel, StyledLabelText, StyledIcon, StyledIconFlexContainer } from '../../../styled';
import { useStepContext, useStepperContext } from '../../../utils';

interface ILabel {
  /** Replaces the stepper number with an icon */
  icon?: React.ReactNode;
  /** Determines if the label is displayed */
  isHidden?: boolean;
}

export const Label = forwardRef<HTMLDivElement, ILabel & HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { currentStepIndex } = useStepContext();
    const { activeIndex, isHorizontal } = useStepperContext();
    const numericStep = currentStepIndex + 1;
    const stepIcon = props.icon || numericStep;
    const isActive = activeIndex === currentStepIndex;
    const isCompleted = activeIndex > currentStepIndex;
    const styledIcon = (
      <StyledIcon isActive={isActive} isHorizontal={isHorizontal}>
        {isCompleted ? <CheckCircleStrokeIcon /> : stepIcon}
      </StyledIcon>
    );

    return (
      <StyledLabel ref={ref} isActive={isActive} isHorizontal={isHorizontal} {...props}>
        {isHorizontal ? (
          <StyledIconFlexContainer>{styledIcon}</StyledIconFlexContainer>
        ) : (
          styledIcon
        )}
        <StyledLabelText isHidden={props.isHidden} isHorizontal={isHorizontal}>
          {props.children}
        </StyledLabelText>
      </StyledLabel>
    );
  }
);

Label.displayName = 'Label';

Label.propTypes = {
  icon: PropTypes.node,
  isHidden: PropTypes.bool
};
