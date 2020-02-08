/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, getLineHeight, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { StyledInput } from './StyledInput';
import { SelectWrapper, IStyledSelectProps } from './StyledSelect';

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
  ${props => sizeStyles(props)};
`;

StyledMultiSelect.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledMultiSelectItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

StyledMultiSelectItemContainer.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledItemWrapperProps {
  isCompact?: boolean;
}

export const StyledItemWrapper = styled.div<IStyledItemWrapperProps>`
  margin: ${props => props.theme.space.base / 2}px;
  max-width: 100%;
  max-height: ${props =>
    props.isCompact ? props.theme.space.base * 5 : props.theme.space.base * 8}px;
  line-height: 0;
`;

StyledItemWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMultiselectInputProps {
  isCompact: boolean;
  isVisible: boolean;
}

export const StyledMultiselectInput = styled(StyledInput)<IStyledMultiselectInputProps>`
  flex-basis: ${props => props.theme.space.base * 15}px;
  flex-grow: 1;
  opacity: ${props => props.isHidden && 0};
  margin: ${props => (props.isHidden ? 0 : props.theme.space.base / 2)}px;
  width: ${props => (props.isHidden ? 0 : 'inherit')};
  min-width: ${props => (props.isHidden ? 0 : props.theme.space.base * 15)}px;
  height: ${props => props.isHidden && 0};
  min-height: ${props => props.isHidden && 0};
  line-height: ${props =>
    getLineHeight(
      props.isCompact ? props.theme.space.base * 5 : props.theme.space.base * 8,
      props.theme.fontSizes.md
    )};
`;

StyledMultiselectInput.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMoreAnchorProps {
  isCompact?: boolean;
}

export const StyledMoreAnchor = styled.div<IStyledMoreAnchorProps>`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.space.base / 2}px;
  border: none;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  min-width: 0;
  min-height: 1em;
  overflow: hidden;
  vertical-align: baseline;
  text-decoration: none;
  user-select: none;
  text-overflow: ellipsis;
  line-height: ${props =>
    props.isCompact ? '1em' : getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  white-space: nowrap;
  color: ${props => getColor('primaryHue', 600, props.theme)};
  font-size: inherit;
  font-weight: inherit;

  :hover {
    text-decoration: underline;
  }
`;

StyledMoreAnchor.defaultProps = {
  theme: DEFAULT_THEME
};
