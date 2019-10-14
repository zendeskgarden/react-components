/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const sizeStyles = props => {
  const size = props.isCompact ? props.theme.iconSizes.sm : props.theme.iconSizes.md;

  return css`
    & svg {
      width: ${size};
      height: ${size};
    }
  `;
};

const COMPONENT_ID = 'forms.media_figure';

export const StyledTextMediaFigure = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  color: ${props => getColor('neutralHue', 400, props.theme)};

  ${props => sizeStyles(props)}

  & svg {
    vertical-align: middle;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledTextMediaFigure.propTypes = {
  isCompact: PropTypes.bool,
  theme: PropTypes.object
};

StyledTextMediaFigure.defaultProps = {
  theme: DEFAULT_THEME
};
