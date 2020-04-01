/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import CheckIcon from '@zendeskgarden/svg-icons/src/12/check-sm-fill.svg';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from './StyledCheckInput';
import { StyledCheckLabel } from './StyledCheckLabel';

const COMPONENT_ID = 'forms.check_svg';

export const StyledCheckSvg = styled(CheckIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: ${props => props.theme.space.base}px;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.space.base / 2}px;
  transition: opacity 0.25 ease-in-out;
  opacity: 0;
  color: ${props => props.theme.colors.background};

  /* stylelint-disable selector-type-case */
  ${StyledCheckInput}:checked ~ ${StyledCheckLabel} > & {
    opacity: 1;
  }

  ${StyledCheckInput}:indeterminate ~ ${StyledCheckLabel} > & {
    opacity: 0;
  }
  /* stylelint-enable selector-type-case */

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCheckSvg.defaultProps = {
  theme: DEFAULT_THEME
};
