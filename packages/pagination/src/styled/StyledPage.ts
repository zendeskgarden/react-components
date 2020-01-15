/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import PaginationStyles from '@zendeskgarden/css-pagination';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.page';

export interface IPageProps {
  isCurrent?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  isHidden?: boolean;
}

export const StyledPage = styled.li.attrs<IPageProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(PaginationStyles['c-pagination__page'], {
    // States
    [PaginationStyles['is-current']]: props.isCurrent,
    [PaginationStyles['is-focused']]: props.isFocused,
    [PaginationStyles['is-hovered']]: props.isHovered,
    [PaginationStyles['is-hidden']]: props.isHidden
  }),
  hidden: props.hidden || props.isHidden
}))<IPageProps>`
  box-sizing: border-box;

  /**
   * Due to the efficient rendering of content within React some
   * pages are not re-rendered with a state change. This can lead
   * to some awkward transitions if they are not disabled.
   */
  && {
    transition: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPage.defaultProps = {
  theme: DEFAULT_THEME
};
