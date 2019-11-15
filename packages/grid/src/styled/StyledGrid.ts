/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.grid';

export interface IStyledGridProps {
  isFluid?: boolean;
  isDebug?: boolean;
}

export const StyledGrid = styled.div.attrs<IStyledGridProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames({
    // Container types
    [GridStyles['container-fluid']]: props.isFluid,
    [GridStyles.container]: !props.isFluid,

    // Debug styling
    [GridStyles[`is-debug`]]: props.isDebug,

    // RTL styling
    [GridStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledGridProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
