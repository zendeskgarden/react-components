/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.codeblock_token';

/**
 * 1. Isolate the tag name.
 * 2. Target opening/closing `<`, `/>`.
 * 3. Override string tokenization of `=` after an attribute name.
 */
const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const palette = props.theme.palette;
  const colors = {
    boolean: palette.azure[400],
    builtin: palette.teal[400],
    comment: palette.mint[400],
    constant: palette.blue[500],
    function: palette.yellow[300],
    keyword: palette.fuschia['M400' as any],
    number: palette.green[300],
    parameter: palette.blue[300],
    punctuation: palette.grey[600],
    regex: palette.red[400],
    string: palette.crimson['M400' as any]
  };

  return css`
    &.builtin,
    &.class-name,
    &.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script) /* [1] */ {
      color: ${colors.builtin};
    }

    &.tag.punctuation:not(.attr-value):not(.script):not(.spread) /* [2] */ {
      color: ${colors.punctuation};
    }

    &.attr-name,
    &.attr-value.spread,
    &.interpolation,
    &.parameter {
      color: ${colors.parameter};
    }

    &.attr-value,
    &.string {
      color: ${colors.string};
    }

    &.attr-name + .attr-value.punctuation /* [3] */ {
      color: inherit;
    }

    &.regex {
      color: ${colors.regex};
    }

    &.boolean {
      color: ${colors.boolean};
    }

    &.number {
      color: ${colors.number};
    }

    &.constant,
    &.interpolation-punctuation {
      color: ${colors.constant};
    }

    &.function {
      color: ${colors.function};
    }

    &.keyword {
      color: ${colors.keyword};
    }

    &.comment {
      color: ${colors.comment};
    }
  `;
};

export const StyledCodeBlockToken = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockToken.defaultProps = {
  theme: DEFAULT_THEME
};
