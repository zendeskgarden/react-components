/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Range } from '@zendeskgarden/react-forms';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { math, stripUnit } from 'polished';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_range';

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

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const thumbBackgroundColor = getColor('neutralHue', 100, props.theme);
  const thumbBorderColor = thumbBackgroundColor;
  const thumbActiveBackgroundColor = getColor('neutralHue', 200, props.theme);
  const thumbActiveBorderColor = getColor('primaryHue', 600, props.theme);
  const thumbHoverBackgroundColor = thumbActiveBackgroundColor;
  const thumbHoverBorderColor = thumbHoverBackgroundColor;

  return `
    ${trackStyles(`
      background-color: transparent;
    `)}

    ${thumbStyles(`
      border-color: ${thumbBorderColor};
      background-color: ${thumbBackgroundColor};
    `)}

    ${trackLowerStyles(`
      background-color: transparent;
    `)}

    ${thumbStyles(
      `
        border-color: ${thumbHoverBorderColor};
        background-color: ${thumbHoverBackgroundColor};
      `,
      ':hover'
    )}

    ${thumbStyles(
      `
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

const getThumbSize = (theme: DefaultTheme) => theme.space.base * 4;

export const getTrackHeight = (theme: DefaultTheme) => theme.space.base * 3;

export const getTrackMargin = (theme: DefaultTheme) =>
  (getThumbSize(theme) - getTrackHeight(theme)) / 2 + (stripUnit(theme.shadowWidths.md) as number);

/**
 * 1. Firefox reset.
 */
const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const thumbSize = getThumbSize(props.theme);
  const trackHeight = getTrackHeight(props.theme);
  const trackMargin = getTrackMargin(props.theme);
  const thumbMargin = (trackHeight - thumbSize) / 2;
  const trackOffset = thumbSize - trackHeight - 1;
  const height = trackMargin * 2 + trackHeight;

  return `
    /* stylelint-disable-next-line declaration-no-important */
    margin-top: 0 !important;
    height: ${height}px; /* [1] */

    ${trackStyles(`
      margin: ${trackMargin}px -${trackOffset}px;
      height: ${trackHeight}px;
    `)}

    ${thumbStyles(`
      margin: ${thumbMargin}px 0;
      border-width: ${math(`${props.theme.borderWidths.sm} * 2`)};
      height: ${thumbSize}px;
      width: ${thumbSize}px;
    `)};
  `;
};

export const StyledRange = styled(Range as unknown as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  hasLowerTrack: false
})`
  ${sizeStyles};

  ${trackStyles(`
    border-radius: 0;
  `)}

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledRange.defaultProps = {
  theme: DEFAULT_THEME
};
