/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledInput } from './StyledInput';
import { SelectWrapper } from './StyledSelect';

/**
 * TODO: themify these values
 */
export const StyledMultiSelect = styled(SelectWrapper)`
  display: flex;
  flex-wrap: wrap;
  padding-top: ${props => (props.isCompact ? '3px' : '2px')};
  padding-bottom: ${props => (props.isCompact ? '3px' : '2px')};
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
  props.theme.space.base * 2}px;
`;

StyledMultiSelect.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledItemWrapper = styled.div`
  margin: ${props => props.theme.space.base / 2}px;
  max-width: 100%;
`;

StyledItemWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMultiselectInputProps {
  isCompact: boolean;
  isVisible: boolean;
}

const hiddenStyling = css`
  opacity: 0;
  margin: 0;
  width: 0;
  min-width: 0;
  height: 0;
  min-height: 0;
`;

export const StyledMultiselectInput = styled(StyledInput)<IStyledMultiselectInputProps>`
  flex-basis: ${props => props.theme.space.base * 15}px;
  flex-grow: 1;
  margin: ${props => props.theme.space.base / 2}px;
  width: inherit;
  min-width: ${props => props.theme.space.base * 15}px;
  line-height: ${props => (props.isCompact ? 20 / 14 : 32 / 14)};

  ${props => !props.isVisible && hiddenStyling}
`;

StyledMultiselectInput.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledMoreAnchor = styled.div`
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
  vertical-align: baseline;
  text-decoration: none;
  user-select: none;
  line-height: 1em;
  white-space: normal;
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
