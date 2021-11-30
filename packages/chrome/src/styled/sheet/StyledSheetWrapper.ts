/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_wrapper';

interface IStyledSheetWrapperProps {
  isOpen?: boolean;
  isAnimated?: boolean;
  placement?: 'start' | 'end';
  size?: string;
}

export const StyledSheetWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSheetWrapperProps & ThemeProps<DefaultTheme>>`
  display: flex;
  position: relative;
  flex-direction: column;
  transform: ${props => {
    const translateValues = [-100, 100];
    let translation = 'translateX(0%)';

    if (props.isOpen) {
      return translation;
    }

    if (props.theme.rtl) {
      translateValues.reverse();
    }

    if (props.placement === 'end') {
      translation = `translateX(${translateValues[1]}%)`;
    } else if (props.placement === 'start') {
      translation = `translateX(${translateValues[0]}%)`;
    }

    return translation;
  }};
  transition: ${props => props.isAnimated && 'transform 250ms ease-in-out'};
  min-width: ${props => props.size};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSheetWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
