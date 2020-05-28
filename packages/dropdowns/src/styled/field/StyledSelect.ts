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

const iconStyles = (props: IStyledSelectIconProps & ThemeProps<DefaultTheme>, isStart: boolean) => {
  const maxHeight = `${props.theme.space.base * (props.isCompact ? 8 : 10)}px`;
  const padding = `${props.theme.space.base * 3}px`;
  const size = props.theme.iconSizes.md;
  let position;
  let justifyContent;
  let shade;

  if (isStart) {
    position = props.theme.rtl ? 'right' : 'left';
    justifyContent = props.theme.rtl ? 'end' : 'start';
  } else {
    position = props.theme.rtl ? 'left' : 'right';
    justifyContent = props.theme.rtl ? 'start' : 'end';
  }

  if (props.isHovered || props.isFocused) {
    shade = 700;
  } else if (props.disabled) {
    shade = 400;
  } else {
    shade = 600;
  }

  return css`
    display: flex;
    position: absolute;
    top: 0;
    ${position}: 0;
    align-items: center;
    justify-content: ${justifyContent};
    transition: color 0.25s ease-in-out;
    box-sizing: content-box;
    /* stylelint-disable-next-line property-no-unknown */
    padding-${position}: ${padding};
    width: ${size};
    height: 100%;
    max-height: ${maxHeight};
    color: ${getColor('neutralHue', shade, props.theme)};

    & > * {
      width: ${size};
      height: ${size};
    }
  `;
};

interface IStyledStartIconProps {
  isCompact?: boolean;
  isBare?: boolean;
  disabled?: boolean;
}

export const StyledStartIcon = styled.div<IStyledStartIconProps>`
  ${props => iconStyles(props, true)};
`;

StyledStartIcon.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledSelectIconProps extends IStyledStartIconProps {
  isOpen?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
}

export const StyledSelectIcon = styled.div<IStyledSelectIconProps>`
  ${props => iconStyles(props, false)};

  & > svg {
    transform: ${props => props.isOpen && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
    transition: transform 0.25s ease-in-out;
  }
`;

StyledSelectIcon.defaultProps = {
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
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  `${props.theme.space.base * 9}px`};
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.isShowingStart && `${props.theme.space.base * 9}px`};
  /* stylelint-enable property-no-unknown */

  ${props => sizeStyles(props)};

  &:hover ${StyledSelectIcon} {
    color: ${props => getColor('neutralHue', 700, props.theme)};
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
