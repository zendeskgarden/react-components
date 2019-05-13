/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import PaginationStyles from '@zendeskgarden/css-pagination';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'pagination.page';

/**
 * Accepts all `<li>` props
 */
const Page = styled.li.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(PaginationStyles['c-pagination__page'], {
    // States
    [PaginationStyles['is-current']]: props.current,
    [PaginationStyles['is-focused']]: props.focused,
    [PaginationStyles['is-hovered']]: props.hovered,
    [PaginationStyles['is-hidden']]: props.hidden
  })
}))`
  /**
   * Due to the efficient rendering of content within React some
   * pages are not re-rendered with a state change. This can lead
   * to some awkward transitions if they are not disabled.
   */
  && {
    transition: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Page.propTypes = {
  current: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  hidden: PropTypes.bool
};

/** @component */
export default Page;
