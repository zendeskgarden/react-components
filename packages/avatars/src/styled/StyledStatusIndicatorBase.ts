/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import {
  TRANSITION_DURATION,
  getStatusColor,
  getStatusBorderOffset,
  getStatusSize,
  IStyledStatusIndicatorProps
} from './utility';

const COMPONENT_ID = 'avatars.status-indicator.base';

const iconFadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const sizeStyles = (props: IStyledStatusIndicatorProps) => {
  const offset = getStatusBorderOffset(props);
  const size = getStatusSize(props, offset);

  /**
   * 1. because we are using the stroke icon instead of fill due to artifacts in visual appearance,
   *    we need to remove the circle
   * 2. when @zendeskgarden/css-bedrock is present, max-height needs to be unset due to icon being
   *    resized incorrectly
   */
  return css`
    border: ${offset} ${props.theme.borderStyles.solid};
    border-radius: ${size};
    width: ${size};
    min-width: ${size};
    height: ${size};
    line-height: ${size};

    & > svg {
      position: absolute;
      top: -${offset};
      left: -${offset};
      transform-origin: 50% 50%;
      animation: ${iconFadeIn} ${TRANSITION_DURATION}s;
      max-height: unset; /* [2] */

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='transfers'] {
        transform: scale(${props.theme.rtl ? -1 : 1}, 1);
      }

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='away'] circle {
        display: none; /* [1] */
      }
    }
  `;
};

const colorStyles = (props: IStyledStatusIndicatorProps) => {
  let backgroundColor = getStatusColor(props.type, props.theme);
  let borderColor = backgroundColor;

  if (props.type === 'offline') {
    borderColor = getStatusColor(props.type, props.theme);
    backgroundColor = props.theme.palette.white as string;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${props.theme.palette.white};
  `;
};

export const StyledStatusIndicatorBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStatusIndicatorProps>`
  transition: inherit;

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStatusIndicatorBase.defaultProps = {
  theme: DEFAULT_THEME,
  size: 'small'
};
