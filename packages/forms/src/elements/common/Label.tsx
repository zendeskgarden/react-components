/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
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
  /** Applies regular (non-bold) font weight */
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

    if (type === undefined) {
      const { setIsLabelActive, setIsLabelHovered, multiThumbRangeRef } = fieldContext;

      combinedProps = {
        ...combinedProps,
        onMouseUp: composeEventHandlers(props.onMouseUp, () => {
          setIsLabelActive(false);
        }),
        onMouseDown: composeEventHandlers(props.onMouseDown, () => {
          setIsLabelActive(true);
        }),
        onMouseEnter: composeEventHandlers(props.onMouseEnter, () => {
          setIsLabelHovered(true);
        }),
        onMouseLeave: composeEventHandlers(props.onMouseLeave, () => {
          setIsLabelHovered(false);
        }),
        onClick: composeEventHandlers(props.onClick, () => {
          multiThumbRangeRef.current && multiThumbRangeRef.current.focus();
        })
      };
    }
  }

  if (type === 'radio') {
    return (
      <StyledRadioLabel ref={ref} {...(combinedProps as any)}>
        <StyledRadioSvg />
        {props.children}
      </StyledRadioLabel>
    );
  } else if (type === 'checkbox') {
    /**
     * `onLabelSelect` is a workaround for checkbox label `shift + click` bug in Firefox
     * See: https://bugzilla.mozilla.org/show_bug.cgi?id=559506
     */
    const onLabelSelect = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

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

    combinedProps = {
      ...combinedProps,
      onClick: composeEventHandlers(combinedProps.onClick, onLabelSelect)
    };

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
