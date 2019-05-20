/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.row';

/**
 * Accepts all `<div>` props
 */
const Row = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(GridStyles.row, {
    [GridStyles['no-gutters']]: !props.gutters,
    [GridStyles[`align-items-${props.alignItems}`]]: props.alignItems,
    [GridStyles[`justify-content-${props.justifyContent}`]]: props.justifyContent
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Row.propTypes = {
  /** Enables margin for rows and padding for columns  */
  gutters: PropTypes.bool,
  /** Use flexbox alignment utilities to vertically align content */
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  /** Use flexbox justify utilities to justify content */
  justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};

Row.defaultProps = {
  gutters: true
};

/** @component */
export default Row;
