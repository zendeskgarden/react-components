/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledIcon } from '../styled';
import { useButtonGroupContext } from '../utils/useButtonGroupContext';
import { useSplitButtonContext } from '../utils/useSplitButtonContext';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Determines if danger styling is used */
  isDanger?: boolean;
  /** Determines the button size */
  size?: 'small' | 'medium' | 'large';
  /** Determines if the button stretches to fit its container width */
  isStretched?: boolean;
  /** Determines if primary button styling is used */
  isPrimary?: boolean;
  /** Determines if basic button styling is used */
  isBasic?: boolean;
  /** Determines if link (anchor) button styling is used */
  isLink?: boolean;
  /** Determines if pill styling is used */
  isPill?: boolean;
  /** Determines if inset `box-shadow` styling is applied on focus */
  focusInset?: boolean;
  /** @ignore prop used by `ButtonGroup` */
  isSelected?: boolean;
}

/**
 * Accepts all `<button>` props
 */
const Button: React.FunctionComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const buttonGroupContext = useButtonGroupContext();
  const splitButtonContext = useSplitButtonContext();

  let computedProps = {
    ...props,
    focusInset: props.focusInset || buttonGroupContext !== undefined || splitButtonContext
  };

  if (buttonGroupContext && !props.disabled) {
    if (!props.value) {
      throw new Error('"value" prop must be provided to Button when used within a ButtonGroup');
    }

    computedProps = buttonGroupContext.getButtonProps({
      item: props.value,
      focusRef: React.createRef(),
      isSelected: props.value === buttonGroupContext.selectedItem,
      ...computedProps
    });
  }

  return <StyledButton ref={ref} {...computedProps} />;
});

Button.propTypes = {
  isPrimary: PropTypes.bool,
  isDanger: PropTypes.bool,
  isPill: PropTypes.bool,
  isBasic: PropTypes.bool,
  focusInset: PropTypes.bool,
  isLink: PropTypes.bool,
  isStretched: PropTypes.bool,
  isSelected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Button.defaultProps = {
  size: 'medium'
};

export interface IIconProps extends HTMLAttributes<HTMLElement> {
  /** Determines if the button is rotated */
  isRotated?: boolean;
  /** @ignore */
  children: any;
}

const StartIcon = (props: IIconProps) => <StyledIcon position="start" {...props} />;
const EndIcon = (props: IIconProps) => <StyledIcon position="end" {...props} />;

(Button as any).StartIcon = StartIcon;
(Button as any).EndIcon = EndIcon;

/** @component */
export default Button as React.FunctionComponent<
  IButtonProps & React.RefAttributes<HTMLButtonElement>
> & {
  StartIcon: typeof StartIcon;
  EndIcon: typeof EndIcon;
};
