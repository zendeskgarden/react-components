/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  getFocusBoxShadow,
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor
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

/*
 * 1. Provide means for styling lower range on WebKit.
 */
const colorStyles = ({
  theme,
  $hasLowerTrack
}: ThemeProps<DefaultTheme> & IStyledRangeInputProps) => {
  const options = { theme, variable: 'background.primaryEmphasis' };
  const thumbBackgroundColor = getColor(options);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColor({ variable: 'shadow.small', theme })
  );
  const thumbFocusBoxShadow = getFocusBoxShadow({ theme });
  const thumbActiveBackgroundColor = getColor({
    ...options,
    dark: { offset: -200 },
    light: { offset: 200 }
  });
  const thumbActiveBorderColor = thumbBorderColor;
  const thumbDisabledBackgroundColor = getColor({ theme, variable: 'border.emphasis' });
  const thumbDisabledBorderColor = thumbDisabledBackgroundColor;
  const thumbHoverBackgroundColor = getColor({
    ...options,
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const thumbHoverBorderColor = thumbHoverBackgroundColor;
  const trackBackgroundColor = getColor({
    theme,
    variable: 'border.emphasis',
    dark: { offset: 100 },
    light: { offset: -200 }
  });
  const trackLowerBackgroundColor = $hasLowerTrack ? thumbBackgroundColor : '';
  const trackBackgroundImage = $hasLowerTrack
    ? `linear-gradient(${trackLowerBackgroundColor}, ${trackLowerBackgroundColor})`
    : '';
  const trackDisabledBackgroundColor = getColor({
    theme,
    variable: 'background.disabled',
    transparency: theme.opacity[200]
  });
  const trackDisabledLowerBackgroundColor = $hasLowerTrack
    ? getColor({ theme, variable: 'border.emphasis' })
    : '';
  const trackDisabledBackgroundImage = $hasLowerTrack
    ? `linear-gradient(${trackDisabledLowerBackgroundColor}, ${trackDisabledLowerBackgroundColor})`
    : '';

  return css`
    ${trackStyles(`
      background-color: ${trackBackgroundColor};
      background-image: ${trackBackgroundImage}; /* [1] */
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
      ':focus-visible'
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
        background-color: ${trackDisabledBackgroundColor};
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

/*
 * 1. Reset for IE.
 */
const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const thumbSize = `${theme.space.base * 5}px`;
  const trackHeight = `${theme.space.base * 1.5}px`;
  const trackBorderRadius = trackHeight;
  const trackMargin = math(`(${thumbSize} - ${trackHeight}) / 2 + ${theme.shadowWidths.md}`);
  const thumbMargin = math(`(${trackHeight} - ${thumbSize}) / 2`);

  return css`
    ${StyledLabel}:not([hidden]) + &,
    ${StyledHint} + &,
    ${StyledMessage} + &,
    & + ${StyledHint},
    & + ${StyledMessage} {
      margin-top: ${`${theme.space.base * 2}px`};
    }

    ${trackStyles(`
      margin: ${trackMargin} 0;
      border-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `)};

    ${thumbStyles(`
      margin: ${thumbMargin} 0; /* [1] */
      width: ${thumbSize};
      height: ${thumbSize};
    `)}

    ${trackLowerStyles(`
      border-top-${theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      border-bottom-${theme.rtl ? 'right' : 'left'}-radius: ${trackBorderRadius};
      height: ${trackHeight};
    `)}
  `;
};

interface IStyledRangeInputProps {
  $backgroundSize?: number | string;
  $hasLowerTrack?: boolean;
}

export const StyledRangeInput = styled.input.attrs<IStyledRangeInputProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'range',
  style: {
    backgroundSize: props.$hasLowerTrack && props.$backgroundSize
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

  ${sizeStyles};

  ${props =>
    thumbStyles(`
      appearance: none;
      transition: box-shadow .1s ease-in-out;
      border: ${props.theme.borders.md};
      border-radius: 100%;
      box-sizing: border-box;
    `)}

  ${colorStyles};

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
  $backgroundSize: '0%',
  $hasLowerTrack: true,
  theme: DEFAULT_THEME
};
