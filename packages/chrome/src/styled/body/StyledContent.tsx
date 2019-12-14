/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getHeaderHeight } from '../header/StyledHeader';
import { getFooterHeight } from '../footer/StyledFooter';

const COMPONENT_ID = 'chrome.content';

interface IStyledContentProps {
  hasFooter?: boolean;
}

export const StyledContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledContentProps>`
  display: flex;
  height: ${props =>
    props.hasFooter
      ? `calc(100% - calc(${getHeaderHeight(props)} + ${getFooterHeight(props)}))`
      : `calc(100% - ${getHeaderHeight(props)})`};
  line-height: ${props =>
    stripUnit(props.theme.lineHeights.md) / stripUnit(props.theme.fontSizes.md)};
  color: ${props => props.theme.colors.foreground};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledContent.defaultProps = {
  theme: DEFAULT_THEME
};
