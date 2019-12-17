/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledCell, IStyledCellProps } from './StyledCell';
import { StyledOverflowButton } from './StyledOverflowButton';

const COMPONENT_ID = 'tables.header_cell';

const truncatedStyling = css`
  ${StyledOverflowButton} {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const sizeStyles = (props: IStyledCellProps & ThemeProps<DefaultTheme>) => {
  let paddingTop = undefined;
  let paddingBottom = undefined;

  if (!props.hasOverflow) {
    if (props.size === 'large') {
      paddingTop = props.theme.fontSizes.xxl;
    }

    paddingTop = props.theme.fontSizes.md;
  }

  if (!props.hasOverflow) {
    if (props.size === 'large') {
      paddingBottom = props.theme.fontSizes.xxl;
    } else if (props.size === 'small') {
      paddingBottom = props.theme.fontSizes.xs;
    }

    paddingBottom = props.theme.fontSizes.md;
  }

  return css`
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
  `;
};

export const StyledHeaderCell = styled(StyledCell).attrs({
  as: 'th',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  text-align: ${props => {
    if (!props.hasOverflow) {
      if (props.theme.rtl) {
        return 'right';
      }

      return 'left';
    }

    return undefined;
  }};

  ${props => sizeStyles(props)}
  ${props => props.isTruncated && truncatedStyling}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeaderCell.defaultProps = {
  theme: DEFAULT_THEME
};
