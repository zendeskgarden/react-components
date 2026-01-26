/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Range } from '@zendeskgarden/react-forms';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { stripUnit } from 'polished';
import styled, { ThemeProps, DefaultTheme } from 'styled-components';

export interface IStyledRangeProps {
  $isOpaque?: boolean;
}

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

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const thumbBackgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const thumbBorderColor = getColor({
    theme,
    variable: 'border.default',
    dark: { offset: -100 },
    light: { offset: 100 }
  });
  const thumbActiveBackgroundColor = thumbBackgroundColor;
  const thumbActiveBorderColor = getColor({
    theme,
    variable: 'border.primaryEmphasis'
  });
  const thumbFocusBorderColor = thumbActiveBorderColor;
  const thumbHoverBackgroundColor = getColor({
    theme,
    variable: 'background.subtle'
  });
  const thumbHoverBorderColor = thumbActiveBorderColor;

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
        border-color: ${thumbFocusBorderColor};
      `,
      ':focus-visible'
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

const getThumbSize = (props: IStyledRangeProps & ThemeProps<DefaultTheme>) =>
  props.theme.space.base * (props.$isOpaque ? 6 : 4);

export const getTrackHeight = (props: IStyledRangeProps & ThemeProps<DefaultTheme>) =>
  props.theme.space.base * (props.$isOpaque ? 6 : 3);

export const getTrackMargin = (props: IStyledRangeProps & ThemeProps<DefaultTheme>) =>
  (getThumbSize(props) - getTrackHeight(props)) / 2 +
  (stripUnit(props.theme.shadowWidths.md) as number);

/**
 * 1. Firefox reset.
 * 2. Bedrock override.
 */
const sizeStyles = (props: IStyledRangeProps & ThemeProps<DefaultTheme>) => {
  const thumbSize = getThumbSize(props);
  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);
  const thumbMargin = (trackHeight - thumbSize) / 2;
  const trackOffset = props.theme.space.base * (props.$isOpaque ? -2 : -1);
  const height = props.$isOpaque ? trackHeight : trackMargin * 2 + trackHeight;

  return `
    /* stylelint-disable-next-line declaration-no-important */
    margin-top: 0 !important;
    height: ${height}px; /* [1] */
    box-sizing: content-box; /* [2] */
    border-radius: ${props.$isOpaque && props.theme.borderRadii.md};

    ${trackStyles(`
      margin: ${trackMargin}px ${trackOffset}px;
      height: ${trackHeight}px;
    `)}

    ${thumbStyles(`
      margin: ${thumbMargin}px 0;
      border-width: ${props.theme.borderWidths.sm};
      height: ${thumbSize}px;
      width: ${thumbSize}px;
    `)};
  `;
};

export const StyledRange = styled(Range as unknown as 'input').attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  hasLowerTrack: false
})<IStyledRangeProps>`
  ${sizeStyles};

  ${trackStyles(`
    border-radius: 0;
  `)}

  ${colorStyles};

  ${componentStyles};
`;
