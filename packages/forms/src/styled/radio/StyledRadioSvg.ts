/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CircleIcon from '@zendeskgarden/svg-icons/src/12/circle-fill.svg';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.radio_svg';

export const StyledRadioSvg = styled(CircleIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: ${props => props.theme.space.base}px;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base / 2}px;
  transform: scale(0.4);
  transition: opacity 0.25 ease-in-out;
  opacity: 0;
  color: ${props => props.theme.colors.background};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRadioSvg.defaultProps = {
  theme: DEFAULT_THEME
};
