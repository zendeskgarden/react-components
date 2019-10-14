/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import math from 'polished/lib/math/math';
import PropTypes from 'prop-types';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider_track';

const colorStyles = props => {
  const SHADE = 600;
  const backgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const backgroundImageColor = props.disabled
    ? getColor('neutralHue', SHADE - 300, props.theme)
    : getColor('primaryHue', SHADE, props.theme);

  return css`
    background-color: ${backgroundColor};
    background-image: linear-gradient(${backgroundImageColor}, ${backgroundImageColor});
  `;
};

const sizeStyles = props => {
  const height = math(`${props.theme.space.base} * 1.5px`);
  const borderRadius = height;
  const marginTop = math(`${height} / -2`);
  const padding = math(`${props.theme.space.base} * 2.5px`);

  return css`
    margin-top: ${marginTop};
    border-radius: ${borderRadius};
    padding: 0 ${padding};
  `;
};

export const StyledSliderTrack = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  background-origin: content-box;
  background-repeat: repeat-y;
  width: 100%;

  ${props => sizeStyles(props)};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliderTrack.propTypes = {
  theme: PropTypes.object
};

StyledSliderTrack.defaultProps = {
  theme: DEFAULT_THEME
};
