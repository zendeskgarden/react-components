/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin } from '../common/StyledRange';

const COMPONENT_ID = 'colorpickers.colorpicker_sliders';

export const StyledSliders = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable property-no-unknown */
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base * 2}px;
  width: 100%;

  & > :first-child {
    top: -${props => getTrackMargin(props.theme)}px;
  }

  & > :last-child {
    bottom: ${props => getTrackHeight(props.theme) - getTrackMargin(props.theme)}px;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliders.defaultProps = {
  theme: DEFAULT_THEME
};
