/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Children, cloneElement } from 'react';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getHeight as getInputHeight } from './StyledInput';

const COMPONENT_ID = 'dropdowns.combobox.icon';

interface IStyledIconProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
  isEnd?: boolean;
}

const sizeStyles = (props: IStyledIconProps) => {
  const size = props.theme.iconSizes.md;
  const position = math(`(${getInputHeight(props)} - ${size}) / 2`);
  const margin = `${props.theme.space.base * 2}px`;
  let side;

  if (props.isEnd) {
    side = props.theme.rtl ? 'right' : 'left';
  } else {
    side = props.theme.rtl ? 'left' : 'right';
  }

  return css`
    top: ${position};
    /* stylelint-disable-next-line */
    margin-${side}: ${margin}; 
    width: ${size};
    height: ${size};
  `;
};

export const StyledIcon = styled(
  ({ children, theme /* eslint-disable-line @typescript-eslint/no-unused-vars */, ...props }) =>
    cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledIconProps>`
  position: sticky;
  flex-shrink: 0;

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
