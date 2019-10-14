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

const COMPONENT_ID = 'forms.slider_thumb';

const colorStyles = props => {
  const SHADE = 600;
  const backgroundColor = getColor('primaryHue', SHADE, props.theme);
  const borderColor = backgroundColor;
  const boxShadow = props.theme.shadows.lg(
    math(`${props.theme.space.base} * 1px`),
    math(`${props.theme.space.base} * 2px`),
    getColor('neutralHue', SHADE + 200, props.theme, 0.24)
  );
  const activeBackgroundColor = getColor('primaryHue', SHADE + 100, props.theme);
  const focusBoxShadow = props.theme.shadows.md(getColor('primaryHue', SHADE, props.theme, 0.35));
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  const disabledBorderColor = disabledBackgroundColor;

  return css`
    border-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};

    &:focus {
      box-shadow: ${focusBoxShadow};
    }

    &:active {
      background-color: ${activeBackgroundColor};
    }

    &[disabled] {
      border-color: ${disabledBorderColor};
      box-shadow: none;
      background-color: ${disabledBackgroundColor};
    }
  `;
};

const sizeStyles = props => {
  const size = math(`${props.theme.space.base} * 5px`);
  const marginTop = math(`${size} / -2`);

  return css`
    margin-top: ${marginTop};
    width: ${size};
    height: ${size};
  `;
};

export const StyledSliderThumb = styled.input.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  appearance: none;
  position: absolute;
  top: 50%;
  z-index: 1;
  border: ${props => props.theme.borders.md};
  border-radius: 100%;
  cursor: inherit;
  box-sizing: border-box;
  font-size: 0;

  ${props => sizeStyles(props)};

  &:focus {
    outline: none;
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSliderThumb.propTypes = {
  theme: PropTypes.object
};

StyledSliderThumb.defaultProps = {
  theme: DEFAULT_THEME
};
