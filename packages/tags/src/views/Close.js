/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import TagStyles from '@zendeskgarden/css-tags';
import { retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.close';

/**
 * Used to close a Tag. Supports all `<div>` props.
 */
const Close = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-label': 'Press delete to remove',
  className: classNames(TagStyles['c-tag__remove'], {
    [TagStyles['is-hovered']]: props.hovered
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Close.propTypes = {
  hovered: PropTypes.bool
};

/** @component */
export default Close;
