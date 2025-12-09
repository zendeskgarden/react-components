/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React, { useRef, useMemo } from 'react';
import Highlight, { Prism } from 'prism-react-renderer';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { LANGUAGES } from '../types/index.js';
import '../styled/StyledBlockquote.js';
import '../styled/StyledCode.js';
import { StyledCodeBlock } from '../styled/StyledCodeBlock.js';
import { StyledCodeBlockContainer } from '../styled/StyledCodeBlockContainer.js';
import { StyledCodeBlockLine } from '../styled/StyledCodeBlockLine.js';
import { StyledCodeBlockToken } from '../styled/StyledCodeBlockToken.js';
import '../styled/StyledEllipsis.js';
import '../styled/StyledFont.js';
import '../styled/StyledIcon.js';
import '../styled/StyledKbd.js';
import '../styled/StyledList.js';
import '../styled/StyledListItem.js';
import '../styled/StyledParagraph.js';

const CodeBlock = React.forwardRef(({
  children,
  containerProps,
  highlightLines,
  isLight,
  isNumbered,
  language = 'tsx',
  size = 'medium',
  ...other
}, ref) => {
  const containerRef = useRef(null);
  const code = Array.isArray(children) ? children[0] : children;
  const dependency = useMemo(() => [size, children], [size, children]);
  const containerTabIndex = useScrollRegion({
    containerRef,
    dependency
  });
  const getDiff = line => {
    let retVal;
    if (language === 'diff') {
      const token = line.find(value => !(value.empty || value.content === ''));
      if (token) {
        if (token.types.includes('deleted')) {
          retVal = 'delete';
        } else if (token.types.includes('inserted')) {
          retVal = 'add';
        } else if (token.types.includes('coord')) {
          retVal = 'hunk';
        } else if (token.types.includes('diff')) {
          retVal = 'change';
        }
      }
    }
    return retVal;
  };
  return React.createElement(StyledCodeBlockContainer, Object.assign({}, containerProps, {
    ref: containerRef,
    tabIndex: containerTabIndex
  }), React.createElement(Highlight, {
    Prism: Prism,
    code: code ? code.trim() : '',
    language: LANGUAGES.includes(language) ? language : 'tsx'
  }, ({
    className,
    tokens,
    getLineProps,
    getTokenProps
  }) => React.createElement(ThemeProvider, {
    theme: parentTheme => ({
      ...parentTheme,
      colors: {
        ...parentTheme.colors,
        base: isLight ? 'light' : 'dark'
      }
    })
  }, React.createElement(StyledCodeBlock, Object.assign({
    className: className,
    ref: ref
  }, other), tokens.map((line, index) =>
  React.createElement(StyledCodeBlockLine, Object.assign({}, getLineProps({
    line
  }), {
    key: index,
    $language: language,
    $isHighlighted: highlightLines?.includes(index + 1),
    $isNumbered: isNumbered,
    $diff: getDiff(line),
    $size: size,
    style: undefined
  }), line.map((token, tokenKey) => React.createElement(StyledCodeBlockToken, Object.assign({}, getTokenProps({
    token
  }), {
    key: tokenKey,
    style: undefined
  }), token.empty ? '\n' : token.content))))))));
});
CodeBlock.displayName = 'CodeBlock';

export { CodeBlock };
