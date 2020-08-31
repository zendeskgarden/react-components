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
  Field: InputField,
  Label: InputLabel
} = require('@zendeskgarden/react-forms/src');

const CODE = {
  bash: `#!/bin/sh
  
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
  css: `button,
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
}`,
  markup: `<!doctype html>
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
  tsx: `/**
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
  typescript: `import { clean, publish } from 'gh-pages';
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
  code: CODE['tsx'],
  language: 'tsx',
  size: 'medium'
};

<Grid>
  <Row>
    <Col>
      <Well isRecessed>
        <Dropdown selectedItem={state.size} onSelect={size => setState({ size })}>
          <Field>
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
          onSelect={language => setState({ language, code: CODE[language] })}
        >
          <Field className="u-mt-xs">
            <Label>Language</Label>
            <Select isCompact>{state.language}</Select>
          </Field>
          <Menu isCompact>
            <Item value="tsx">tsx (default)</Item>
            <Item value="bash">bash</Item>
            <Item value="css">css</Item>
            <Item value="json">json</Item>
            <Item value="markup">markup</Item>
            <Item value="typescript">typescript</Item>
          </Menu>
        </Dropdown>
        <InputField className="u-mt-xs">
          <InputLabel>Code</InputLabel>
          <Textarea
            isCompact
            minRows={4}
            maxRows={12}
            value={state.code}
            onChange={event => setState({ code: event.target.value })}
          />
        </InputField>
      </Well>
    </Col>
  </Row>
  <Row>
    <Col className="u-mt">
      <CodeBlock language={state.language} size={state.size}>
        {state.code}
      </CodeBlock>
    </Col>
  </Row>
</Grid>;
```
