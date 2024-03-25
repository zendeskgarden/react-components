/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  getColorV8,
  getFocusBoxShadow,
  retrieveComponentStyles,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.range';

const thumbStyles = (styles: string, modifier = '') => {
  return `
    &${modifier}::-moz-range-thumb {
      ${styles}
    }

    &${modifier}::-ms-thumb {
      ${styles}
    }

    &${modifier}::-webkit-slider-thumb {
      ${styles}
    }
  `;
};

const trackStyles = (styles: string, modifier = '') => {
  return `
    &${modifier}::-moz-range-track {
      ${styles}
    }

    &${modifier}::-ms-track {
      ${styles}
    }

    &${modifier}::-webkit-slider-runnable-track {
      ${styles}
    }
  `;
};

const trackLowerStyles = (styles: string, modifier = '') => {
  return `
    &${modifier}::-moz-range-progress {
      ${styles}
    }

    &${modifier}::-ms-fill-lower {
      ${styles}
    }
  `;
};

const colorStyles = (props: ThemeProps<DefaultTheme> & IStyledRangeInputProps) => {
  const SHADE = 600;
  const thumbBackgroundColor = getColorV8('primaryHue', SHADE, props.theme);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = props.theme.shadows.lg(
    math(`${props.theme.space.base} * 1px`),
    math(`${props.theme.space.base} * 2px`),
    getColorV8('neutralHue', SHADE + 200, props.theme, 0.24)!
  );
  const thumbFocusBoxShadow = getFocusBoxShadow({ theme: props.theme });
  const thumbActiveBackgroundColor = getColorV8('primaryHue', SHADE + 100, props.theme);
  const thumbActiveBorderColor = thumbBorderColor;
  const thumbDisabledBackgroundColor = getColorV8('neutralHue', SHADE - 300, props.theme);
  const thumbDisabledBorderColor = thumbDisabledBackgroundColor;
  const thumbHoverBackgroundColor = thumbActiveBackgroundColor;
  const thumbHoverBorderColor = thumbHoverBackgroundColor;
  const trackBackgroundColor = getColorV8('neutralHue', SHADE - 400, props.theme);
  const trackLowerBackgroundColor = props.hasLowerTrack ? thumbBackgroundColor : '';
  const trackBackgroundImage = props.hasLowerTrack
    ? `linear-gradient(${trackLowerBackgroundColor}, ${trackLowerBackgroundColor})`
    : '';
  const trackDisabledLowerBackgroundColor = props.hasLowerTrack ? thumbDisabledBackgroundColor : '';
  const trackDisabledBackgroundImage = props.hasLowerTrack
    ? `linear-gradient(${trackDisabledLowerBackgroundColor}, ${trackDisabledLowerBackgroundColor})`
    : '';

  return css`
    ${trackStyles(`
      background-color: ${trackBackgroundColor};
      background-image: ${trackBackgroundImage}; /* provide means for styling lower range on WebKit */
    `)}

    ${thumbStyles(`
      border-color: ${thumbBorderColor};
      box-shadow: ${thumbBoxShadow};
      background-color: ${thumbBackgroundColor};
    `)}

    ${trackLowerStyles(`
      background-color: ${trackLowerBackgroundColor};
    `)}

    ${thumbStyles(
      `
        transition:
          border-color .25s ease-in-out,
          background-color .25s ease-in-out;
        border-color: ${thumbHoverBorderColor};
        background-color: ${thumbHoverBackgroundColor};
      `,
      ':hover'
    )}

    ${thumbStyles(
      `
        box-shadow: ${thumbFocusBoxShadow};
      `,
      '[data-garden-focus-visible="true"]'
    )}

    ${thumbStyles(
      `
        border-color: ${thumbActiveBorderColor};
        background-color: ${thumbActiveBackgroundColor};
      `,
      ':active'
    )}

    ${trackStyles(
      `
        background-image: ${trackDisabledBackgroundImage};
      `,
      ':disabled'
    )}

    ${thumbStyles(
      `
        border-color: ${thumbDisabledBorderColor};
        box-shadow: none;
        background-color: ${thumbDisabledBackgroundColor};
      `,
      ':disabled'
    )}

    ${trackLowerStyles(
      `
        background-color: ${trackDisabledLowerBackgroundColor};
      `,
      ':disabled'
    )}
  `;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const thumbSize = math(`${props.theme.space.base} * 5px`);
  const trackHeight = math(`${props.theme.space.base} * 1.5px`);
  const trackBorderRadius = trackHeight;
  const trackMargin = math(`(${thumbSize} - ${trackHeight}) / 2 + ${props.theme.shadowWidths.md}`);
  const thumbMargin = math(`(${trackHeight} - ${thumbSize}) / 2`);

  return css`
    /* stylelint-disable */
    ${StyledLabel}:not([hidden]) + &,
    ${StyledHint} + &,
    ${StyledMessage} + &,
    & + ${StyledHint},
    & + ${StyledMessage} {
      margin-top: ${math(`${props.theme.space.base} * 2px`)};
    }
    /* stylelint-enable */

    ${trackStyles(`
      margin: ${trackMargin} 0;
      border-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `)};

    ${thumbStyles(`
      margin: ${thumbMargin} 0; /* reset for IE */
      width: ${thumbSize};
      height: ${thumbSize};
    `)}

    ${trackLowerStyles(`
      border-top-${props.theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      border-bottom-${props.theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `)}
  `;
};

interface IStyledRangeInputProps {
  backgroundSize?: number | string;
  hasLowerTrack?: boolean;
}

export const StyledRangeInput = styled.input.attrs<IStyledRangeInputProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'range',
  style: {
    backgroundSize: props.hasLowerTrack && props.backgroundSize
  }
}))<IStyledRangeInputProps>`
  appearance: none;
  direction: ${props => props.theme.rtl && 'rtl'};
  margin: 0; /* reset for WebKit & Firefox */
  background-color: inherit; /* reset for Firefox (disabled) */
  cursor: pointer;
  padding: 0; /* reset for IE */
  width: 100%;
  vertical-align: middle;

  ${props =>
    trackStyles(`
      appearance: none;
      border-color: transparent; /* reset for IE */
      background-repeat: repeat-y;
      background-size: 0;
      background-position: ${props.theme.rtl ? '100% 100%' : '0% 0%'};
      width: 99.8%; /* fix for IE which cuts off the upper track's border radius */
      color: transparent; /* reset for IE */
      box-sizing: border-box; /* reset for IE */
    `)}

  &::-webkit-slider-container,
  &::-webkit-slider-runnable-track {
    background-size: inherit; /* provide means for styling WebKit lower range */
  }

  ${props => sizeStyles(props)};

  ${props =>
    thumbStyles(`
      appearance: none;
      transition: box-shadow .1s ease-in-out;
      border: ${props.theme.borders.md};
      border-radius: 100%;
      box-sizing: border-box;
    `)}

  ${props => colorStyles(props)};

  &::-moz-focus-outer {
    border: 0; /* remove dotted outline from Firefox on focus */
  }

  &::-ms-tooltip {
    display: none; /* reset for IE */
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRangeInput.defaultProps = {
  backgroundSize: '0%',
  hasLowerTrack: true,
  theme: DEFAULT_THEME
};
