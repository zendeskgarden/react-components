/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, getLineHeight, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { stripUnit } from 'polished';
import { StyledInput } from './StyledInput';
import { IStyledSelectProps } from './StyledSelect';
import { SelectWrapper } from './SelectWrapper';

const sizeStyles = (props: IStyledSelectProps & ThemeProps<DefaultTheme>) => {
  const tagHeight = props.isCompact ? 20 : 32;
  const inputHeight = props.isCompact ? 32 : 40;
  const tagMargin = props.theme.space.base / 2;
  const inputBorder = props.isBare ? 0 : stripUnit(props.theme.borderWidths.sm);
  const verticalPadding = `${(inputHeight - tagHeight - inputBorder * 2 - tagMargin * 2) / 2}px`;
  const horizontalPadding = `${props.theme.space.base * 2}px`;

  return css`
    padding-top: ${verticalPadding};
    padding-bottom: ${verticalPadding};
    /* stylelint-disable-next-line property-no-unknown */
    padding-${props.theme.rtl ? 'right' : 'left'}: ${horizontalPadding};
  `;
};

export const StyledMultiSelect = styled(SelectWrapper)`
  display: inline-flex;
  flex-wrap: wrap;

  ${props => sizeStyles(props)};
`;

StyledMultiSelect.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledItemWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: ${props => props.theme.space.base / 2}px;
  max-width: 100%;
`;

StyledItemWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMultiselectInputProps extends ThemeProps<DefaultTheme> {
  isCompact: boolean;
  isVisible: boolean;
}

const visibleStyling = (props: IStyledMultiselectInputProps) => {
  const margin = props.isVisible ? `${props.theme.space.base / 2}px` : 0;
  const minWidth = props.isVisible ? `${props.theme.space.base * 15}px` : 0;
  let height = '0';

  if (props.isVisible) {
    height = `${props.theme.space.base * (props.isCompact ? 5 : 8)}px`;
  }

  return css`
    opacity: ${!props.isVisible && 0};
    margin: ${margin};
    width: ${!props.isVisible && 0};
    min-width: ${minWidth};
    height: ${height};
  `;
};

export const StyledMultiselectInput = styled(StyledInput)<IStyledMultiselectInputProps>`
  flex-basis: ${props => props.theme.space.base * 15}px;
  flex-grow: 1;
  align-self: center;
  min-height: 0;

  ${props => visibleStyling(props)};
`;

StyledMultiselectInput.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMoreAnchorProps {
  isCompact?: boolean;
  isDisabled?: boolean;
}

export const StyledMoreAnchor = styled.div<IStyledMoreAnchorProps>`
  display: inline-block;
  cursor: ${props => (props.isDisabled ? 'default' : 'pointer')};
  overflow: hidden;
  user-select: none;
  text-overflow: ellipsis;
  line-height: ${props =>
    props.isCompact ? '1em' : getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  white-space: nowrap;
  color: ${props =>
    props.isDisabled
      ? getColor('neutralHue', 400, props.theme)
      : getColor('primaryHue', 600, props.theme)};

  :hover {
    text-decoration: ${props => !props.isDisabled && 'underline'};
  }
`;

StyledMoreAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
