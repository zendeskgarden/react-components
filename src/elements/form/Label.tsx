/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import { useEffect, KeyboardEvent, forwardRef } from 'react';

import { useFieldContext } from '../../hooks/form/useFieldContext';
import { useFieldsetContext } from '../../hooks/form/useFieldsetContext';
import { useInputContext } from '../../hooks/form/useInputContext';
import { ILabelProps } from '../../types/elements';
import { StyledCheckLabel } from '../../views/form/StyledCheckLabel';
import { StyledCheckSvg } from '../../views/form/StyledCheckSvg';
import { StyledDashSvg } from '../../views/form/StyledDashSvg';
import { StyledLabel } from '../../views/form/StyledLabel';
import { StyledRadioLabel } from '../../views/form/StyledRadioLabel';
import { StyledRadioSvg } from '../../views/form/StyledRadioSvg';
import { StyledToggleLabel } from '../../views/form/StyledToggleLabel';
import { StyledToggleSvg } from '../../views/form/StyledToggleSvg';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Field.Label` instead
 *
 * @extends LabelHTMLAttributes<HTMLLabelElement>
 */
export const Label = forwardRef<HTMLLabelElement, ILabelProps>(
  ({ children, isRegular, ...other }, ref) => {
    const fieldContext = useFieldContext();
    const fieldsetContext = useFieldsetContext();
    const type = useInputContext();
    const { setHasLabel } = fieldContext || {};

    useEffect(() => {
      setHasLabel?.(true);

      return () => setHasLabel?.(false);
    }, [setHasLabel]);

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
          <StyledRadioSvg
            data-garden-id={COMPONENT_IDS['forms.radio_svg']}
            data-garden-version={PACKAGE_VERSION}
          />
          {children}
        </StyledRadioLabel>
      );
    } else if (type === 'checkbox') {
      /**
       * `onLabelSelect` is a workaround for checkbox label `shift + click` bug in Firefox
       * See: https://bugzilla.mozilla.org/show_bug.cgi?id=559506
       */
      const onLabelSelect = (e: KeyboardEvent<HTMLInputElement>) => {
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
        <StyledCheckLabel
          ref={ref}
          {...combinedProps}
          data-garden-id={COMPONENT_IDS['forms.checkbox_label']}
          data-garden-version={PACKAGE_VERSION}
          $isRegular={$isRegular}
        >
          <StyledCheckSvg
            data-garden-id={COMPONENT_IDS['forms.check_svg']}
            data-garden-version={PACKAGE_VERSION}
          />
          <StyledDashSvg
            data-garden-id={COMPONENT_IDS['forms.dash_svg']}
            data-garden-version={PACKAGE_VERSION}
          />
          {children}
        </StyledCheckLabel>
      );
    } else if (type === 'toggle') {
      return (
        <StyledToggleLabel
          ref={ref}
          {...combinedProps}
          data-garden-id={COMPONENT_IDS['forms.toggle_label']}
          data-garden-version={PACKAGE_VERSION}
          $isRegular={$isRegular}
        >
          <StyledToggleSvg
            data-garden-id={COMPONENT_IDS['forms.toggle_svg']}
            data-garden-version={PACKAGE_VERSION}
          />
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
