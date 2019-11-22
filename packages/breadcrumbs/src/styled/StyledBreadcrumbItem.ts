/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import BreadcrumbStyles from '@zendeskgarden/css-breadcrumbs';

const COMPONENT_ID = 'breadcrumbs.item';

export interface IStyledBreadcrumbItemProps {
  isCurrent?: boolean;
}

export const StyledBreadcrumbItem = styled.li.attrs<IStyledBreadcrumbItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(BreadcrumbStyles['c-breadcrumb__item'], {
    // State
    [BreadcrumbStyles['is-current']]: props.isCurrent
  })
}))<IStyledBreadcrumbItemProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
