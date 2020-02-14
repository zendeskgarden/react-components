/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getMediaFigureSize } from './StyledMediaFigure';

const COMPONENT_ID = 'dropdowns.media_body';

interface IStyledMediaBodyProps {
  isCompact?: boolean;
}

/**
 * Accepts all `<div>` props
 */
export const StyledMediaBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMediaBodyProps>`
  display: block;
  margin-top: ${props =>
    props.isCompact &&
    math(`${math(`${getMediaFigureSize(props)} - ${props.theme.space.base * 5}px`)} / 2`)};
  overflow: hidden;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMediaBody.defaultProps = {
  theme: DEFAULT_THEME
};
