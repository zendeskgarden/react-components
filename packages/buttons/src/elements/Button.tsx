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
  /** Apply danger styling */
  isDanger?: boolean;
  size?: 'small' | 'medium' | 'large';
  /** Stretch the button to its container width */
  isStretched?: boolean;
  /** Applies primary button styling */
  isPrimary?: boolean;
  /** Applies basic button styling */
  isBasic?: boolean;
  /** Applies link (anchor) button styling */
  isLink?: boolean;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies inset `box-shadow` styling on focus */
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
  isDanger: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isStretched: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isBasic: PropTypes.bool,
  isLink: PropTypes.bool,
  isPill: PropTypes.bool,
  focusInset: PropTypes.bool,
  isSelected: PropTypes.bool
};

Button.defaultProps = {
  size: 'medium'
};

interface IIconProps extends HTMLAttributes<HTMLElement> {
  isRotated?: boolean;
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
