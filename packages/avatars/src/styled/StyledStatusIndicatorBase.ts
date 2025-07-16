/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, keyframes } from 'styled-components';
import { componentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

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
   * 3. prevent arrowhead cutting off in the transfers icon
   */
  return css`
    border: ${offset} ${props.theme.borderStyles.solid};
    border-radius: ${size};
    min-width: ${size};
    height: ${size};
    line-height: ${size};

    & > svg {
      position: absolute;
      top: -${offset};
      inset-inline-start: -${offset};
      transform-origin: 50% 50%;
      animation: ${iconFadeIn} ${TRANSITION_DURATION}s;
      max-height: unset; /* [2] */

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='transfers'] {
        transform: scale(${props.theme.rtl ? -1 : 1}, 1);
        inset-inline-start: ${props.$size === 'extrasmall' ? '-1px' : undefined}; /* [3] */
      }

      /* stylelint-disable-next-line selector-no-qualifying-type */
      &[data-icon-status='away'] circle {
        display: none; /* [1] */
      }
    }
  `;
};

const colorStyles = ({ theme, $type }: IStyledStatusIndicatorProps) => {
  const foregroundColor = getColor({ variable: 'foreground.onEmphasis', theme });
  let backgroundColor;
  let borderColor;

  if ($type === 'offline') {
    borderColor = getStatusColor(theme, $type);
    backgroundColor = getColor({ variable: 'background.default', theme });
  } else {
    backgroundColor = getStatusColor(theme, $type);
    borderColor = backgroundColor;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledStatusIndicatorBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStatusIndicatorProps>`
  transition: inherit;

  ${sizeStyles}
  ${colorStyles}

  ${componentStyles};
`;

StyledStatusIndicatorBase.defaultProps = {
  theme: DEFAULT_THEME,
  $size: 'small'
};
