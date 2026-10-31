/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/chevron-down.svg';
import PropTypes from 'prop-types';
import {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  forwardRef,
  ButtonHTMLAttributes,
  ReactElement,
  RefAttributes
} from 'react';

import { Button } from '../../elements/button/Button';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { useText } from '../../theming/utils/useText';
import { IColor, IColorPickerDialogProps, MODAL_PLACEMENT } from '../../types/elements';
import { getElementRef } from '../../utils/shared/getElementRef';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { StyledButton } from '../../views/colorpicker/StyledButton';
import { getBackground, StyledButtonPreview } from '../../views/colorpicker/StyledButtonPreview';
import { StyledTooltipBody } from '../../views/colorpicker/StyledTooltipBody';
import { StyledTooltipDialog } from '../../views/colorpicker/StyledTooltipDialog';
import { COMPONENT_IDS } from '../utils';
import { ColorPicker } from './ColorPicker';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorPickerDialog = forwardRef<HTMLDivElement, IColorPickerDialogProps>(
  (
    {
      color,
      defaultColor,
      placement = 'bottom-start',
      onChange,
      onClose,
      labels,
      hasArrow = false,
      isAnimated = true,
      isOpaque,
      isOpen,
      zIndex = 1000,
      focusInset,
      disabled,
      buttonProps,
      onDialogChange,
      'aria-label': ariaLabel,
      children,
      ...props
    },
    ref
  ) => {
    const isControlled = color !== null && color !== undefined;
    const isDialogControlled = isOpen !== undefined && isOpen !== null;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    const [uncontrolledColor, setUncontrolledColor] = useState<string | IColor | undefined>(
      defaultColor
    );
    const ariaLabelText = useText(
      ColorPickerDialog,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Color picker'
    );
    const theme = useGardenTheme();

    const openDialog = () => {
      setReferenceElement(buttonRef.current);
      onDialogChange?.({ isOpen: true });
    };

    const closeDialog = () => {
      if (referenceElement) {
        setReferenceElement(null);
        onDialogChange?.({ isOpen: false });
      }
    };

    const onClick = composeEventHandlers(props.onClick, () => {
      if (referenceElement) {
        closeDialog();
      } else {
        openDialog();
      }
    });

    useEffect(() => {
      if (isDialogControlled) {
        if (isOpen) {
          setReferenceElement(buttonRef.current);
        } else {
          setReferenceElement(null);
        }
      }
    }, [isOpen, isDialogControlled]);

    const trigger = children
      ? Children.only(
          children as ReactElement<
            ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>
          >
        )
      : null;

    return (
      <>
        {trigger ? (
          cloneElement(trigger, {
            onClick: composeEventHandlers(trigger.props.onClick, onClick),
            ref: mergeRefs([buttonRef, getElementRef<HTMLButtonElement>(trigger)])
          })
        ) : (
          <StyledButton
            disabled={disabled}
            focusInset={focusInset}
            ref={buttonRef}
            onClick={onClick}
            {...buttonProps}
            isNeutral
            data-garden-version={PACKAGE_VERSION}
          >
            <StyledButtonPreview
              $backgroundColor={isControlled ? color : uncontrolledColor}
              style={{
                background: getBackground({
                  theme,
                  $backgroundColor: isControlled ? color : uncontrolledColor
                })
              }}
              data-garden-id={COMPONENT_IDS['colorpickers.colordialog_preview']}
              data-garden-version={PACKAGE_VERSION}
              data-test-id="dialog-preview"
            />
            {/* eslint-disable-next-line no-eq-null, eqeqeq */}
            <Button.EndIcon isRotated={referenceElement != null}>
              <Chevron />
            </Button.EndIcon>
          </StyledButton>
        )}
        <StyledTooltipDialog
          ref={ref}
          hasArrow={hasArrow}
          zIndex={zIndex}
          isAnimated={isAnimated}
          focusOnMount={false}
          placement={placement}
          offset={theme.space.base}
          referenceElement={referenceElement}
          onClose={() => {
            closeDialog();
            onClose?.(isControlled ? (color as IColor) : (uncontrolledColor as IColor));
          }}
          aria-label={ariaLabelText}
          {...props}
          data-garden-id={COMPONENT_IDS['colorpickers.colordialog_tooltipdialog']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledTooltipBody
            data-garden-id={COMPONENT_IDS['colorpickers.colordialog_tooltipdialog_body']}
            data-garden-version={PACKAGE_VERSION}
          >
            <ColorPicker
              autofocus
              color={color}
              isOpaque={isOpaque}
              labels={labels}
              ref={colorPickerRef}
              defaultColor={uncontrolledColor}
              onChange={isControlled ? onChange : setUncontrolledColor}
            />
          </StyledTooltipBody>
        </StyledTooltipDialog>
      </>
    );
  }
);

ColorPickerDialog.propTypes = {
  ...ColorPicker.propTypes,
  placement: PropTypes.oneOf(MODAL_PLACEMENT),
  onClose: PropTypes.func,
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  labels: PropTypes.object,
  buttonProps: PropTypes.object,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isOpen: PropTypes.bool,
  focusInset: PropTypes.bool
};

ColorPickerDialog.displayName = 'ColorPickerDialog';
