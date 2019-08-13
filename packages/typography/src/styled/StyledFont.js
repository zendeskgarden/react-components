/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { math } from 'polished';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.font';

const SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
  XXXL: 'xxxl'
};

const fontStyles = props => {
  const lineHeight = props.theme.lineHeights[props.size];
  const monospace = props.monospace && [SIZE.SM, SIZE.MD, SIZE.LG].indexOf(props.size) !== -1;
  const fontFamily = monospace && props.theme.fonts.mono;
  const fontSize = monospace
    ? math(`${props.theme.fontSizes[props.size]} - 1px`)
    : props.theme.fontSizes[props.size];
  const direction = isRtl(props) ? 'rtl' : 'ltr';

  return css`
    line-height: ${lineHeight};
    font-family: ${fontFamily};
    font-size: ${fontSize};
    direction: ${direction};
  `;
};

export const StyledFont = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => fontStyles(props)};
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFont.propTypes = {
  monospace: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SM, SIZE.MD, SIZE.LG, SIZE.XL, SIZE.XXL, SIZE.XXXL]),
  theme: PropTypes.object
};

StyledFont.defaultProps = {
  size: SIZE.MD,
  theme: DEFAULT_THEME
};
