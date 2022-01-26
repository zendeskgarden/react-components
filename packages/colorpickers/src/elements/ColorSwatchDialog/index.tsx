/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useState,
  useEffect,
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
import { ColorSwatch, IColorSwatchProps } from '../ColorSwatch';
import {
  StyledButton,
  StyledButtonPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';

interface IDialogChanges {
  isOpen?: boolean;
}

export interface IColorSwatchDialogProps extends IColorSwatchProps {
  /** Adjusts the placement of the color dialog */
  placement?: GARDEN_PLACEMENT;
  /** Disables the color dialog button */
  disabled?: boolean;
  /** Modifies [Popper instance](https://popper.js.org/docs/v2/modifiers/) to customize positioning logic */
  popperModifiers?: Partial<Modifier<any, any>>[];
  /** Sets the `z-index` of the color dialog */
  zIndex?: number;
  /** Adds an arrow to the color dialog */
  hasArrow?: boolean;
  /** Animates the color dialog */
  isAnimated?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  /** Passes HTML attributes to the color dialog button element */
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  /** Opens the dialog in a controlled color swatch dialog */
  isOpen?: boolean;
  /**
   * Handles dialog changes
   *
   * @param {Object} changes The changed dialog state
   */
  onDialogChange?: (changes: IDialogChanges) => void;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorSwatchDialog = forwardRef<HTMLDivElement, IColorSwatchDialogProps>(
  (
    {
      colors,
      rowIndex,
      colIndex,
      selectedRowIndex,
      selectedColIndex,
      defaultRowIndex,
      defaultColIndex,
      defaultSelectedRowIndex,
      defaultSelectedColIndex,
      placement,
      onChange,
      onSelect,
      hasArrow,
      isAnimated,
      popperModifiers,
      zIndex,
      isOpen,
      focusInset,
      disabled,
      buttonProps,
      onDialogChange,
      children,
      ...props
    },
    ref
  ) => {
    const controlledFocus =
      rowIndex !== null && colIndex !== null && rowIndex !== undefined && colIndex !== undefined;
    const controlledSelect =
      selectedRowIndex !== null &&
      selectedColIndex !== null &&
      selectedRowIndex !== undefined &&
      selectedColIndex !== undefined;
    const isControlled = controlledFocus || controlledSelect;
    const isDialogControlled = isOpen !== undefined && isOpen !== null;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorSwatchRef = useRef<HTMLTableElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    const [uncontrolledSelectedRowIndex, setUncontrolledSelectedRowIndex] = useState(
      defaultSelectedRowIndex || 0
    );
    const [uncontrolledSelectedColIndex, setUncontrolledSelectedColIndex] = useState(
      defaultSelectedColIndex || 0
    );
    const [uncontrolledRowIndex, setUncontrolledRowIndex] = useState(defaultRowIndex || 0);
    const [uncontrolledColIndex, setUncontrolledColIndex] = useState(defaultColIndex || 0);

    useEffect(() => {
      if (isDialogControlled) {
        if (isOpen) {
          setReferenceElement(buttonRef.current);
        } else {
          setReferenceElement(null);
        }
      }
    }, [isOpen, isDialogControlled]);

    let uncontrolledSelectedColor;
    let controlledSelectedColor;

    if (uncontrolledSelectedRowIndex > -1 && uncontrolledSelectedColIndex > -1) {
      uncontrolledSelectedColor =
        colors[uncontrolledSelectedRowIndex][uncontrolledSelectedColIndex];
    }

    if (
      selectedRowIndex !== undefined &&
      selectedColIndex !== undefined &&
      selectedRowIndex > -1 &&
      selectedColIndex > -1
    ) {
      controlledSelectedColor = colors[selectedRowIndex][selectedColIndex];
    }

    const openDialog = () => {
      setReferenceElement(buttonRef.current);
      onDialogChange && onDialogChange({ isOpen: true });
    };

    const closeDialog = () => {
      setUncontrolledRowIndex(uncontrolledSelectedRowIndex);
      setUncontrolledColIndex(uncontrolledSelectedColIndex);
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
      if (referenceElement && colorSwatchRef.current) {
        const focusableButton =
          colorSwatchRef.current.querySelector<HTMLButtonElement>('[tabindex="0"]');
        const selectedCell = colorSwatchRef.current.querySelector('[aria-selected="true"]');

        if (selectedCell) {
          (selectedCell.children[0] as HTMLButtonElement).focus();
        } else {
          focusableButton?.focus();
        }
      }
    }, [referenceElement]);

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
            <StyledButtonPreview
              backgroundColor={
                isControlled ? controlledSelectedColor?.value : uncontrolledSelectedColor?.value
              }
            />
            {/* eslint-disable-next-line no-eq-null, eqeqeq */}
            <Button.EndIcon isRotated={referenceElement != null}>
              <Chevron />
            </Button.EndIcon>
          </StyledButton>
        )}
        <StyledTooltipModal
          ref={ref}
          zIndex={zIndex}
          hasArrow={hasArrow}
          focusOnMount={false}
          placement={placement}
          isAnimated={isAnimated}
          popperModifiers={popperModifiers}
          referenceElement={referenceElement}
          onClose={closeDialog}
          {...props}
        >
          <StyledTooltipBody>
            <ColorSwatch
              colors={colors}
              ref={colorSwatchRef}
              rowIndex={rowIndex}
              colIndex={colIndex}
              selectedRowIndex={selectedRowIndex}
              selectedColIndex={selectedColIndex}
              defaultRowIndex={uncontrolledRowIndex}
              defaultColIndex={uncontrolledColIndex}
              defaultSelectedRowIndex={uncontrolledSelectedRowIndex}
              defaultSelectedColIndex={uncontrolledSelectedColIndex}
              onChange={(rowIdx, colIdx) => {
                if (isControlled === false) {
                  setUncontrolledRowIndex(rowIdx);
                  setUncontrolledColIndex(colIdx);
                }
                onChange && onChange(rowIdx, colIdx);
              }}
              onSelect={(rowIdx, colIdx) => {
                if (isControlled === false) {
                  setUncontrolledSelectedRowIndex(rowIdx);
                  setUncontrolledSelectedColIndex(colIdx);
                }
                onSelect && onSelect(rowIdx, colIdx);
              }}
            />
          </StyledTooltipBody>
        </StyledTooltipModal>
      </>
    );
  }
);

ColorSwatchDialog.propTypes = {
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
  onChange: PropTypes.func,
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  buttonProps: PropTypes.object
};

ColorSwatchDialog.defaultProps = {
  placement: 'bottom-start',
  isAnimated: true,
  zIndex: 1000,
  hasArrow: false /* TooltipModal override */
};

ColorSwatchDialog.displayName = 'ColorSwatchDialog';
