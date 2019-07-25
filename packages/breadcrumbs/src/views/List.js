/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import BreadcrumbStyles from '@zendeskgarden/css-breadcrumbs';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.list';

/**
 * Accepts all `<ol>` props
 */
const List = styled.ol.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(BreadcrumbStyles['c-breadcrumb'], {
    // RTL
    [BreadcrumbStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

/** @component */
export default List;
