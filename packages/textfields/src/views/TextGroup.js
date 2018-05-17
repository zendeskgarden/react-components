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
import TextStyles from '@zendeskgarden/css-forms/dist/text.css';

const COMPONENT_ID = 'textfields.text_group';

/**
 * Accepts all `<div>` props
 */
const TextGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(TextStyles['c-txt'], {
      [TextStyles['c-txt--inline']]: props.inline,

      // RTL
      [TextStyles['is-rtl']]: isRtl(props)
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

TextGroup.propTypes = {
  inline: PropTypes.bool
};

/** @component */
export default TextGroup;
