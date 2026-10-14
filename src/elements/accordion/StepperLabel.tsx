/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import CheckSmIcon from '@zendeskgarden/svg-icons/src/check-sm.svg';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { useStepContext } from '../../hooks/accordion/useStepContext';
import { IStepperLabelProps } from '../../types/elements';
import { StyledIcon, StyledIconFlexContainer } from '../../views/accordion/StyledIcon';
import { StyledLabelText } from '../../views/accordion/StyledLabelText';
import { StyledLabel } from '../../views/accordion/StyledStepperLabel';
import { COMPONENT_IDS } from '../utils';

const LabelComponent = forwardRef<HTMLDivElement, IStepperLabelProps>(
  ({ icon, iconProps, isHidden, children, ...other }, ref) => {
    const { currentStepIndex, isActive, isCompleted, isHorizontal } = useStepContext();
    const numericStep = currentStepIndex + 1;
    const stepIcon = icon || numericStep;

    const styledIcon = (
      <StyledIcon
        $isActive={isActive}
        $isHorizontal={isHorizontal}
        data-garden-id={COMPONENT_IDS['accordions.step_icon']}
        data-garden-version={PACKAGE_VERSION}
      >
        {isCompleted ? <CheckSmIcon {...iconProps} /> : stepIcon}
      </StyledIcon>
    );

    return (
      <StyledLabel
        ref={ref}
        $isActive={isActive}
        $isHorizontal={isHorizontal}
        {...other}
        data-garden-id={COMPONENT_IDS['accordions.step_label']}
        data-garden-version={PACKAGE_VERSION}
      >
        {isHorizontal ? (
          <StyledIconFlexContainer>{styledIcon}</StyledIconFlexContainer>
        ) : (
          styledIcon
        )}
        <StyledLabelText
          $isHidden={isHidden}
          $isHorizontal={isHorizontal}
          data-garden-id={COMPONENT_IDS['accordions.step_label_text']}
          data-garden-version={PACKAGE_VERSION}
        >
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
