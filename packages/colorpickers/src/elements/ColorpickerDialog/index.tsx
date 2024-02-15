/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  forwardRef,
  ReactElement
} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@zendeskgarden/react-buttons';
import { PLACEMENT } from '@zendeskgarden/react-modals';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Colorpicker } from '../Colorpicker';
import {
  StyledButton,
  StyledButtonPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';
import { IColor, IColorpickerDialogProps } from '../../types';
import { useText } from '@zendeskgarden/react-theming';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorpickerDialog = forwardRef<HTMLDivElement, IColorpickerDialogProps>(
  (
    {
      color,
      defaultColor,
      placement,
      onChange,
      onClose,
      labels,
      hasArrow,
      isAnimated,
      isOpaque,
      isOpen,
      popperModifiers,
      zIndex,
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
      ColorpickerDialog,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Color picker'
    );

    const openDialog = () => {
      setReferenceElement(buttonRef.current);
      onDialogChange && onDialogChange({ isOpen: true });
    };

    const closeDialog = () => {
      setReferenceElement(null);
      onDialogChange && onDialogChange({ isOpen: false });
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

    return (
      <>
        {children ? (
          cloneElement(Children.only(children as ReactElement), {
            onClick,
            ref: buttonRef
          })
        ) : (
          <StyledButton
            disabled={disabled}
            focusInset={focusInset}
            ref={buttonRef}
            onClick={onClick}
            {...buttonProps}
          >
            <StyledButtonPreview backgroundColor={isControlled ? color : uncontrolledColor} />
            {/* eslint-disable-next-line no-eq-null, eqeqeq */}
            <Button.EndIcon isRotated={referenceElement != null}>
              <Chevron />
            </Button.EndIcon>
          </StyledButton>
        )}
        <StyledTooltipModal
          ref={ref}
          hasArrow={hasArrow}
          popperModifiers={popperModifiers}
          zIndex={zIndex}
          isAnimated={isAnimated}
          isOpaque={isOpaque}
          focusOnMount={false}
          placement={placement}
          referenceElement={referenceElement}
          onClose={() => {
            closeDialog();
            onClose && onClose(isControlled ? (color as IColor) : (uncontrolledColor as IColor));
          }}
          aria-label={ariaLabelText}
          {...props}
        >
          <StyledTooltipBody>
            <Colorpicker
              autofocus
              color={color}
              isOpaque={isOpaque}
              labels={labels}
              ref={colorPickerRef}
              defaultColor={uncontrolledColor}
              onChange={isControlled ? onChange : setUncontrolledColor}
            />
          </StyledTooltipBody>
        </StyledTooltipModal>
      </>
    );
  }
);

ColorpickerDialog.propTypes = {
  ...Colorpicker.propTypes,
  placement: PropTypes.oneOf(PLACEMENT),
  onClose: PropTypes.func,
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  labels: PropTypes.object,
  buttonProps: PropTypes.object,
  popperModifiers: PropTypes.any,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isOpen: PropTypes.bool,
  focusInset: PropTypes.bool
};

ColorpickerDialog.defaultProps = {
  placement: 'bottom-start',
  isAnimated: true,
  zIndex: 1000,
  hasArrow: false /* TooltipModal override */
};

ColorpickerDialog.displayName = 'ColorpickerDialog';
