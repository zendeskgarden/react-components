/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'steppers.step_content';

export interface IStyledContent {
  isActive?: boolean;
}

const inactiveStyling = css`
  max-height: 0 !important; /* stylelint-disable-line */
  & > div {
    visibility: hidden;
  }
`;

export const StyledContent = styled.div.attrs<IStyledContent>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledContent>`
  /* stylelint-disable-next-line max-line-length */
  transition: max-height 0.25s cubic-bezier(0.15, 0.85, 0.35, 1.2), 0.25s visibility 0s linear;
  visibility: visible;
  margin: ${props =>
    `${props.theme.space.base * 1.5}px ${
      props.theme.rtl ? props.theme.space.base * 3 : '0'
    }px ${props.theme.space.base * 1.5}px ${props.theme.rtl ? '0' : props.theme.space.base * 3}px`};
  padding: ${props => props.theme.space.base * 4}px;
  height: auto;
  max-height: 100%;
  overflow: hidden;

  ${props => !props.isActive && inactiveStyling}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME
};
