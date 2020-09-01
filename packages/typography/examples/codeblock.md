```jsx
const { Well } = require('@zendeskgarden/react-notifications/src');
const {
  Dropdown,
  Select,
  Field,
  Label,
  Menu,
  Item
} = require('@zendeskgarden/react-dropdowns/src');
const {
  Textarea,
  Toggle,
  Field: FormField,
  Label: FormLabel
} = require('@zendeskgarden/react-forms/src');

const CODE = {
  bash: `
#!/bin/sh

# Exports.

export ZSH="$HOME/.oh-my-zsh"

# Aliases.

alias ..="cd .."

# Tools.

if [ -f $(brew --prefix nvm)/nvm.sh ]; then
    mkdir -p $HOME/.nvm
    export NVM_DIR="$HOME/.nvm"
    source $(brew --prefix nvm)/nvm.sh
fi`,
  css: `
button,
.button,
#button,
[role='button'] {
  display: inline-block;
  transition:
    border-color .25s ease-in-out,
    box-shadow .1s ease-in-out,
    background-color .25s ease-in-out,
    color .25s ease-in-out;
  margin: 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden !important;
  vertical-align: middle;
  text-align: center;
  text-decoration: none; /* Anchor tag reset */
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit; /* Override for <input> & <button> elements */
  font-weight: var(--zd-font-weight-regular);
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;

  @media print {
    display: none;
  }
}`,
  javascript: `
Prism.languages.markup = {
  comment: /<!--[\\s\\S]*?-->/,
  prolog: /<\\?[\\s\\S]+?\\?>/,
  doctype: {
    greedy: true
  },
  cdata: /<!\\[CDATA\\[[\\s\\S]*?]]>/i,
  tag: {
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\\/?[^\\s>\\/]+/i,
        inside: {
          punctuation: /^<\\/?/,
          namespace: /^[^\\s>\\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+)/i,
        inside: {
          punctuation: [
            /^=/,
            {
              pattern: /^(\\s*)["']|["']$/,
              lookbehind: true
            }
          ]
        }
      },
      punctuation: /\\/?>/u,
      'attr-name': {
        pattern: /[^\\s>\\/]+/,
        inside: {
          namespace: /^[^\\s>\\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\\da-z]{1,8};/i
};`,
  json: `
{
  "data": [
    {
      "key": "product",
      "version": 1,
      "schema": {
        "properties": {
          "id": {
            "type": "string",
            "description": "product id"
          },
          "name": {
            "type": "string",
            "description": "product name"
          }
        },
        "required": ["id", "name"]
      },
      "created_at": "2018-01-01T10:20:30Z",
      "updated_at": "2018-01-01T10:20:30Z"
    },
    {
      "key": "user",
      "version": 2,
      "schema": {
        "properties": {
          "id": {
            "type": "string",
            "description": "user id"
          },
          "name": {
            "type": "string",
            "description": "user name"
          }
        },
        "required": ["id", "name"]
      },
      "created_at": "2018-01-01T10:20:30Z",
      "updated_at": "2018-01-01T10:20:30Z"
    }
  ]
}`,
  markdown: `
# Title 1
## Title 2
### Title 3
#### Title 4
##### Title 5
###### Title 6

Our product is an extension of our brand and we want it to feel like Zendesk. We use visual design
to shape what Zendesk looks like, and voice and tone to shape what Zendesk sounds like.

| Voice      | Tone       |
| ---------- | ---------- |
| About us   | About them |
| Consistent | Variable   |

*Italic*
**Bold**
**Bold on
multiple lines**
*Italic on
multiple lines too*

* This is
* an unordered list

1. This is an
2. ordered list

* *List item in italic*
* **List item in bold**
* [List item as a link](http://example.com "This is an example")

> This is a quotation
>> With another quotation inside
> _italic here_, __bold there__
> And a [link](http://example.com)`,
  markup: `
<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body>

  <!-- Add your site or application content here -->
  <p>Hello world! This is HTML5 Boilerplate.</p>
  <script src="js/vendor/modernizr-{{MODERNIZR_VERSION}}.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('set', 'transport', 'beacon');
    ga('send', 'pageview')
  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>`,
  python: `
def median(pool):
    '''Statistical median to demonstrate doctest.
    >>> median([2, 9, 9, 7, 9, 2, 4, 5, 8])
    7
    '''
    copy = sorted(pool)
    size = len(copy)

    if size % 2 == 1:
        return copy[(size - 1) / 2]
    else:
        return (copy[size/2 - 1] + copy[size/2]) / 2

if __name__ == '__main__':
    import doctest
    doctest.testmod()`,
  tsx: `
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Dropdown, Multiselect, Field, Menu, Item, Label } from '@zendeskgarden/react-dropdowns';
import { mediaQuery } from '@zendeskgarden/react-theming';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tag } from '@zendeskgarden/react-tags';
import debounce from 'lodash.debounce';

const options = [
  'Asparagus',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini'
];

const StyledCol = styled(Col)\`
  \${p => mediaQuery('down', 'xs', p.theme)} {
    margin-top: \${p => p.theme.space.sm};
  }
\`;

const initialSelectedItems = [options[0], options[1], options[2], options[3]];

const Example = () => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
  const [compactSelectedItems, setCompactSelectedItems] = useState(initialSelectedItems);
  const [inputValue, setInputValue] = useState('');
  const [compactInputValue, setCompactInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matchingOptions, setMatchingOptions] = useState(options);

  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(option => {
        return option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
      });

      setMatchingOptions(matchedOptions);
      setIsLoading(false);
    }, 300)
  );

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  useEffect(() => {
    setIsLoading(true);
    filterMatchingOptionsRef.current(compactInputValue);
  }, [compactInputValue]);

  const renderOptions = () => {
    if (isLoading) {
      return <Item disabled>Loading</Item>;
    }

    if (matchingOptions.length === 0) {
      return <Item disabled>No matches found</Item>;
    }

    return matchingOptions.map(option => (
      <Item key={option} value={option}>
        <span>{option}</span>
      </Item>
    ));
  };

  return (
    <Row>
      <Col>
        <Dropdown
          inputValue={inputValue}
          selectedItems={selectedItems}
          onSelect={items => setSelectedItems(items)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
          onStateChange={changes => {
            if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
              setInputValue((changes as any).inputValue);
            }
          }}
        >
          <Field>
            <Label>Vegetables</Label>
            <Multiselect
              renderItem={({ value, removeValue }: any) => (
                <Tag>
                  <span>{value}</span>
                  <Tag.Close onClick={() => removeValue()} />
                </Tag>
              )}
            />
          </Field>
          <Menu>{renderOptions()}</Menu>
        </Dropdown>
      </Col>
      <StyledCol>
        <Dropdown
          inputValue={compactInputValue}
          selectedItems={compactSelectedItems}
          onSelect={items => setCompactSelectedItems(items)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
          onStateChange={changes => {
            if (Object.prototype.hasOwnProperty.call(changes, 'inputValue')) {
              setCompactInputValue((changes as any).inputValue);
            }
          }}
        >
          <Field>
            <Label>Vegetables</Label>
            <Multiselect
              isCompact
              renderItem={({ value, removeValue }: any) => (
                <Tag>
                  <span>{value}</span>
                  <Tag.Close onClick={() => removeValue()} />
                </Tag>
              )}
            />
          </Field>
          <Menu isCompact>{renderOptions()}</Menu>
        </Dropdown>
      </StyledCol>
    </Row>
  );
};

export default Example;
`,
  typescript: `
import { clean, publish } from 'gh-pages';
import commander, { Command } from 'commander';
import { repository as getRepository, token as getToken } from '..';
import { handleErrorMessage, handleSuccessMessage } from '../../utils';
import { Ora } from 'ora';
import execa from 'execa';

interface IGitHubPagesArgs {
  dir: string;
  path?: string;
  message?: string;
  token?: string;
  spinner?: Ora;
}

/**
 * Execute the \`github-pages\` command.
 *
 * @param {string} args.dir Folder to publish.
 * @param {string} [args.path] Path to a git directory.
 * @param {string} [args.message] Commit message.
 * @param {string} [args.token] GitHub personal access token.
 * @param {Ora} [args.spinner] Terminal spinner.
 *
 * @returns {Promise<string>} The GitHub pages URL.
 */
export const execute = async (args: IGitHubPagesArgs): Promise<string | undefined> => {
  let retVal: string | undefined;

  try {
    const token = args.token || (await getToken(args.spinner));
    const repository = await getRepository(args.path || args.dir, args.spinner);
    const message = args.message || 'Updates [skip ci]';

    if (token && repository) {
      const { owner, repo } = repository;
      let name: string;
      let email: string;

      try {
        name = (await execa('git', ['config', 'user.name'])).stdout.toString();
        email = (await execa('git', ['config', 'user.email'])).stdout.toString();
      } catch {
        name = 'Zendesk Garden';
        email = 'garden@zendesk.com';
      }

      clean();
      await publish(
        args.dir,
        {
          repo: \`https://\${token}@github.com/\${owner}/\${repo}.git\`,
          user: {
            name,
            email
          },
          message,
          silent: true
        },
        error => {
          if (error) {
            handleErrorMessage(error, 'github-pages', args.spinner);
          } else {
            retVal = \`https://\${owner}.github.io/\${repo}/\`;
          }
        }
      );
    } else {
      throw new Error('Invalid git repository');
    }
  } catch (error) {
    handleErrorMessage(error, 'github-pages', args.spinner);

    throw error;
  }

  return retVal;
};`
};

initialState = {
  code: CODE['tsx'].trim(),
  language: 'tsx',
  numbered: false,
  size: 'medium'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <FormField>
          <Toggle
            checked={state.numbered}
            onChange={event => setState({ numbered: event.target.checked })}
          >
            <FormLabel>Numbered</FormLabel>
          </Toggle>
        </FormField>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <Field className="u-mt-xs">
            <Label>Size</Label>
            <Select isCompact>{state.size}</Select>
          </Field>
          <Menu isCompact>
            <Item value="small">small</Item>
            <Item value="medium">medium (default)</Item>
            <Item value="large">large</Item>
          </Menu>
        </Dropdown>
        <Dropdown
          selectedItem={state.language}
          onSelect={language => setState({ language, code: CODE[language].trim() })}
        >
          <Field className="u-mt-xs">
            <Label>Language</Label>
            <Select isCompact>{state.language}</Select>
          </Field>
          <Menu isCompact>
            <Item value="tsx">tsx (default)</Item>
            <Item value="bash">bash</Item>
            <Item value="css">css</Item>
            <Item value="javascript">javascript</Item>
            <Item value="json">json</Item>
            <Item value="markdown">markdown</Item>
            <Item value="markup">markup</Item>
            <Item value="python">python</Item>
            <Item value="typescript">typescript</Item>
          </Menu>
        </Dropdown>
        <FormField className="u-mt-xs">
          <FormLabel>Code</FormLabel>
          <Textarea
            isCompact
            minRows={4}
            maxRows={12}
            value={state.code}
            onChange={event => setState({ code: event.target.value })}
          />
        </FormField>
      </Well>
    </Col>
  </Row>
  <Row>
    <Col className="u-mt">
      <CodeBlock language={state.language} isNumbered={state.numbered} size={state.size}>
        {state.code}
      </CodeBlock>
    </Col>
  </Row>
</Grid>;
```
