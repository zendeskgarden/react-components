/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import PaginationStyles from '@zendeskgarden/css-pagination';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

import { version } from '../../package.json';
const COMPONENT_ID = 'pagination.pagination_view';

/**
 * Accepts all `<ul>` props
 */
const PaginationView = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: props =>
    classNames(PaginationStyles['c-pagination'], {
      // RTL
      [PaginationStyles['is-rtl']]: isRtl(props)
    })
})`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default PaginationView;
