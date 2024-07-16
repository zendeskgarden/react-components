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
      name,
      colors,
      isCheckboxGroup,
      selectedRowIndex,
      selectedColIndex,
      defaultSelectedRowIndex,
      defaultSelectedColIndex,
      placement,
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
    const isControlled = selectedRowIndex !== undefined && selectedColIndex !== undefined;
    const isDialogControlled = isOpen !== undefined && isOpen !== null;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const colorSwatchRef = useRef<HTMLTableElement>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
    const [rowIndex, setRowIndex] = useState<number | undefined>(defaultSelectedRowIndex);
    const [colIndex, setColIndex] = useState<number | undefined>(defaultSelectedColIndex);
    let backgroundColor;

    if (isControlled) {
      if (selectedRowIndex !== null && selectedColIndex !== null) {
        backgroundColor = colors[selectedRowIndex][selectedColIndex].value;
      }
    } else if (rowIndex !== undefined && colIndex !== undefined) {
      backgroundColor = colors[rowIndex][colIndex].value;
    }

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
      if (referenceElement && colorSwatchRef.current) {
        const input = colorSwatchRef.current.querySelector<HTMLInputElement>('[tabindex="0"]');

        input?.focus();
      }
    }, [referenceElement]);

    const handleSelect = (row: number | null, col: number | null) => {
      if (isControlled === false) {
        if (row === null || col === null) {
          setRowIndex(undefined);
          setColIndex(undefined);
        } else {
          setRowIndex(row);
          setColIndex(col);
        }
      }

      onSelect && onSelect(row, col);
    };

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
            <StyledButtonPreview $backgroundColor={backgroundColor} />
            <Button.EndIcon isRotated={referenceElement !== null}>
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
              name={name}
              colors={colors}
              ref={colorSwatchRef}
              isCheckboxGroup={isCheckboxGroup}
              selectedRowIndex={selectedRowIndex}
              selectedColIndex={selectedColIndex}
              defaultSelectedRowIndex={rowIndex}
              defaultSelectedColIndex={colIndex}
              onSelect={handleSelect}
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
