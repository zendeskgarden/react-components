/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useState,
  useRef,
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  HTMLAttributes
} from 'react';
import PropTypes from 'prop-types';
import { Modifier } from 'react-popper';
import { Button } from '@zendeskgarden/react-buttons';
import { GARDEN_PLACEMENT } from '@zendeskgarden/react-modals';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { Colorpicker, IColorpickerProps } from '../Colorpicker';
import { IColor } from '../../utils/types';
import {
  StyledButton,
  StyledButtonPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';

interface IDialogChanges {
  isOpen?: boolean;
}

export interface IColorpickerDialogProps extends IColorpickerProps {
  /**
   * Handles close actions. Can be triggered from the backdrop.
   *
   * @param {Object} color A color picker state
   */
  onClose?: (color: IColor) => void;
  /** Adjusts the placement of the color dialog */
  placement?: GARDEN_PLACEMENT;
  /** Disables the color dialog button */
  disabled?: boolean;
  /**
   * Modifies [Popper instance](https://popper.js.org/docs/v2/modifiers/) to customize positioning logic
   */
  popperModifiers?: Partial<Modifier<any, any>>[];
  /**
   * Sets the `z-index` of the color dialog
   */
  zIndex?: number;
  /**
   * Adds an arrow to the color dialog
   */
  hasArrow?: boolean;
  /**
   * Animates the color dialog
   */
  isAnimated?: boolean;
  /**
   * Applies inset `box-shadow` styling on focus
   */
  focusInset?: boolean;
  /**
   * Passes HTML attributes to the color dialog button element
   */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /**
   * Handles dialog changes
   *
   * @param {object} changes The changed dialog state
   */
  onDialogChange?: (changes: IDialogChanges) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorpickerDialog = forwardRef<
  HTMLDivElement,
  IColorpickerDialogProps & Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'onChange'>
>(
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
      popperModifiers,
      zIndex,
      focusInset,
      disabled,
      buttonProps,
      onDialogChange,
      children,
      ...props
    },
    ref
  ) => {
    const isControlled = color !== null && color !== undefined;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorPickerRef = useRef<HTMLDivElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    const [uncontrolledColor, setUncontrolledColor] = useState<string | IColor | undefined>(
      defaultColor
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
  placement: PropTypes.oneOf([
    'auto',
    'top',
    'top-start',
    'top-end',
    'end',
    'end-top',
    'end-bottom',
    'bottom',
    'bottom-start',
    'bottom-end',
    'start',
    'start-top',
    'start-bottom'
  ]),
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  labels: PropTypes.object,
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  defaultColor: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  buttonProps: PropTypes.object
};

ColorpickerDialog.defaultProps = {
  placement: 'bottom-start',
  isAnimated: true,
  zIndex: 1000,
  hasArrow: false /* TooltipModal override */
};

ColorpickerDialog.displayName = 'ColorpickerDialog';
