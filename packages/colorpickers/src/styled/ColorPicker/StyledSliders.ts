/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin } from '../common/StyledRange';

const COMPONENT_ID = 'colorpickers.colorpicker_sliders';

interface IStyledSlidersProps {
  $isOpaque?: boolean;
}

const sizeStyles = (props: IStyledSlidersProps & ThemeProps<DefaultTheme>) => {
  if (props.$isOpaque) {
    return undefined;
  }

  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);

  return `
    & > * {
      position: absolute;
      width: 100%;
      height: ${trackMargin * 2 + trackHeight}px;
    }

    & > :first-child {
      top: -${trackMargin}px;
    }

    & > :last-child {
      bottom: -${trackMargin}px;
    }
  `;
};

export const StyledSliders = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSlidersProps>`
  position: relative;
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 2}px;
  width: 100%;

  ${sizeStyles}

  ${componentStyles};
`;
