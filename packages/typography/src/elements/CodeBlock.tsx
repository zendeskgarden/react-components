/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import Highlight, { Language, Prism } from 'prism-react-renderer';
import { StyledCodeBlock, StyledCodeBlockLine, StyledCodeBlockToken } from '../styled';

export interface ICodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Selects the language used by the Prism tokenizer */
  language?: Language;
  /** Specifies the font size */
  size?: 'small' | 'medium' | 'large';
  /** Applies light mode styling */
  isLight?: boolean;
  /** Displays line numbers */
  isNumbered?: boolean;
  /** Determines the lines to highlight */
  highlightLines?: number[];
}

/**
 * @extends HTMLAttributes<HTMLPreElement>
 */
export const CodeBlock = React.forwardRef<HTMLPreElement, ICodeBlockProps>(
  ({ children, highlightLines, isLight, isNumbered, language, size, ...other }, ref) => {
    const code = (Array.isArray(children) ? children[0] : children) as string;
    let _size: 'sm' | 'md' | 'lg';

    if (size === 'small') {
      _size = 'sm';
    } else if (size === 'medium') {
      _size = 'md';
    } else {
      _size = 'lg';
    }

    return (
      <Highlight Prism={Prism} code={code ? code.trim() : ''} language={language || 'tsx'}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <StyledCodeBlock className={className} ref={ref} isLight={isLight} {...other}>
            {tokens.map((line, index) => (
              <StyledCodeBlockLine
                {...getLineProps({ line })}
                key={index}
                isHighlighted={highlightLines && highlightLines.includes(index + 1)}
                isLight={isLight}
                isNumbered={isNumbered}
                size={_size}
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
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

CodeBlock.defaultProps = {
  language: 'tsx',
  size: 'medium'
};
