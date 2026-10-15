/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { forwardRef, HTMLAttributes } from 'react';

import { useStepContext } from '../../hooks/accordion/useStepContext';
import { StyledInnerContent } from '../../views/accordion/StyledInnerContent';
import { StyledContent } from '../../views/accordion/StyledStepperContent';
import { COMPONENT_IDS, getInertValue } from '../utils';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isActive, isHorizontal } = useStepContext();

    return isHorizontal === false ? (
      <StyledContent
        ref={ref}
        $isActive={isActive}
        {...props}
        data-garden-id={COMPONENT_IDS['accordions.step_content']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledInnerContent
          aria-hidden={!isActive}
          inert={getInertValue(!isActive)}
          data-garden-id={COMPONENT_IDS['accordions.step_inner_content']}
          data-garden-version={PACKAGE_VERSION}
        >
          {props.children}
        </StyledInnerContent>
      </StyledContent>
    ) : null;
  }
);

ContentComponent.displayName = 'Stepper.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
