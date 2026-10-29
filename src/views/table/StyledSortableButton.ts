/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles, SELECTOR_FOCUS_VISIBLE } from '../../theming/utils/focusStyles';
import { getColor } from '../../theming/utils/getColor';
import { StyledBaseIcon } from '../../theming/utils/StyledBaseIcon';
import { ISortableCellProps } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';

const StyledBaseIconWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  ${props => (props.theme.rtl ? 'left' : 'right')}: 0;
  align-items: center;
  justify-content: center;
  opacity: 0;
  width: ${props => props.theme.iconSizes.md};
  height: 100%;
  color: inherit;

  & > svg {
    width: ${props => props.theme.iconSizes.md};
    height: ${props => props.theme.iconSizes.md};
  }
`;

export const StyledSortableStrokeIconWrapper = styled(StyledBaseIconWrapper)`
  /* empty-source */
`;

export const StyledSortableFillIconWrapper = styled(StyledBaseIconWrapper)`
  /* empty-source */
`;

const sortArrowStyles = css`
  position: absolute;
  inset: 0;
  margin: auto;
`;

/* The chevron-up-down glyph is a single path, so each arrow gets its own
   clipped copy with its own color. The top arrow ends at 50% of the artwork. */
export const StyledSortArrowTop = styled(StyledBaseIcon)`
  ${sortArrowStyles}
  clip-path: inset(0 0 50% 0);
`;

export const StyledSortArrowBottom = styled(StyledBaseIcon)`
  ${sortArrowStyles}
  clip-path: inset(50% 0 0 0);
`;

interface IStyledSortableButtonProps {
  $sort?: ISortableCellProps['sort'];
  width?: ISortableCellProps['width'];
}

const colorStyles = ({ theme, $sort }: IStyledSortableButtonProps & IStyledBaseProps) => {
  const fgInactive = getColor({
    variable: 'foreground.subtle',
    transparency: theme.opacity[200],
    theme
  });
  const fgActive = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const fgPrimaryActive = getColor({ variable: 'foreground.primary', theme });
  const fgPrimaryInactive = getColor({
    variable: 'foreground.primary',
    theme,
    dark: { offset: -100 },
    transparency: theme.opacity[200]
  });
  let topColor = fgActive;
  let bottomColor = fgActive;

  if ($sort === 'asc') {
    topColor = fgActive;
    bottomColor = fgInactive;
  } else if ($sort === 'desc') {
    topColor = fgInactive;
    bottomColor = fgActive;
  }

  return css`
    ${StyledSortableStrokeIconWrapper} {
      color: ${fgActive};
    }

    ${StyledSortableFillIconWrapper} {
      ${StyledSortArrowTop} {
        color: ${topColor};
      }

      ${StyledSortArrowBottom} {
        color: ${bottomColor};
      }
    }

    &:hover,
    ${SELECTOR_FOCUS_VISIBLE} {
      color: ${fgPrimaryActive};

      ${
        $sort === undefined &&
        `
        ${StyledSortableFillIconWrapper} {
          opacity: 1;

          ${StyledSortArrowTop} {
            color: ${fgPrimaryActive};
          }

          ${StyledSortArrowBottom} {
            color: ${fgPrimaryActive};
          }
        }

        ${StyledSortableStrokeIconWrapper} {
          opacity: 0;
        }
      `
      };

      ${
        $sort === 'asc' &&
        `
        ${StyledSortableFillIconWrapper} {
          ${StyledSortArrowTop} {
            color: ${fgPrimaryActive};
          }

          ${StyledSortArrowBottom} {
            color: ${fgPrimaryInactive};
          }
        }
      `
      }

      ${
        $sort === 'desc' &&
        `
        ${StyledSortableFillIconWrapper} {
          ${StyledSortArrowTop} {
            color: ${fgPrimaryInactive};
          }

          ${StyledSortArrowBottom} {
            color: ${fgPrimaryActive};
          }
        }
      `
      }
    }

    ${focusStyles({ theme })}
  `;
};

/**
 * 1. Reset for <button> element
 * 2. Reset for <a>nchor element
 */
export const StyledSortableButton = styled.button<IStyledSortableButtonProps>`
  position: relative;
  transition: box-shadow 0.1s ease-in-out;
  border: none; /* [1] */
  border-radius: ${props => props.theme.borderRadii.sm};
  background-color: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
    math(`${props.theme.space.base} + ${props.theme.iconSizes.md}`)};
  width: ${props => props.width};
  text-decoration: none; /* [2] */
  color: inherit;
  font-family: inherit; /* [1] */
  font-size: inherit; /* [1] */
  font-weight: ${props => props.theme.fontWeights.semibold};

  ${StyledSortableStrokeIconWrapper} {
    opacity: ${props => props.$sort === undefined && 1};
  }

  ${StyledSortableFillIconWrapper} {
    opacity: ${props => props.$sort !== undefined && 1};
  }

  &:hover,
  ${SELECTOR_FOCUS_VISIBLE} {
    text-decoration: none;
  }

  ${colorStyles}

  ${componentStyles};
`;
