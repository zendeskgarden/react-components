/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import CalloutStyles from '@zendeskgarden/css-callouts';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'notifications.well';

/**
 * Supports all `<div>` props
 */
const Well = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(CalloutStyles['c-callout'], {
    // RTL
    [CalloutStyles['is-rtl']]: isRtl(props),

    // Styles
    [CalloutStyles['c-callout--recessed']]: props.recessed,
    [CalloutStyles['c-callout--dialog']]: props.floating
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Well.propTypes = {
  recessed: PropTypes.bool,
  floating: PropTypes.bool
};

/** @component */
export default Well;
