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

export interface ICodeBlockProps extends HTMLAttributes<HTMLPreElement> {
  /** Selects the language used by the [Prism](https://prismjs.com/) tokenizer */
  language?: Language;
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
    let _size: SIZE;

    switch (size) {
      case 'small':
        _size = 'sm';
        break;

      case 'medium':
        _size = 'md';
        break;

      case 'large':
        _size = 'lg';
        break;
    }

    const dependency = useMemo(() => [size, children], [size, children]);

    const containerTabIndex = useScrollRegion({ containerRef, dependency });

    return (
      <StyledCodeBlockContainer {...containerProps} ref={containerRef} tabIndex={containerTabIndex}>
        <Highlight Prism={Prism} code={code ? code.trim() : ''} language={language || 'tsx'}>
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <StyledCodeBlock className={className} ref={ref} isLight={isLight} {...other}>
              {tokens.map((line, index) => {
                const getDiff = () => {
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
                  <StyledCodeBlockLine
                    {...getLineProps({ line })}
                    key={index}
                    isHighlighted={highlightLines && highlightLines.includes(index + 1)}
                    isLight={isLight}
                    isNumbered={isNumbered}
                    diff={getDiff()}
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
                );
              })}
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
