/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Recursively determines if node is a styled-component
 * @param {*} node
 */
function isStyledComponent(node) {
  if (node.type === 'TaggedTemplateExpression') {
    return isStyledComponent(node.tag);
  }

  if (node.type === 'CallExpression') {
    return isStyledComponent(node.callee);
  }

  if (node.type === 'MemberExpression') {
    return isStyledComponent(node.object);
  }

  if (node.type === 'Identifier' && node.name) {
    return node.name === 'styled';
  }

  return false;
}

/**
 * The `require-default-theme` rule requires that all styled-component usages include
 * a default `theme` value.
 *
 * This ensures that all components are able to render without a parent `ThemeProvider`.
 */
module.exports = {
  meta: {
    fixable: 'code',
    docs: {
      description: 'All styled-component usages must include a default `theme` value',
      category: 'Best Practices',
      recommended: true
    },
    messages: {
      mustIncludeDefaultTheme: 'styled-component "{{styledComponent}}" must include a default theme'
    }
  },
  create: context => {
    const styledComponents = {};
    const defaultProps = {};

    return {
      VariableDeclarator: node => {
        if (node.init && isStyledComponent(node.init)) {
          styledComponents[node.id.name] = node;
        }
      },
      AssignmentExpression: node => {
        if (node.left && node.left.property && node.left.property.name === 'defaultProps') {
          if (node.right.type === 'ObjectExpression') {
            const containsDefaultTheme = node.right.properties.some(property => {
              return property.key.name === 'theme';
            });

            if (containsDefaultTheme) {
              defaultProps[node.left.object.name] = node.right;
            }
          }
        }
      },
      'Program:exit': () => {
        for (const styledComponentName of Object.keys(styledComponents)) {
          if (!defaultProps[styledComponentName]) {
            context.report({
              node: styledComponents[styledComponentName],
              messageId: 'mustIncludeDefaultTheme',
              data: {
                styledComponent: styledComponentName
              },
              fix: fixer => {
                fixer.insertTextAfter(
                  styledComponents[styledComponentName],
                  `\n${styledComponentName}.defaultProps = { theme: DEFAULT_THEME };`
                );
              }
            });
          }
        }
      }
    };
  }
};
