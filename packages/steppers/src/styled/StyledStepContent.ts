/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { TransitionStatus } from 'react-transition-group/Transition';

const COMPONENT_ID = 'steppers.step_content';

interface ITransitionStyles {
  transitionStatus?: TransitionStatus;
}

const transitionStyles = (props: ITransitionStyles & ThemeProps<DefaultTheme>) => {
  if (props.transitionStatus === 'exiting') {
    return css`
      height: auto;
      max-height: 0 !important; /* stylelint-disable-line */
    `;
  }

  if (props.transitionStatus === 'exited') {
    return css`
      max-height: 0 !important; /* stylelint-disable-line */
    `;
  }

  return undefined;
};

export interface IStyledStepContent extends ITransitionStyles {
  isActive?: boolean;
}

export const StyledStepContent = styled.div.attrs<IStyledStepContent>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStepContent>`
  transition: max-height 0.5s ease-in-out;
  margin: ${props =>
    `${props.theme.space.base * 2}px ${props.theme.rtl ? props.theme.space.base * 3 : '0'}px ${props
      .theme.space.base * 2}px ${props.theme.rtl ? '0' : props.theme.space.base * 3}px`};
  padding: ${props => props.theme.space.base * 4}px;
  overflow: hidden;

  & > div {
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  }

  ${transitionStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStepContent.defaultProps = {
  theme: DEFAULT_THEME
};
