/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { FauxInput } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import ChevronSVG from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';
import CompactChevronSVG from '@zendeskgarden/svg-icons/src/12/chevron-down-stroke.svg';
import { VALIDATION } from '../../utils/validation';

const COMPONENT_ID = 'dropdowns.select';

const isInvalid = (validation?: VALIDATION) => {
  return validation === 'warning' || validation === 'error';
};

interface IStyledSelectIconProps {
  isCompact?: boolean;
}

const getIconSizeStyles = (props: IStyledSelectIconProps & ThemeProps<DefaultTheme>) => {
  let size = `${props.theme.space.base * 10}px`;

  if (props.isCompact) {
    size = `${props.theme.space.base * 8}px`;
  }

  return css`
    width: ${size};
    height: ${size};
  `;
};

const StyledSelectIcon = styled.div<IStyledSelectIconProps>`
  display: flex;
  position: absolute;
  top: 0;
  /* stylelint-disable-next-line property-no-unknown */
  ${props => (props.theme.rtl ? 'left' : 'right')}: 0;
  align-items: center;
  justify-content: center;
  /* prettier-ignore */
  transition: color 0.25s ease-in-out,
    transform 0.25s ease-in-out,
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out;
  color: ${props => getColor('neutralHue', 600, props.theme)};

  ${props => getIconSizeStyles(props)};
`;

StyledSelectIcon.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledSelectProps {
  /** Displays select open state */
  isOpen?: boolean;
  isCompact?: boolean;
  isBare?: boolean;
  /** Applies inset `box-shadow` styling on focus */
  focusInset?: boolean;
  disabled?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  validation?: VALIDATION;
}

const StyledSelect = styled(FauxInput).attrs<IStyledSelectProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation)
}))<IStyledSelectProps>`
  position: relative;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: calc(${props =>
  (props.theme.space.base * 10) / 14} * 1em);
  text-align: ${props => props.theme.rtl && 'right'};

  ${StyledSelectIcon} {
    transform: ${props => {
      if (!props.isOpen) {
        return undefined;
      }

      if (props.theme.rtl) {
        return 'rotate(-180deg) translateY(-1px)';
      }

      return 'rotate(180deg) translateY(-1px)';
    }};
    color: ${props => {
      if (props.disabled) {
        return getColor('neutralHue', 400, props.theme);
      }

      if (props.isHovered) {
        return getColor('neutralHue', 700, props.theme);
      }

      return getColor('neutralHue', 600, props.theme);
    }};
  }

  :hover {
    ${StyledSelectIcon} {
      color: ${props => !props.disabled && getColor('neutralHue', 700, props.theme)};
    }
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSelect.defaultProps = {
  theme: DEFAULT_THEME
};

export const SelectWrapper = React.forwardRef<
  HTMLDivElement,
  IStyledSelectProps & HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <StyledSelect
      ref={ref}
      data-test-is-open={props.isOpen}
      data-test-is-focused={props.isFocused}
      data-test-is-hovered={props.isHovered}
      {...props}
    >
      {children}
      {!props.isBare && (
        <StyledSelectIcon isCompact={props.isCompact}>
          {props.isCompact ? <CompactChevronSVG /> : <ChevronSVG />}
        </StyledSelectIcon>
      )}
    </StyledSelect>
  );
});
