/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect, useMemo, useRef, useState } from 'react';
import Highlight, { Language, Prism } from 'prism-react-renderer';
import debounce from 'lodash.debounce';
import {
  StyledCodeBlock,
  StyledCodeBlockContainer,
  StyledCodeBlockLine,
  StyledCodeBlockToken
} from '../styled';

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
    const [containerTabIndex, setContainerTabIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const updateContainerTabIndex = useMemo(
      () =>
        debounce(() => {
          if (containerRef.current) {
            const codeBlock = containerRef.current.children[0];
            const codeBlockHeight = codeBlock.scrollHeight;
            const codeBlockWidth = codeBlock.scrollWidth;
            const containerHeight = containerRef.current.offsetHeight;
            const containerWidth = containerRef.current.offsetWidth;

            if (codeBlockWidth > containerWidth || codeBlockHeight > containerHeight) {
              setContainerTabIndex(0);
            } else {
              setContainerTabIndex(-1);
            }
          }
        }, 100),
      [containerRef, setContainerTabIndex]
    );
    const code = (Array.isArray(children) ? children[0] : children) as string;
    let _size: 'sm' | 'md' | 'lg';

    if (size === 'small') {
      _size = 'sm';
    } else if (size === 'medium') {
      _size = 'md';
    } else {
      _size = 'lg';
    }

    useEffect(() => {
      addEventListener('resize', updateContainerTabIndex);
      updateContainerTabIndex();

      return () => {
        removeEventListener('resize', updateContainerTabIndex);
        updateContainerTabIndex.cancel();
      };
    }, [updateContainerTabIndex, isNumbered, size, children]);

    return (
      <StyledCodeBlockContainer {...containerProps} ref={containerRef} tabIndex={containerTabIndex}>
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
      </StyledCodeBlockContainer>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

CodeBlock.defaultProps = {
  language: 'tsx',
  size: 'medium'
};
