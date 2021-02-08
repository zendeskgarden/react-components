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
import mergeRefs from 'react-merge-refs';
import { GARDEN_PLACEMENT } from '@zendeskgarden/react-modals';
import Chevron from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import { ColorPicker, IColorPickerProps } from '../ColorPicker';
import { IColor } from '../../utils/types';
import {
  StyledIcon,
  StyledButton,
  StyledFauxInput,
  StyledDialogPreview,
  StyledTooltipModal,
  StyledTooltipBody
} from '../../styled';

export interface IColorDialogProps extends IColorPickerProps {
  /**
   * Handles close actions. Can be triggered from the backdrop.
   *
   * @param {Object} color An IColor value
   */
  onClose?: (color: IColor) => void;
  /** Adjusts the placement of the color dialog */
  placement?: GARDEN_PLACEMENT;
}

/**
 * @extends HTMLAttributes<HTMLButtonElement>
 */
export const ColorDialog = forwardRef<
  HTMLButtonElement,
  IColorDialogProps & Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange'>
>(({ color, defaultColor, placement, onChange, onClose, labels, children, ...props }, ref) => {
  const isControlled = color !== null && color !== undefined;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const mergedRef = mergeRefs([ref, buttonRef]);
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>();
  const [uncontrolledColor, setUncontrolledColor] = useState<string | IColor>(
    defaultColor || '#ffffff'
  );

  const onClick = () => {
    if (referenceElement) {
      setReferenceElement(null);
    } else {
      setReferenceElement(buttonRef.current);
    }
  };

  return (
    <>
      {children ? (
        cloneElement(Children.only(children as ReactElement), {
          onClick,
          ref: mergedRef
        })
      ) : (
        <StyledFauxInput tabIndex={-1}>
          <StyledButton {...props} ref={mergedRef} onClick={onClick}>
            <StyledDialogPreview backgroundColor={isControlled ? color : uncontrolledColor} />
            <StyledIcon isRotated={referenceElement}>
              <Chevron />
            </StyledIcon>
          </StyledButton>
        </StyledFauxInput>
      )}
      <StyledTooltipModal
        hasArrow={false}
        focusOnMount={false}
        placement={placement}
        referenceElement={referenceElement}
        onClose={() => {
          setReferenceElement(null);
          onClose && onClose(isControlled ? (color as IColor) : (uncontrolledColor as IColor));
        }}
      >
        <StyledTooltipBody>
          <ColorPicker
            autofocus
            color={color}
            labels={labels}
            ref={colorPickerRef}
            defaultColor={uncontrolledColor}
            onChange={isControlled ? onChange : setUncontrolledColor}
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
  onChange: PropTypes.func,
  labels: PropTypes.object,
  color: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string]),
  defaultColor: PropTypes.oneOfType<any>([PropTypes.object, PropTypes.string])
};

ColorDialog.displayName = 'ColorDialog';
