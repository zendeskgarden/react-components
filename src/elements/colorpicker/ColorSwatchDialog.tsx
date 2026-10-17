/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import PropTypes from 'prop-types';
import {
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement,
  forwardRef,
  ButtonHTMLAttributes,
  ReactElement,
  RefAttributes
} from 'react';
import { useTheme } from 'styled-components';
import Chevron from 'svg-icons-legacy/src/16/chevron-down-stroke.svg';

import { Button } from '../../elements/button/Button';
import DEFAULT_THEME from '../../theming/elements/theme';
import { useText } from '../../theming/utils/useText';
import { IColorSwatchDialogProps, MODAL_PLACEMENT } from '../../types/elements';
import { StyledButton } from '../../views/colorpicker/StyledButton';
import { getBackground, StyledButtonPreview } from '../../views/colorpicker/StyledButtonPreview';
import { StyledTooltipBody } from '../../views/colorpicker/StyledTooltipBody';
import { StyledTooltipDialog } from '../../views/colorpicker/StyledTooltipDialog';
import { COMPONENT_IDS } from '../utils';
import { ColorSwatch } from './ColorSwatch';

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
      placement = 'bottom-start',
      onSelect,
      hasArrow = false,
      isAnimated = true,
      zIndex = 1000,
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
    const theme = useTheme() || DEFAULT_THEME;
    let backgroundColor;

    if (isControlled) {
      if (selectedRowIndex !== null && selectedColIndex !== null) {
        backgroundColor = colors[selectedRowIndex!]![selectedColIndex!]!.value;
      }
    } else if (rowIndex !== undefined && colIndex !== undefined) {
      backgroundColor = colors[rowIndex]![colIndex]!.value;
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
          cloneElement(
            Children.only(
              children as ReactElement<
                ButtonHTMLAttributes<HTMLButtonElement> & RefAttributes<HTMLButtonElement>
              >
            ),
            {
              onClick,
              ref: buttonRef
            }
          )
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
              $backgroundColor={backgroundColor}
              style={{ background: getBackground({ theme, $backgroundColor: backgroundColor }) }}
              data-garden-id={COMPONENT_IDS['colorpickers.colordialog_preview']}
              data-garden-version={PACKAGE_VERSION}
              data-test-id="dialog-preview"
            />
            <Button.EndIcon isRotated={referenceElement !== null}>
              <Chevron />
            </Button.EndIcon>
          </StyledButton>
        )}
        <StyledTooltipDialog
          ref={ref}
          zIndex={zIndex}
          hasArrow={hasArrow}
          focusOnMount={false}
          placement={placement}
          offset={theme.space.base}
          isAnimated={isAnimated}
          referenceElement={referenceElement}
          onClose={closeDialog}
          aria-label={ariaLabelText}
          {...props}
          data-garden-id={COMPONENT_IDS['colorpickers.colordialog_tooltipdialog']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledTooltipBody
            data-garden-id={COMPONENT_IDS['colorpickers.colordialog_tooltipdialog_body']}
            data-garden-version={PACKAGE_VERSION}
          >
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
        </StyledTooltipDialog>
      </>
    );
  }
);

ColorSwatchDialog.propTypes = {
  ...ColorSwatch.propTypes,
  placement: PropTypes.oneOf(MODAL_PLACEMENT),
  onDialogChange: PropTypes.func,
  disabled: PropTypes.bool,
  buttonProps: PropTypes.object,
  zIndex: PropTypes.number,
  hasArrow: PropTypes.bool,
  isAnimated: PropTypes.bool,
  focusInset: PropTypes.bool,
  isOpen: PropTypes.bool
};

ColorSwatchDialog.displayName = 'ColorSwatchDialog';
