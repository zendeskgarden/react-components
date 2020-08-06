/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.multiselect_items_container';

interface IStyledMultiselectItemsContainerProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
}

const sizeStyles = (props: IStyledMultiselectItemsContainerProps) => {
  const marginVertical = props.isCompact
    ? `-${props.theme.space.base * 1.5}px`
    : `-${props.theme.space.base * 2.5}px`;
  const paddingEnd = props.theme.space.base;
  const paddingVertical = props.isCompact ? '3px' : '1px';

  /**
   * 1. Minimum height corresponding with a compact input.
   * 2. Negative margin over standard input padding.
   * 3. Compensate for horizontal item margins.
   */
  return css`
    margin: ${marginVertical} 0; /* [2] */
    padding-top: ${paddingVertical};
    padding-bottom: ${paddingVertical};
    /* stylelint-disable-next-line property-no-unknown */
    padding-${props.theme.rtl ? 'left' : 'right'}: ${paddingEnd}px; /* [3] */
  `;
};

export const StyledMultiselectItemsContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledMultiselectItemsContainerProps>`
  display: inline-flex;
  flex-grow: 1;
  flex-wrap: wrap;
  min-width: 0;

  ${props => sizeStyles(props)};
`;

StyledMultiselectItemsContainer.defaultProps = {
  theme: DEFAULT_THEME
};
