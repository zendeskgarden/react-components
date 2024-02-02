/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo, useRef } from 'react';
import { Highlight, Language, Prism } from 'prism-react-renderer';
import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import { Diff, ICodeBlockProps, LANGUAGES } from '../types';
import {
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
    const dependency = useMemo(() => [size, children], [size, children]);
    const containerTabIndex = useScrollRegion({ containerRef, dependency });

    const getDiff = (line: IToken[]) => {
      let retVal: Diff | undefined;

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
          prism={Prism}
          code={code ? code.trim() : ''}
          language={LANGUAGES.includes(language!) ? (language as Language) : 'tsx'}
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
                  size={size}
                  style={undefined}
                >
                  {line.map((token, tokenKey) => (
                    <StyledCodeBlockToken
                      {...getTokenProps({ token })}
                      key={tokenKey}
                      isLight={isLight}
                      style={undefined}
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
