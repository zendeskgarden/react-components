/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useRef, forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import mergeRefs from 'react-merge-refs';
import { GARDEN_PLACEMENT } from '@zendeskgarden/react-modals';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { ColorPicker, IColorPickerProps } from '../ColorPicker';
import { IRGBColor, IColorPickerState } from '../ColorPicker/reducer';
import {
  StyledIcon,
  StyledButton,
  StyledFauxInput,
  StyledDialogPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';

export interface IColorDialogProps extends IColorPickerProps {
  /** A callback function that is called when the color dialog is closed */
  onClose?: (selectedColor: string | IRGBColor | IColorPickerState) => void;
  /** Adjusts the placement of the color dialog */
  placement?: GARDEN_PLACEMENT;
}

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const ColorDialog = forwardRef<
  HTMLButtonElement,
  IColorDialogProps & Omit<HTMLAttributes<HTMLButtonElement>, 'color'>
>(({ color, placement, onClose, labels, ...props }, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState(color);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const mergedRef = mergeRefs([ref, buttonRef]);

  return (
    <>
      <StyledFauxInput tabIndex={-1}>
        <StyledButton
          {...props}
          ref={mergedRef}
          onClick={() => {
            if (referenceElement) {
              setReferenceElement(null);
            } else {
              setReferenceElement(buttonRef.current);
            }
          }}
        >
          <StyledDialogPreview backgroundColor={color} />
          <StyledIcon isRotated={referenceElement}>
            <Chevron />
          </StyledIcon>
        </StyledButton>
      </StyledFauxInput>
      <StyledTooltipModal
        hasArrow={false}
        placement={placement}
        referenceElement={referenceElement}
        onClose={() => {
          setReferenceElement(null);
          onClose && onClose(selectedColor);
        }}
      >
        <StyledTooltipBody>
          <ColorPicker
            color={color}
            labels={labels}
            ref={colorPickerRef}
            onChange={setSelectedColor}
          />
        </StyledTooltipBody>
      </StyledTooltipModal>
    </>
  );
});

ColorDialog.propTypes = {
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
  labels: PropTypes.object,
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]).isRequired
};

ColorDialog.displayName = 'ColorDialog';
