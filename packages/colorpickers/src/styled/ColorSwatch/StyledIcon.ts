/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledColorSwatchInput } from './StyledColorSwatchInput';

const COMPONENT_ID = 'colorpickers.colorswatch_check';

export const StyledIcon = styled(CheckIcon as 'svg').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  width: 100%;
  height: 100%;

  ${StyledColorSwatchInput}:checked ~ & {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
