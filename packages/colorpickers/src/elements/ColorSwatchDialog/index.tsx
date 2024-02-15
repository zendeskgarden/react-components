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
  ReactElement
} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@zendeskgarden/react-buttons';
import { PLACEMENT } from '@zendeskgarden/react-modals';
import { useText } from '@zendeskgarden/react-theming';
import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { ColorSwatch } from '../ColorSwatch';
import {
  StyledButton,
  StyledButtonPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';
import { IColorSwatchDialogProps } from '../../types';

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
      zIndex,
      isOpen,
      focusInset,
      disabled,
      buttonProps,
      onDialogChange,
      children,
      'aria-label': ariaLabel,
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
    const ariaLabelText = useText(
      ColorSwatchDialog,
      { 'aria-label': ariaLabel },
      'aria-label',
      'Color swatch'
    );

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
          referenceElement={referenceElement}
          onClose={closeDialog}
          aria-label={ariaLabelText}
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
  ...ColorSwatch.propTypes,
  placement: PropTypes.oneOf(PLACEMENT),
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  buttonProps: PropTypes.object,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusInset: PropTypes.bool,
  isOpen: PropTypes.bool
};

ColorSwatchDialog.defaultProps = {
  placement: 'bottom-start',
  isAnimated: true,
  zIndex: 1000,
  hasArrow: false /* TooltipModal override */
};

ColorSwatchDialog.displayName = 'ColorSwatchDialog';
