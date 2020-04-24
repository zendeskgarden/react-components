/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps, css } from 'styled-components';
import { math } from 'polished';
import { FauxInput } from '@zendeskgarden/react-forms';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { VALIDATION } from '../../utils/validation';

const COMPONENT_ID = 'dropdowns.select';

const isInvalid = (validation?: VALIDATION) => {
  return validation === 'warning' || validation === 'error';
};

interface IStyledSelectIconProps {
  isCompact?: boolean;
  isBare?: boolean;
}

const getIconWrapperSize = (props: IStyledSelectIconProps & ThemeProps<DefaultTheme>) => {
  if (props.isCompact) {
    return `${props.theme.space.base * 8}px`;
  }

  return `${props.theme.space.base * 10}px`;
};

export const StyledSelectIcon = styled.div<IStyledSelectIconProps>`
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
  width: ${props => getIconWrapperSize(props)};
  height: ${props => getIconWrapperSize(props)};
  color: ${props => getColor('neutralHue', 600, props.theme)};
`;

StyledSelectIcon.defaultProps = {
  theme: DEFAULT_THEME
};

const getIconSize = (props: IStyledSelectIconProps & ThemeProps<DefaultTheme>) => {
  return props.isCompact ? props.theme.iconSizes.sm : props.theme.iconSizes.md;
};

export const StyledStartIcon = styled.div<IStyledSelectIconProps>`
  display: flex;
  position: absolute;
  top: 0;
  /* stylelint-disable-next-line property-no-unknown */
  ${props => (props.theme.rtl ? 'right' : 'left')}: 0;
  align-items: center;
  justify-content: center;
  width: ${props => getIconWrapperSize(props)};
  height: ${props => (props.isBare ? 'inherit' : getIconWrapperSize(props))};
  color: ${props => getColor('neutralHue', 400, props.theme)};

  * {
    width: ${props => getIconSize(props)};
    height: ${props => getIconSize(props)};
  }
`;

StyledStartIcon.defaultProps = {
  theme: DEFAULT_THEME
};

const sizeStyles = (props: IStyledSelectProps & ThemeProps<DefaultTheme>) => {
  const tagMargin = `${props.theme.space.base}px`;
  const tagBorderWidth = math(`${props.theme.borderWidths.sm} * 2`);
  let tagMinimumWidth = `${props.theme.space.base * 22.5}px`;
  let selectPadding = `${props.theme.space.base * 12}px`;

  if (props.isCompact) {
    tagMinimumWidth = `${props.theme.space.base * 13.5}px`;
    selectPadding = `${props.theme.space.base * 10}px`;
  }

  return css`
    min-width: ${math(`${tagMinimumWidth} + ${selectPadding} + ${tagMargin} + ${tagBorderWidth}`)};
  `;
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
  isShowingStart?: boolean;
}

export const StyledSelect = styled(FauxInput).attrs<IStyledSelectProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-invalid': isInvalid(props.validation),
  theme: props.theme
}))<IStyledSelectProps>`
  position: relative;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  /* stylelint-disable property-no-unknown */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props => getIconWrapperSize(props)};
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.isShowingStart && getIconWrapperSize(props)};
  /* stylelint-enable property-no-unknown */

  ${props => sizeStyles(props)};

  ${StyledSelectIcon} {
    transform: ${props => {
      if (!props.isOpen) {
        return undefined;
      }

      if (props.theme.rtl) {
        return 'rotate(-180deg)';
      }

      return 'rotate(180deg)';
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

export const StyledOverflowWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

StyledOverflowWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
