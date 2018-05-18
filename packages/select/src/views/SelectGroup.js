/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import { TextGroup } from '@zendeskgarden/react-textfields';

const COMPONENT_ID = 'select.select_group';

/**
 * Accepts all `<div>` props
 */
const SelectGroup = TextGroup.extend.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

SelectGroup.propTypes = {
  inline: PropTypes.bool
};

/** @component */
export default SelectGroup;
