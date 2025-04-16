/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { ISheetProps } from '../../types';

const COMPONENT_ID = 'chrome.sheet_wrapper';

interface IStyledSheetWrapperProps {
  $isOpen?: boolean;
  $isAnimated?: boolean;
  $placement?: ISheetProps['placement'];
  $size?: string;
}

const transformStyles = ({
  theme,
  $isAnimated,
  $isOpen,
  $placement
}: IStyledSheetWrapperProps & ThemeProps<DefaultTheme>) => {
  const transition = $isAnimated ? 'transform 250ms ease-in-out' : undefined;
  let transform;

  if ($isOpen) {
    transform = 'translateX(0)';
  } else if ($placement === 'start') {
    transform = `translateX(${theme.rtl ? 100 : -100}%)`;
  } else {
    transform = `translateX(${theme.rtl ? -100 : 100}%)`;
  }

  return css`
    transform: ${transform};
    transition: ${transition};
  `;
};

export const StyledSheetWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetWrapperProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: ${props => props.$size};

  ${transformStyles};

  ${componentStyles};
`;
