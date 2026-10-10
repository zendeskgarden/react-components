/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useScrollRegion } from '@zendeskgarden/container-scrollregion';
import Highlight, { Language, Prism } from 'prism-react-renderer';
import { useMemo, useRef, forwardRef, type RefObject } from 'react';

import { ThemeProvider } from '../../theming/elements/ThemeProvider';
import { Diff, ICodeBlockProps, LANGUAGES } from '../../types/elements';
import { StyledCodeBlock } from '../../views/typography/StyledCodeBlock';
import { StyledCodeBlockContainer } from '../../views/typography/StyledCodeBlockContainer';
import { StyledCodeBlockLine } from '../../views/typography/StyledCodeBlockLine';
import { StyledCodeBlockToken } from '../../views/typography/StyledCodeBlockToken';
import { COMPONENT_IDS } from '../utils';

/* prism-react-renderer Token type replica */
interface IToken {
  types: string[];
  content: string;
  empty?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLPreElement>
 */
export const CodeBlock = forwardRef<HTMLPreElement, ICodeBlockProps>(
  (
    {
      children,
      containerProps,
      highlightLines,
      isLight,
      isNumbered,
      language = 'tsx',
      size = 'medium',
      ...other
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const code = (Array.isArray(children) ? children[0] : children) as string;
    const dependency = useMemo(() => [size, children], [size, children]);
    const containerTabIndex = useScrollRegion({
      containerRef: containerRef as RefObject<HTMLElement>,
      dependency
    });

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
      <StyledCodeBlockContainer
        {...containerProps}
        data-garden-id={COMPONENT_IDS['typography.codeblock_container']}
        data-garden-version={PACKAGE_VERSION}
        ref={containerRef}
        tabIndex={containerTabIndex}
      >
        <Highlight
          Prism={Prism}
          code={code ? code.trim() : ''}
          language={LANGUAGES.includes(language!) ? (language as Language) : 'tsx'}
        >
          {({ className, tokens, getLineProps, getTokenProps }) => (
            <ThemeProvider
              theme={parentTheme => ({
                ...parentTheme,
                colors: { ...parentTheme.colors, base: isLight ? 'light' : 'dark' }
              })}
            >
              <StyledCodeBlock
                className={className}
                ref={ref}
                {...other}
                data-garden-id={COMPONENT_IDS['typography.codeblock']}
                data-garden-version={PACKAGE_VERSION}
              >
                {tokens.map((line, index) => (
                  /* eslint-disable react/no-array-index-key */
                  <StyledCodeBlockLine
                    {...getLineProps({ line })}
                    key={index}
                    $language={language}
                    $isHighlighted={highlightLines?.includes(index + 1)}
                    $isNumbered={isNumbered}
                    $diff={getDiff(line)}
                    $size={size}
                    style={undefined}
                    as="code"
                    $isMonospace
                    data-garden-id={COMPONENT_IDS['typography.codeblock_code']}
                    data-garden-version={PACKAGE_VERSION}
                  >
                    {line.map((token, tokenKey) => (
                      <StyledCodeBlockToken
                        {...getTokenProps({ token })}
                        data-garden-id={COMPONENT_IDS['typography.codeblock_token']}
                        data-garden-version={PACKAGE_VERSION}
                        key={tokenKey}
                        style={undefined}
                      >
                        {token.empty ? '\n' : token.content}
                      </StyledCodeBlockToken>
                    ))}
                  </StyledCodeBlockLine>
                ))}
              </StyledCodeBlock>
            </ThemeProvider>
          )}
        </Highlight>
      </StyledCodeBlockContainer>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';
