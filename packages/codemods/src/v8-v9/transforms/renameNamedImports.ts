/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { API, FileInfo } from 'jscodeshift';
import { JsCodeshiftDefaultOptions, RenameImportsTranformIds } from '../../types';
import { findRelevantImportDeclarations, getTransformOptions } from './utils';

const OPTIONS: Record<
  RenameImportsTranformIds,
  {
    importSource: string;
    renameMap: Record<string, string>;
  }
> = {
  'colorpickers-renameNamedImports': {
    importSource: '@zendeskgarden/react-colorpickers',
    renameMap: {
      Colorpicker: 'ColorPicker',
      ColorpickerDialog: 'ColorPickerDialog'
    }
  },
  'datepickers-renameNamedImports': {
    importSource: '@zendeskgarden/react-datepickers',
    renameMap: {
      Datepicker: 'DatePicker',
      DatepickerRange: 'DatePickerRange'
    }
  },
  'modals-renameNamedImports': {
    importSource: '@zendeskgarden/react-modals',
    renameMap: {
      DrawerModal: 'Drawer',
      TooltipModal: 'TooltipDialog'
    }
  },
  'pagination-renameNamedImports': {
    importSource: '@zendeskgarden/react-pagination',
    renameMap: {
      Pagination: 'OffsetPagination'
    }
  }
};

export default function renameNamedImportsTransform(
  file: FileInfo,
  api: API,
  options: JsCodeshiftDefaultOptions & {
    transformId: RenameImportsTranformIds;
  }
) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { importSource, renameMap } = getTransformOptions(options.transformId, OPTIONS);

  const previousComponentNames = Object.keys(renameMap);

  // Check if the file imports from the specified source
  const relevantImportDeclarations = findRelevantImportDeclarations(root, j, importSource).filter(
    importPath => {
      const ImportSpecifiers = j(importPath).find(j.ImportSpecifier);

      const hasRelevantComponents = ImportSpecifiers.some(path => {
        return previousComponentNames.includes(path.node.imported.name);
      });

      return hasRelevantComponents;
    }
  );

  // Skip files that don't import from the specified source and have no relevant components
  if (!relevantImportDeclarations.size()) {
    return root.toSource(); // Skip files that don't import from the specified source
  }

  const namesToChange: string[] = [];

  relevantImportDeclarations.forEach(importPath => {
    const importSpecifiers = j(importPath).find(j.ImportSpecifier);

    importSpecifiers.forEach(path => {
      const importedName = path.node.imported.name;
      const localName = path.node.local?.name;
      const hasAlias = localName && localName !== importedName;

      const newImportedName = previousComponentNames.includes(importedName)
        ? renameMap[importedName]
        : importedName;

      path.node.imported.name = newImportedName;

      if (!hasAlias) {
        // Store the name to change for downstream updates
        namesToChange.push(importedName);
      }
    });
  });

  // Update subComponent usage in JSX
  namesToChange.forEach(nameToChange => {
    const newName = renameMap[nameToChange];

    root
      .find(j.JSXElement, {
        openingElement: { name: { name: nameToChange } }
      })
      .forEach(path => {
        path.node.openingElement.name = j.jsxIdentifier(newName);

        if (path.node.closingElement) {
          path.node.closingElement.name = j.jsxIdentifier(newName);
        }
      });
  });

  // updates components passed as arguments to functions
  namesToChange.forEach(nameToChange => {
    const newName = renameMap[nameToChange];

    root
      .find(j.CallExpression, {
        arguments: [{ name: nameToChange }]
      })
      .forEach(path => {
        path.node.arguments[0] = j.jsxIdentifier(newName);
      });
  });

  return root.toSource({ quote: 'single' });
}
