/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.item_meta';

interface IStyledItemMetaProps {
  isCompact?: boolean;
  isDisabled?: boolean;
}

/**
 * Accepts all `<span>` props
 */
export const StyledItemMeta = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledItemMetaProps>`
  display: ${props => (props.isCompact ? 'none' : 'block')};
  line-height: ${props => props.theme.space.base * 4}px;
  color: ${props => getColor('neutralHue', props.isDisabled ? 400 : 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.sm};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledItemMeta.defaultProps = {
  theme: DEFAULT_THEME
};
