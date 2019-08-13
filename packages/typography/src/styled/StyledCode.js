/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

const COMPONENT_ID = 'typography.code';

const SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
};

const colorStyles = props => {
  const hue = props.hue || 'neutralHue';
  const backgroundColor = getColor(hue, 200, props.theme);
  const shade = hue === 'yellow' ? 800 : 700;
  const foregroundColor = getColor(hue, shade, props.theme);

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledCode = styled(StyledFont).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'code',
  monospace: true
})`
  border-radius: 2px;
  padding: 1.5px;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCode.propTypes = {
  hue: PropTypes.string,
  size: PropTypes.oneOf([SIZE.SM, SIZE.MD, SIZE.LG]),
  theme: PropTypes.object
};

StyledCode.defaultProps = {
  hue: 'neutralHue',
  size: SIZE.MD,
  theme: DEFAULT_THEME
};
