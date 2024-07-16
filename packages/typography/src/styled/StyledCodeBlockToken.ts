/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledCodeBlock } from './StyledCodeBlock';

const COMPONENT_ID = 'typography.codeblock_token';

/*
 * 1. Isolate the tag name.
 * 2. Target opening/closing `<`, `/>`.
 * 3. Override string tokenization of `=` after an attribute name.
 */
const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const colors = {
    boolean: getColor({
      theme,
      dark: { hue: 'azure', shade: 600 },
      light: { hue: 'royal', shade: 700 }
    }),
    builtin: getColor({ theme, hue: 'teal', dark: { shade: 600 }, light: { shade: 700 } }),
    comment: getColor({
      theme,
      dark: { hue: 'mint', shade: 600 },
      light: { hue: 'lime', shade: 700 }
    }),
    constant: getColor({
      theme,
      dark: { hue: 'blue', shade: 600 },
      light: { hue: 'azure', shade: 700 }
    }),
    coord: getColor({
      theme,
      dark: { hue: 'blue', shade: 300 },
      light: { hue: 'purple', shade: 800 }
    }),
    deleted: getColor({ theme, hue: 'red', dark: { shade: 300 }, light: { shade: 800 } }),
    diff: getColor({ theme, hue: 'yellow', dark: { shade: 100 }, light: { shade: 800 } }),
    function: getColor({
      theme,
      dark: { hue: 'yellow', shade: 300 },
      light: { hue: 'orange', shade: 700 }
    }),
    inserted: getColor({ theme, hue: 'green', dark: { shade: 300 }, light: { shade: 800 } }),
    keyword: getColor({ theme, hue: 'fuschia', dark: { shade: 600 }, light: { shade: 700 } }),
    name: getColor({
      theme,
      dark: { hue: 'blue', shade: 400 },
      light: { hue: 'crimson', shade: 700 }
    }),
    number: getColor({ theme, hue: 'green', dark: { shade: 400 }, light: { shade: 700 } }),
    punctuation: getColor({
      theme,
      dark: { hue: 'grey', shade: 700 },
      light: { hue: 'red', shade: 900 }
    }),
    regex: getColor({ theme, hue: 'red', shade: 600 }),
    value: getColor({
      theme,
      dark: { hue: 'crimson', shade: 600 },
      light: { hue: 'red', shade: 800 }
    })
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
      color: ${colors.value};
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
      color: ${colors.name};
    }

    &.parameter.punctuation,
    &.attr-name + .attr-value.punctuation /* [3] */ {
      color: inherit;
    }

    &.regex {
      color: ${colors.regex};
    }

    &.boolean,
    &.bold:not(.diff),
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

    /* stylelint-disable declaration-block-semicolon-newline-after, rule-empty-line-before  */
    ${StyledCodeBlock}.language-css &&.plain {
      color: ${colors.value};
    }

    ${StyledCodeBlock}.language-diff &&.coord {
      color: ${colors.coord};
    }

    ${StyledCodeBlock}.language-diff &&.deleted {
      color: ${colors.deleted};
    }

    ${StyledCodeBlock}.language-diff &&.diff {
      color: ${colors.diff};
    }

    ${StyledCodeBlock}.language-diff &&.inserted {
      color: ${colors.inserted};
    }
    /* stylelint-enable selector-max-specificity,
       max-line-length,
       declaration-block-semicolon-newline-after,
       rule-empty-line-before */
  `;
};

export const StyledCodeBlockToken = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: inline-block;

  &.bold:not(.diff) {
    font-weight: ${props => props.theme.fontWeights.semibold};
  }

  &.coord {
    padding-left: 0.75em;
  }

  &.italic {
    font-style: italic;
  }

  &.prefix {
    width: 2em;
    text-align: center;
  }

  ${colorStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledCodeBlockToken.defaultProps = {
  theme: DEFAULT_THEME
};
