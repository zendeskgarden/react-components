/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, LiHTMLAttributes } from 'react';

import { useStepperContext } from '../../utils/accordion/index';
import { StyledLine } from '../../views/accordion/StyledLine';
import { StyledStep } from '../../views/accordion/StyledStep';
import { COMPONENT_IDS } from '../utils';

const StepComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    const { isHorizontal } = useStepperContext();

    return (
      <StyledStep
        ref={ref}
        $isHorizontal={isHorizontal}
        {...props}
        data-garden-id={COMPONENT_IDS['accordions.step']}
        data-garden-version={PACKAGE_VERSION}
      >
        {!!isHorizontal && (
          <StyledLine
            data-test-id="step-line"
            data-garden-id={COMPONENT_IDS['accordions.step_line']}
            data-garden-version={PACKAGE_VERSION}
          />
        )}
        {children}
      </StyledStep>
    );
  }
);

StepComponent.displayName = 'Stepper.Step';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Step = StepComponent;
