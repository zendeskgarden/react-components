/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { Range } from '@zendeskgarden/react-forms';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_hue';

export const thumbStyles = (styles: string, modifier = '') => {
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

export const trackStyles = (styles: string, modifier = '') => {
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

export const trackLowerStyles = (styles: string, modifier = '') => {
  return `
    &${modifier}::-moz-range-progress {
      ${styles}
    }

    &${modifier}::-ms-fill-lower {
      ${styles}
    }
  `;
};

export const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const SHADE = 600;
  const thumbBackgroundColor = getColor(props.theme.colors.background, SHADE, props.theme);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbBoxShadow = props.theme.shadows.lg(
    `${props.theme.space.base}px`,
    `${props.theme.space.base * 2}px`,
    getColor('neutralHue', SHADE + 200, props.theme, 0.24)!
  );
  const thumbActiveBackgroundColor = getColor(
    props.theme.colors.background,
    SHADE + 100,
    props.theme
  );
  const thumbActiveBorderColor = getColor('primaryHue', SHADE, props.theme);
  const thumbFocusBoxShadow = props.theme.shadows.md(
    getColor('primaryHue', SHADE, props.theme, 0.35)!
  );
  const thumbHoverBackgroundColor = thumbActiveBackgroundColor;
  const thumbHoverBorderColor = thumbHoverBackgroundColor;

  return `
    ${thumbStyles(`
      border-color: ${thumbBorderColor};
      box-shadow: ${thumbBoxShadow};
      background-color: ${thumbBackgroundColor};
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
        background-color: ${thumbBackgroundColor};
        border-color: ${thumbActiveBorderColor};
      `,
      '[data-garden-focus-visible="true"]'
    )}

    ${thumbStyles(
      `
        border-color: ${thumbActiveBorderColor};
        background-color: ${thumbActiveBackgroundColor}
      `,
      ':active'
    )}
  `;
};

/**
 * 1. Provides height for the input so that the thumb shadow styles are not cut off in IE11.
 */
export const StyledHue = styled((Range as unknown) as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable-next-line declaration-no-important */
  margin-top: -${props => props.theme.space.base * 2}px !important;

  /* stylelint-disable-next-line */
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
    height: ${props => props.theme.space.base * 8}px; /* [1] */
  }

  ${props =>
    trackStyles(`
      margin: 0;
      border-radius: 0;
      /* stylelint-disable */
      background: linear-gradient(
        to ${props.theme.rtl ? 'left' : 'right'},
        #f00 0%,
        #ff0 17%,
        #0f0 33%,
        #0ff 50%,
        #00f 67%,
        #f0f 83%,
        #f00 100%
      );
      /* stylelint-enable */
      height: ${props.theme.space.base * 3}px;
  `)}

  ${trackLowerStyles(`opacity: 0;`)}

  &::-webkit-slider-thumb {
    margin-top: -${props => props.theme.space.base / 2}px;
  }

  ${colorStyles};

  ${props =>
    thumbStyles(`
    height: ${props.theme.space.base * 4}px;
    width: ${props.theme.space.base * 4}px;
  `)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHue.defaultProps = {
  theme: DEFAULT_THEME
};
