/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin } from '../common/StyledRange';

const COMPONENT_ID = 'colorpickers.colorpicker_sliders';

interface IStyledSlidersProps {
  $isOpaque?: boolean;
}

export const StyledSliders = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSlidersProps>`
  position: relative;
  /* stylelint-disable property-no-unknown */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 2}px;
  width: 100%;

  ${props =>
    !props.$isOpaque &&
    css`
      & > * {
        position: absolute;
        width: 100%;
        height: ${getTrackMargin(props) * 2 + getTrackHeight(props)}px;
      }

      & > :first-child {
        top: -${getTrackMargin}px;
      }

      & > :last-child {
        bottom: -${getTrackMargin}px;
      }
    `}
  

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliders.defaultProps = {
  theme: DEFAULT_THEME
};
