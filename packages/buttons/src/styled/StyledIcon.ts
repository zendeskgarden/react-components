/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  DEFAULT_THEME,
  StyledBaseIcon,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.icon';

interface IStyledIconProps {
  'data-garden-id'?: string;
  $isRotated: boolean;
  $position?: 'start' | 'end';
}

const sizeStyles = (props: IStyledIconProps & ThemeProps<DefaultTheme>) => {
  let marginProperty;

  if (props.$position === 'start') {
    marginProperty = `margin-${props.theme.rtl ? 'left' : 'right'}`;
  } else if (props.$position === 'end') {
    marginProperty = `margin-${props.theme.rtl ? 'right' : 'left'}`;
  }

  return (
    marginProperty &&
    css`
      ${marginProperty}: ${props.theme.space.base * 2}px;
    `
  );
};

export const StyledIcon = styled(StyledBaseIcon).attrs<IStyledIconProps>(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))<IStyledIconProps>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition:
    transform 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${props => sizeStyles(props)};

  ${props => retrieveComponentStyles(props['data-garden-id'], props)};
`;

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
