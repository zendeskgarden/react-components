/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.slider_track';

interface IStyledSliderTrackProps {
  backgroundSize?: number;
  backgroundPosition?: number;
  isDisabled?: boolean;
}

const colorStyles = (props: IStyledSliderTrackProps & ThemeProps<DefaultTheme>) => {
  const SHADE = 600;
  const backgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const backgroundImageColor = getColor('primaryHue', SHADE, props.theme);
  const disabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);

  return css`
    background-color: ${backgroundColor};
    background-image: linear-gradient(${backgroundImageColor}, ${backgroundImageColor});

    &[aria-disabled='true'] {
      background-image: linear-gradient(${disabledBackgroundColor}, ${disabledBackgroundColor});
    }
  `;
};

const sizeStyles = (props: IStyledSliderTrackProps & ThemeProps<DefaultTheme>) => {
  const height = math(`${props.theme.space.base} * 1.5px`);
  const backgroundPosition = math(`${props.backgroundPosition} * 1px`);
  const backgroundSize = math(`${props.backgroundSize} * 1px`);
  const borderRadius = height;
  const marginTop = math(`${height} / -2`);
  const padding = math(`${props.theme.space.base} * 2.5px`);

  return css`
    margin-top: ${marginTop};
    border-radius: ${borderRadius};
    background-position: ${backgroundPosition};
    background-size: ${backgroundSize};
    padding: 0 ${padding};
  `;
};

export const StyledSliderTrack = styled.div.attrs<IStyledSliderTrackProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'aria-disabled': props.isDisabled
}))<IStyledSliderTrackProps>`
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

StyledSliderTrack.defaultProps = {
  backgroundSize: 0,
  backgroundPosition: 0,
  theme: DEFAULT_THEME
};
