/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import useFieldContext from '../../utils/useFieldContext';
import useFieldsetContext from '../../utils/useFieldsetContext';
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
import { ILabelProps } from '../../types';

/**
 * @deprecated use `Field.Label` instead
 *
 * @extends LabelHTMLAttributes<HTMLLabelElement>
 */
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  ({ children, isRegular, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const fieldsetContext = useFieldsetContext();
    const type = useInputContext();

    const $isRegular = fieldsetContext && isRegular === undefined ? true : isRegular;
    let combinedProps = other;

    if (fieldContext) {
      combinedProps = fieldContext.getLabelProps(combinedProps);

      if (type === undefined) {
        const { setIsLabelActive, setIsLabelHovered } = fieldContext;

        combinedProps.onMouseUp = composeEventHandlers(other.onMouseUp, () => {
          setIsLabelActive(false);
        });
        combinedProps.onMouseDown = composeEventHandlers(other.onMouseDown, () => {
          setIsLabelActive(true);
        });
        combinedProps.onMouseEnter = composeEventHandlers(other.onMouseEnter, () => {
          setIsLabelHovered(true);
        });
        combinedProps.onMouseLeave = composeEventHandlers(other.onMouseLeave, () => {
          setIsLabelHovered(false);
        });
      }
    }

    if (type === 'radio') {
      return (
        <StyledRadioLabel ref={ref} {...combinedProps} $isRegular={$isRegular}>
          <StyledRadioSvg />
          {children}
        </StyledRadioLabel>
      );
    } else if (type === 'checkbox') {
      /**
       * `onLabelSelect` is a workaround for checkbox label `shift + click` bug in Firefox
       * See: https://bugzilla.mozilla.org/show_bug.cgi?id=559506
       */
      const onLabelSelect = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // eslint-disable-next-line n/no-unsupported-features/node-builtins
        const isFirefox = navigator?.userAgent.toLowerCase().indexOf('firefox') > -1;

        if (fieldContext && isFirefox && e.target instanceof Element) {
          const inputId = e.target.getAttribute('for');

          if (!inputId) return;

          const input = document.getElementById(inputId) as HTMLInputElement | null;

          if (input && input.type === 'checkbox') {
            if (e.shiftKey) {
              input.click();
              input.checked = true;
            }
            input.focus();
          }
        }
      };

      combinedProps.onClick = composeEventHandlers(combinedProps.onClick, onLabelSelect);

      return (
        <StyledCheckLabel ref={ref} {...combinedProps} $isRegular={$isRegular}>
          <StyledCheckSvg />
          <StyledDashSvg />
          {children}
        </StyledCheckLabel>
      );
    } else if (type === 'toggle') {
      return (
        <StyledToggleLabel ref={ref} {...combinedProps} $isRegular={$isRegular}>
          <StyledToggleSvg />
          {children}
        </StyledToggleLabel>
      );
    }

    return (
      <StyledLabel ref={ref} {...combinedProps} $isRegular={$isRegular}>
        {children}
      </StyledLabel>
    );
  }
);

Label.displayName = 'Field.Label';

Label.propTypes = {
  isRegular: PropTypes.bool
};
