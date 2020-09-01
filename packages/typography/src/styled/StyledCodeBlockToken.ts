/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCodeBlock } from './StyledCodeBlock';

const COMPONENT_ID = 'typography.codeblock_token';

/**
 * 1. Isolate the tag name.
 * 2. Target opening/closing `<`, `/>`.
 * 3. Override string tokenization of `=` after an attribute name.
 */
const colorStyles = (props: IStyledCodeBlockTokenProps & ThemeProps<DefaultTheme>) => {
  const palette = props.theme.palette;
  const colors = {
    boolean: props.isLight ? palette.royal[600] : palette.azure[400],
    builtin: palette.teal[400],
    comment: props.isLight ? palette.lime[600] : palette.mint[400],
    constant: props.isLight ? palette.azure[400] : palette.blue[500],
    function: props.isLight ? palette.orange['M600' as any] : palette.yellow[300],
    keyword: palette.fuschia['M400' as any],
    number: palette.green[300],
    parameter: props.isLight ? palette.azure[400] : palette.blue[300],
    punctuation: props.isLight ? palette.red[800] : palette.grey[600],
    regex: palette.red[400],
    string: props.isLight ? palette.red[700] : palette.crimson['M400' as any]
  };

  return css`
    /* stylelint-disable selector-max-specificity, max-line-length */
    &.builtin,
    &.class-name,
    &.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script) /* [1] */ {
      color: ${colors.builtin};
    }

    &.doctype,
    &.prolog,
    &.tag.punctuation:not(.attr-value):not(.script):not(.spread) /* [2] */ {
      color: ${colors.punctuation};
    }

    &.attribute.value,
    &.attr-value,
    &.atrule,
    &.cdata,
    &.string,
    &.url.content {
      color: ${colors.string};
    }

    &.constant,
    &.interpolation-punctuation {
      color: ${colors.constant};
    }

    &.attr-name,
    &.attr-value.spread,
    &.environment,
    &.interpolation,
    &.parameter,
    &.property,
    &.property-access,
    &.variable {
      color: ${colors.parameter};
    }

    &.parameter.punctuation,
    &.attr-name + .attr-value.punctuation /* [3] */ {
      color: inherit;
    }

    &.regex {
      color: ${colors.regex};
    }

    &.boolean,
    &.bold,
    &.entity,
    &.important,
    &.tag:not(.punctuation):not(.attr-name):not(.attr-value):not(.script):not(.class-name) /* [1] */ {
      color: ${colors.boolean};
    }

    &.number,
    &.unit {
      color: ${colors.number};
    }

    &.assign-left,
    &.function,
    &.selector:not(.attribute) {
      color: ${colors.function};
    }

    &.atrule.rule,
    &.keyword {
      color: ${colors.keyword};
    }

    &.blockquote,
    &.comment,
    &.shebang {
      color: ${colors.comment};
    }

    /* stylelint-disable-next-line */
    ${StyledCodeBlock}.language-css &.plain {
      color: ${colors.string};
    }
    /* stylelint-enable selector-max-specificity, max-line-length */
  `;
};

export interface IStyledCodeBlockTokenProps {
  isLight?: boolean;
}

export const StyledCodeBlockToken = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledCodeBlockTokenProps>`
  display: inline-block;

  &.bold {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  &.italic {
    font-style: italic;
  }

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockToken.defaultProps = {
  theme: DEFAULT_THEME
};
