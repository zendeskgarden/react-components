/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo, useRef } from 'react';
import Highlight, { Language, Prism } from 'prism-react-renderer';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import {
  DIFF,
  SIZE,
  StyledCodeBlock,
  StyledCodeBlockContainer,
  StyledCodeBlockLine,
  StyledCodeBlockToken
} from '../styled';

/* prism-react-renderer Token type replica */
interface IToken {
  types: string[];
  content: string;
  empty?: boolean;
}

/* until https://github.com/FormidableLabs/prism-react-renderer/pull/127 is available */
const LANGUAGES = [
  'markup',
  'bash',
  'clike',
  'c',
  'cpp',
  'css',
  'javascript',
  'jsx',
  'coffeescript',
  'actionscript',
  'css-extr',
  'diff',
  'git',
  'go',
  'graphql',
  'handlebars',
  'json',
  'less',
  'makefile',
  'markdown',
  'objectivec',
  'ocaml',
  'python',
  'reason',
  'sass',
  'scss',
  'sql',
  'stylus',
  'tsx',
  'typescript',
  'wasm',
  'yaml'
] as const;

export interface ICodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Selects the language used by the [Prism](https://prismjs.com/) tokenizer */
  language?: typeof LANGUAGES[number];
  /** Specifies the font size */
  size?: 'small' | 'medium' | 'large';
  /** Applies light mode styling */
  isLight?: boolean;
  /** Displays line numbers */
  isNumbered?: boolean;
  /** Determines the lines to highlight */
  highlightLines?: number[];
  /** Passes props to the code block container */
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

/**
 * @extends HTMLAttributes<HTMLPreElement>
 */
export const CodeBlock = React.forwardRef<HTMLPreElement, ICodeBlockProps>(
  (
    { children, containerProps, highlightLines, isLight, isNumbered, language, size, ...other },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const code = (Array.isArray(children) ? children[0] : children) as string;
    const SIZES: Record<string, SIZE> = {
      small: 'sm',
      medium: 'md',
      large: 'lg'
    };
    const dependency = useMemo(() => [size, children], [size, children]);
    const containerTabIndex = useScrollRegion({ containerRef, dependency });

    const getDiff = (line: IToken[]) => {
      let retVal: DIFF | undefined;

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

    return (
      <StyledCodeBlockContainer {...containerProps} ref={containerRef} tabIndex={containerTabIndex}>
        <Highlight
          Prism={Prism}
          code={code ? code.trim() : ''}
          language={LANGUAGES.includes(language as Language) ? (language as Language) : 'tsx'}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <StyledCodeBlock className={className} ref={ref} isLight={isLight} {...other}>
              {tokens.map((line, index) => (
                <StyledCodeBlockLine
                  {...getLineProps({ line })}
                  key={index}
                  language={language}
                  isHighlighted={highlightLines && highlightLines.includes(index + 1)}
                  isLight={isLight}
                  isNumbered={isNumbered}
                  diff={getDiff(line)}
                  size={size ? SIZES[size] : undefined}
                >
                  {line.map((token, tokenKey) => (
                    <StyledCodeBlockToken
                      {...getTokenProps({ token })}
                      key={tokenKey}
                      isLight={isLight}
                    >
                      {token.empty ? '\n' : token.content}
                    </StyledCodeBlockToken>
                  ))}
                </StyledCodeBlockLine>
              ))}
            </StyledCodeBlock>
          )}
        </Highlight>
      </StyledCodeBlockContainer>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

CodeBlock.defaultProps = {
  language: 'tsx',
  size: 'medium'
};
