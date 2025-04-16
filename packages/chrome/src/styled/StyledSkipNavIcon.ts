/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import LinkIcon from '@zendeskgarden/svg-icons/src/16/link-stroke.svg';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.skipnav_icon';

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const margin = `${theme.space.base * 2}px`;
  const size = theme.iconSizes.md;

  return css`
    margin-${theme.rtl ? 'left' : 'right'}: ${margin};
    width: ${size};
    height: ${size};
  `;
};

export const StyledSkipNavIcon = styled(LinkIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transform: ${p => p.theme.rtl && 'scaleX(-1)'};
  color: ${p => getColor({ theme: p.theme, variable: 'foreground.subtle' })};

  ${sizeStyles};

  ${componentStyles};
`;
