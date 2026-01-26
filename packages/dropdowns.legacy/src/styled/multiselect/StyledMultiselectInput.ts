/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles } from '@zendeskgarden/react-theming';
import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';

import { StyledInput } from '../select/StyledInput';

const COMPONENT_ID = 'dropdowns.multiselect_input';

interface IStyledMultiselectInputProps {
  isCompact: boolean;
  $isVisible: boolean;
}

const visibleStyling = ({
  $isVisible,
  isCompact,
  theme
}: IStyledMultiselectInputProps & ThemeProps<DefaultTheme>) => {
  const margin = $isVisible ? `${theme.space.base / 2}px` : 0;
  const minWidth = $isVisible ? `${theme.space.base * 15}px` : 0;
  let height = '0';

  if ($isVisible) {
    height = `${theme.space.base * (isCompact ? 5 : 8)}px`;
  }

  return css`
    opacity: ${!$isVisible && 0};
    margin: ${margin};
    width: ${!$isVisible && 0};
    min-width: ${minWidth};
    height: ${height};
  `;
};

export const StyledMultiselectInput = styled(StyledInput).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  isBare: true
})<IStyledMultiselectInputProps>`
  flex-basis: ${props => props.theme.space.base * 15}px;
  flex-grow: 1;
  align-self: center;
  min-height: 0;

  ${props => visibleStyling(props)};

  ${componentStyles};
`;
