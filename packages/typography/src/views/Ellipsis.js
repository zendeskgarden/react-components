/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { retrieveTheme, isRtl } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.ellipsis';

const StyledEllipsis = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  direction: ${props => (isRtl(props) ? 'rtl' : 'ltr')};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/**
 * A component that automatically includes a native `title` attribute
 * and any text-overflow styling.
 *
 * All other props are spread onto the element.
 */
function Ellipsis({ children, title, tag, ...other }) {
  const CustomTagEllipsis = StyledEllipsis.withComponent(tag);

  let textContent = null;

  if (title !== undefined) {
    textContent = title;
  } else if (typeof children === 'string') {
    textContent = children;
  }

  return (
    <CustomTagEllipsis title={textContent} {...other}>
      {children}
    </CustomTagEllipsis>
  );
}

Ellipsis.propTypes = {
  /**
   * Optional override for the auto-generated `title` attribute
   */
  title: PropTypes.string,
  /** Any valid element for the styled component */
  tag: PropTypes.any,
  children: PropTypes.string
};

Ellipsis.defaultProps = {
  tag: 'div'
};

export default Ellipsis;
