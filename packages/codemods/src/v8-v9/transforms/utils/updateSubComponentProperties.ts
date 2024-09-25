/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { API, CallExpression, FileInfo, ImportSpecifier } from 'jscodeshift';
import { SubComponentPropertiesOptions } from '../../../types';
import { findRelevantImportDeclarations } from '.';

export function updateSubComponentPropertiesTransform(
  file: FileInfo,
  api: API,
  options: SubComponentPropertiesOptions
) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { importSource, subComponents, mainComponent, bannedComponents } = options;

  function hasSubComponents(name: string) {
    if (Array.isArray(subComponents)) {
      return subComponents.includes(name);
    }
    return Object.hasOwn(subComponents, name);
  }

  const relevantImportDeclarations = findRelevantImportDeclarations(root, j, importSource).filter(
    path => {
      const ImportSpecifiers = j(path).find(j.ImportSpecifier);

      const hasRelevantSubComponents = ImportSpecifiers.some(_path => {
        return hasSubComponents(_path.node.imported.name);
      });

      const hasBannedComponents =
        bannedComponents &&
        hasRelevantSubComponents &&
        ImportSpecifiers.some(_path => {
          return bannedComponents.includes(_path.node.imported.name);
        });

      return hasRelevantSubComponents && !hasBannedComponents;
    }
  );

  // Skip files that don't import any of the specified subComponents
  // or import any of the excluded components
  if (!relevantImportDeclarations.size()) {
    return root.toSource();
  }

  let mainComponentLocalName = mainComponent;

  // Map of subComponent local names to imported names
  const subComponentsNamesMap: Record<string, string> = {};

  relevantImportDeclarations.forEach(importPath => {
    const importSpecifiers = j(importPath).find(j.ImportSpecifier);
    let hasMainComponent = false;
    const newImportSpecifiers: ImportSpecifier[] = [];

    // Iterate over the import specifiers and filter out the subComponents
    importSpecifiers.forEach(path => {
      const importedName = path.node.imported.name;
      const localName = path.node.local?.name;
      const relevantName = localName || importedName;

      // Check whether the main component is imported
      const isMainComponent = importedName === mainComponent;
      hasMainComponent = hasMainComponent || isMainComponent;

      const isSubComponent = hasSubComponents(importedName);

      if (isMainComponent) {
        mainComponentLocalName = relevantName;
      } else if (isSubComponent) {
        // If the subComponent is renamed, use the new name
        // otherwise use the imported name
        const name = Object.hasOwn(subComponents, importedName)
          ? (subComponents as any)[importedName] || importedName
          : importedName;

        subComponentsNamesMap[relevantName] = name;
      }
      // Other components are kept as is
      if (!isSubComponent || isMainComponent) {
        newImportSpecifiers.push(path.node);
      }
    });

    // Prepend the main component if it's not already imported
    if (!hasMainComponent) {
      newImportSpecifiers.unshift(j.importSpecifier(j.identifier(mainComponentLocalName)));
    }

    // Replace the import specifiers with the new ones
    importPath.node.specifiers = newImportSpecifiers;
  });

  const subComponentsLocalNames = Object.keys(subComponentsNamesMap);

  // Update subComponent usage in JSX
  subComponentsLocalNames.forEach(localName => {
    root
      .find(j.JSXElement, {
        openingElement: { name: { name: localName } }
      })
      .forEach(path => {
        path.node.openingElement.name = j.jsxMemberExpression(
          j.jsxIdentifier(mainComponentLocalName),
          j.jsxIdentifier(subComponentsNamesMap[localName])
        );
        if (path.node.closingElement) {
          path.node.closingElement.name = j.jsxMemberExpression(
            j.jsxIdentifier(mainComponentLocalName),
            j.jsxIdentifier(subComponentsNamesMap[localName])
          );
        }
      });
  });

  // updates components wrapped in styled() constructor
  subComponentsLocalNames.forEach(localName => {
    root
      .find(j.TaggedTemplateExpression, {
        tag: {
          callee: { name: 'styled' },
          arguments: [{ name: localName }]
        }
      })
      .forEach(path => {
        (path.node.tag as CallExpression).arguments[0] = j.memberExpression(
          j.identifier(mainComponentLocalName),
          j.identifier(subComponentsNamesMap[localName])
        );
      });

    // updates styled(component).attrs(...)
    root
      .find(j.TaggedTemplateExpression, {
        tag: {
          callee: {
            object: {
              callee: { name: 'styled' },
              arguments: [{ name: localName }]
            }
          }
        }
      })
      .forEach(path => {
        (path.node.tag as any).callee.object.arguments[0] = j.memberExpression(
          j.identifier(mainComponentLocalName),
          j.identifier(subComponentsNamesMap[localName])
        );
      });
  });

  return root.toSource({ quote: 'single' });
}
