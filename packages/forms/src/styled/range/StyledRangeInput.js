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
import { StyledHint } from '../common/StyledHint';
import { StyledLabel } from '../common/StyledLabel';
import { StyledMessage } from '../common/StyledMessage';

const COMPONENT_ID = 'forms.range';

const thumbStyles = (styles, modifier) => {
  return `
    &${modifier || ''}::-moz-range-thumb {
      ${styles}
    }

    &${modifier || ''}::-ms-thumb {
      ${styles}
    }

    &${modifier || ''}::-webkit-slider-thumb {
      ${styles}
    }
  `;
};

const trackStyles = (styles, modifier) => {
  return `
    &${modifier || ''}::-moz-range-track {
      ${styles}
    }

    &${modifier || ''}::-ms-track {
      ${styles}
    }

    &${modifier || ''}::-webkit-slider-runnable-track {
      ${styles}
    }
  `;
};

const trackLowerStyles = (styles, modifier) => {
  return `
    &${modifier || ''}::-moz-range-progress {
      ${styles}
    }

    &${modifier || ''}::-ms-fill-lower {
      ${styles}
    }
  `;
};

const colorStyles = props => {
  const SHADE = 600;
  const thumbBackgroundColor = getColor('primaryHue', SHADE, props.theme);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = props.theme.shadows.lg(
    math(`${props.theme.space.base} * 1px`),
    math(`${props.theme.space.base} * 2px`),
    getColor('neutralHue', SHADE + 200, props.theme, 0.24)
  );
  const thumbActiveBackgroundColor = getColor('primaryHue', SHADE + 100, props.theme);
  const thumbDisabledBackgroundColor = getColor('neutralHue', SHADE - 300, props.theme);
  const thumbDisabledBorderColor = thumbDisabledBackgroundColor;
  const thumbFocusBoxShadow = props.theme.shadows.md(
    getColor('primaryHue', SHADE, props.theme, 0.35)
  );
  const trackBackgroundColor = getColor('neutralHue', SHADE - 400, props.theme);
  const trackLowerBackgroundColor = thumbBackgroundColor;
  const trackBackgroundImage = `linear-gradient(${trackLowerBackgroundColor}, ${trackLowerBackgroundColor})`;
  const trackDisabledLowerBackgroundColor = thumbDisabledBackgroundColor;
  const trackDisabledBackgroundImage = `linear-gradient(${trackDisabledLowerBackgroundColor}, ${trackDisabledLowerBackgroundColor})`;

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
        box-shadow: ${thumbFocusBoxShadow};
      `,
      '[data-garden-focus-visible="true"]'
    )}

    ${thumbStyles(
      `
        background-color: ${thumbActiveBackgroundColor}
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
        background-color: ${trackDisabledLowerBackgroundColor}
      `,
      ':disabled'
    )}
  `;
};

const sizeStyles = props => {
  const thumbSize = math(`${props.theme.space.base} * 5px`);
  const trackHeight = math(`${props.theme.space.base} * 1.5px`);
  const trackBorderRadius = trackHeight;
  const trackMargin = math(`(${thumbSize} - ${trackHeight}) / 2 + ${props.theme.shadowWidths.md}`);
  const thumbMargin = math(`(${trackHeight} - ${thumbSize}) / 2`);

  return css`
    /* stylelint-disable */
    ${StyledLabel} + &,
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

export const StyledRangeInput = styled.input.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'range',
  style: {
    backgroundSize: props.backgroundSize
  }
}))`
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

StyledRangeInput.propTypes = {
  backgroundSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.object
};

StyledRangeInput.defaultProps = {
  backgroundSize: '0%',
  theme: DEFAULT_THEME
};
