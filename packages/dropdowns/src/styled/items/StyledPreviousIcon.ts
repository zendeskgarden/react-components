/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PreviousIconSvg from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.previous_item_icon';

interface IStyledPreviousIconProps {
  isDisabled?: boolean;
}

export const StyledPreviousIcon = styled(PreviousIconSvg).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledPreviousIconProps>`
  transform: ${props => props.theme.rtl && 'rotate(180deg)'};
  color: ${props => (props.isDisabled ? 'inherit' : getColor('neutralHue', 600, props.theme))};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPreviousIcon.defaultProps = {
  theme: DEFAULT_THEME
};
