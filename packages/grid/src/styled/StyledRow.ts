/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.row';

export interface IStyledRowProps {
  /** Enables margin for rows and padding for columns  */
  gutters?: boolean;
  /** Use flexbox alignment utilities to vertically align content */
  alignItems?: 'start' | 'center' | 'end';
  /** Use flexbox justify utilities to justify content */
  justifyContent?: 'start' | 'center' | 'end' | 'around' | 'between';
}

/**
 * Accepts all `<div>` props
 */
export const StyledRow = styled.div.attrs<IStyledRowProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(GridStyles.row, {
    [GridStyles['no-gutters']]: !props.gutters,
    [GridStyles[`align-items-${props.alignItems}`]]: props.alignItems,
    [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent
  })
}))<IStyledRowProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRow.defaultProps = {
  gutters: true
};
