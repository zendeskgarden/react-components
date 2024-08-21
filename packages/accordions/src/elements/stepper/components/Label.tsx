/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import CheckCircleStrokeIcon from '@zendeskgarden/svg-icons/src/16/check-sm-stroke.svg';
import { IStepperLabelProps } from '../../../types';
import { StyledLabel, StyledLabelText, StyledIcon, StyledIconFlexContainer } from '../../../styled';
import { useStepContext } from '../../../utils';

const LabelComponent = forwardRef<HTMLDivElement, IStepperLabelProps>(
  ({ icon, iconProps, isHidden, children, ...other }, ref) => {
    const { currentStepIndex, isActive, isCompleted, isHorizontal } = useStepContext();
    const numericStep = currentStepIndex + 1;
    const stepIcon = icon || numericStep;

    const styledIcon = (
      <StyledIcon $isActive={isActive} $isHorizontal={isHorizontal}>
        {isCompleted ? <CheckCircleStrokeIcon {...iconProps} /> : stepIcon}
      </StyledIcon>
    );

    return (
      <StyledLabel ref={ref} $isActive={isActive} $isHorizontal={isHorizontal} {...other}>
        {isHorizontal ? (
          <StyledIconFlexContainer>{styledIcon}</StyledIconFlexContainer>
        ) : (
          styledIcon
        )}
        <StyledLabelText $isHidden={isHidden} $isHorizontal={isHorizontal}>
          {children}
        </StyledLabelText>
      </StyledLabel>
    );
  }
);

LabelComponent.displayName = 'Stepper.Label';

LabelComponent.propTypes = {
  icon: PropTypes.any,
  iconProps: PropTypes.object,
  isHidden: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Label = LabelComponent;
