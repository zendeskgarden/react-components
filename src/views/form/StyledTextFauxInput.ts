/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { SELECTOR_FOCUS_VISIBLE, focusStyles } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { getIconRenderSize } from '../../theming/utils/getIconRenderSize';
import type { IStyledBaseProps } from '../../types/views';
import { StyledSelect } from './StyledSelect';
import { StyledTextInput, IStyledTextInputProps } from './StyledTextInput';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';

export interface IStyledTextFauxInputProps extends IStyledTextInputProps {
  $mediaLayout?: boolean;
  $isDisabled?: boolean;
  $isReadOnly?: boolean;
}

const colorStyles = ({
  theme,
  $validation,
  $focusInset,
  $isBare,
  $isFocused
}: IStyledTextFauxInputProps & IStyledBaseProps) => {
  let borderVariable: string | undefined;
  let focusBorderColor: string | undefined;

  if ($validation) {
    if ($validation === 'success') {
      borderVariable = 'border.successEmphasis';
    } else if ($validation === 'warning') {
      borderVariable = 'border.warningEmphasis';
    } else if ($validation === 'error') {
      borderVariable = 'border.dangerEmphasis';
    }

    focusBorderColor = getColor({ theme, variable: borderVariable });
  } else {
    borderVariable = 'border.primaryEmphasis';
    focusBorderColor = getColor({ theme, variable: borderVariable });
  }

  return css`
    ${focusStyles({
      theme,
      inset: $focusInset,
      color: { variable: borderVariable },
      selector: $isFocused ? '&' : '&:focus-within',
      styles: { borderColor: focusBorderColor },
      condition: !$isBare
    })}
  `;
};

/*
 * The content row of a 40px input (32px compact) is 18px: the height minus the
 * vertical padding and the borders. The media figure is 20px. A negative margin
 * on each side makes the figure's margin box as high as the row, so that it
 * does not grow the input.
 */
const figureSizeStyles = ({ theme, $isCompact }: IStyledTextFauxInputProps & IStyledBaseProps) => {
  const height = theme.space.base * ($isCompact ? 8 : 10);
  const paddingVertical = theme.space.base * ($isCompact ? 1.5 : 2.5);
  const rowHeight = math(
    `${height}px - (${paddingVertical}px * 2) - (${theme.borderWidths.sm} * 2)`
  );
  const marginVertical = math(`(${rowHeight} - ${getIconRenderSize(theme)}) / 2`);

  return css`
    margin-top: ${marginVertical};
    margin-bottom: ${marginVertical};
  `;
};

/*
 * [1] removes inner input styles when focused
 * [2] the media layout centers the figure on the row; the inline layout aligns
 *     it to the top of the line
 * [3] leaves the `Select` chevron as is: it is absolutely positioned, with a
 *     `top` offset that counts its own margin
 */
export const StyledTextFauxInput = styled(StyledTextInput as 'div')<IStyledTextFauxInputProps>`
  display: ${props => (props.$mediaLayout ? 'inline-flex' : 'inline-block')};
  align-items: ${props => props.$mediaLayout && 'baseline'};
  cursor: ${props => (props.$mediaLayout && !props.$isDisabled ? 'text' : 'default')};
  overflow: hidden;

  ${colorStyles}

  & > ${StyledTextInput} {
    vertical-align: ${props => !props.$mediaLayout && 'baseline'};

    ${SELECTOR_FOCUS_VISIBLE} {
      box-shadow: unset; /* [1] */
    }
  }

  & > ${StyledTextMediaFigure} {
    flex-shrink: ${props => props.$mediaLayout && '0'};
    align-self: ${props => props.$mediaLayout && 'center'}; /* [2] */

    ${props => props.$mediaLayout && figureSizeStyles(props)};
  }

  /* [3] */
  & > ${StyledTextMediaFigure}:not(${StyledSelect} + *) {
    vertical-align: ${props => !props.$mediaLayout && 'top'}; /* [2] */

    ${props => !props.$mediaLayout && figureSizeStyles(props)};
  }

  ${componentStyles};
`;
