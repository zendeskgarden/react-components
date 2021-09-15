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
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const ColorSwatchDialog = forwardRef<
  HTMLDivElement,
  IColorSwatchDialogProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'>
>(
  (
    {
      colors,
      isWrapped,
      rowIndex,
      colIndex,
      selectedRowIndex,
      selectedColIndex,
      defaultSelectedRowIndex,
      defaultSelectedColIndex,
      placement,
      onChange,
      onSelect,
      hasArrow,
      isAnimated,
      popperModifiers,
      zIndex,
      focusInset,
      disabled,
      buttonProps,
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
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorSwatchRef = useRef<HTMLTableElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
    const [uncontrolledSelectedRowIndex, setUncontrolledSelectedRowIndex] = useState(
      defaultSelectedRowIndex || 0
    );
    const [uncontrolledSelectedColIndex, setUncontrolledSelectedColIndex] = useState(
      defaultSelectedColIndex || 0
    );
    const uncontrolledSelectedColor =
      colors[uncontrolledSelectedRowIndex][uncontrolledSelectedColIndex];
    const controlledColor = isControlled
      ? colors[selectedRowIndex as number][selectedColIndex as number]
      : undefined;

    const onClick = composeEventHandlers(props.onClick, () => {
      if (referenceElement) {
        setReferenceElement(null);
      } else {
        setReferenceElement(buttonRef.current);
      }
    });

    useEffect(() => {
      if (referenceElement && colorSwatchRef.current) {
        const buttons = colorSwatchRef.current.querySelectorAll<HTMLElement>('button');
        const selectedButtons =
          colorSwatchRef.current.querySelectorAll<HTMLElement>('[aria-selected="true"]');

        if (selectedButtons.length) {
          selectedButtons[0].focus();
        } else {
          buttons[0].focus();
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
                isControlled ? controlledColor?.value : uncontrolledSelectedColor.value
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
          onClose={() => setReferenceElement(null)}
          {...props}
        >
          <StyledTooltipBody>
            <ColorSwatch
              colors={colors}
              ref={colorSwatchRef}
              rowIndex={rowIndex}
              colIndex={colIndex}
              isWrapped={isWrapped}
              selectedRowIndex={selectedRowIndex}
              selectedColIndex={selectedColIndex}
              defaultRowIndex={uncontrolledSelectedRowIndex}
              defaultColIndex={uncontrolledSelectedColIndex}
              defaultSelectedRowIndex={uncontrolledSelectedRowIndex}
              defaultSelectedColIndex={uncontrolledSelectedColIndex}
              onChange={onChange}
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
