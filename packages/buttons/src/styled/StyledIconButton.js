/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledButton, getLineHeight } from './StyledButton';
import { StyledIcon } from './StyledIcon';

const COMPONENT_ID = 'buttons.icon_button';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const iconButtonStyles = props => {
  const lineHeight = getLineHeight(props);
  const size = math(`${lineHeight} * 1px`);

  return css`
    border: ${props.basic && 'none'};
    padding: 0;
    width: ${size};
    min-width: auto;
    height: ${size};
  `;
};

const iconStyles = props => {
  const size =
    props.size === SIZE.LARGE
      ? math(`${props.theme.space.base * 6} * 1px`)
      : math(`${props.theme.space.base * 4} * 1px`);

  return css`
    width: ${size};
    height: ${size};
  `;
};

/**
 * Accepts all `<button>` props
 */
export const StyledIconButton = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => iconButtonStyles(props)};

  ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
