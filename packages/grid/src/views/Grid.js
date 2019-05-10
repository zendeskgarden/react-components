/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import GridStyles from '@zendeskgarden/css-grid';

const COMPONENT_ID = 'grid.grid';

/**
 * Implemented with the [Bootstrap v4 Flexbox Grid](http://getbootstrap.com/docs/4.0/layout/overview/).
 * Accepts all `<div>` props.
 */
const Grid = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames({
    // Container types
    [GridStyles['container-fluid']]: props.fluid,
    [GridStyles.container]: !props.fluid,

    // Debug styling
    [GridStyles[`is-debug`]]: props.debug,

    // RTL styling
    [GridStyles['is-rtl']]: isRtl(props)
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Grid.propTypes = {
  /** Enables fluid-width grid layout  */
  fluid: PropTypes.bool,
  /** Show debug styling within component */
  debug: PropTypes.bool
};

Grid.defaultProps = {
  fluid: true
};

/** @component */
export default Grid;
