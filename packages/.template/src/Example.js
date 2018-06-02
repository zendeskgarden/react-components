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

const COMPONENT_ID = 'example.component_id';

const Example = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames('example-class', {
      // RTL
      'example-rtl-class': isRtl(props),

      // Styles
      'example-cool-class': props.coolProp
    })
})`
  color: red;

  :hover {
    color: blue;
  }

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Example.propTypes = {
  coolProp: PropTypes.bool
};

/** @component */
export default Example;
