/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useRef, useEffect, useContext, HTMLAttributes } from 'react';
import mergeRefs from 'react-merge-refs';
import debounce from 'lodash.debounce';
import { ThemeContext } from 'styled-components';
import { useDocument } from '@zendeskgarden/react-theming';

import { StyledContent, StyledInnerContent } from '../../../styled';
import { useStepContext, useStepperContext } from '../../../utils';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const contentRef = useRef<HTMLDivElement>();
    const { activeIndex, isHorizontal } = useStepperContext();
    const { currentStepIndex } = useStepContext();
    const isActive = currentStepIndex === activeIndex;

    const theme = useContext(ThemeContext);
    const environment = useDocument(theme);

    useEffect(() => {
      if (environment && isActive && isHorizontal === false) {
        const win = environment.defaultView! || window;

        const updateMaxHeight = debounce(() => {
          if (contentRef.current) {
            const child = contentRef.current.children[0] as any;

            child.style.maxHeight = `${child.scrollHeight}px`;
          }
        }, 100);

        win.addEventListener('resize', updateMaxHeight);
        updateMaxHeight();

        return () => {
          updateMaxHeight.cancel();
          win.removeEventListener('resize', updateMaxHeight);
        };
      }

      return undefined;
    }, [isActive, isHorizontal, contentRef, environment]);

    return isHorizontal === false ? (
      <StyledContent ref={mergeRefs([contentRef, ref])} isActive={isActive} {...props}>
        <StyledInnerContent isActive={isActive} aria-hidden={!isActive}>
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
