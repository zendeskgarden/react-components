/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext, ButtonHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../styled';
import { ButtonGroupContext } from './ButtonGroup';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
  const focusInset = props.focusInset || useContext(ButtonGroupContext);

  return <StyledButton ref={ref} focusInset={focusInset} {...props} />;
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

(Button as any).hasType = () => Button;

/** @component */
export default Button;
