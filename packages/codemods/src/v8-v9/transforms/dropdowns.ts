/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { API, FileInfo } from 'jscodeshift';
import { updateSubComponentPropertiesTransform } from './utils/updateSubComponentProperties';
import { findRelevantImportDeclarations } from './utils';

function renameDropdownsImportsTransform(
  file: FileInfo,
  api: API,
  currImportSource: string,
  newImportSource: string
) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Check if the file imports from the specified source
  const relevantImportDeclarations = findRelevantImportDeclarations(root, j, currImportSource);

  // Skip files that don't import from the specified source
  if (!relevantImportDeclarations.size()) {
    return root.toSource();
  }

  relevantImportDeclarations.forEach(importPath => {
    importPath.node.source.value = newImportSource;
  });

  return root.toSource({ quote: 'single' });
}

export default function dropdownsMigrationTransform(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  const renameImportSourceOutputDropdowns = renameDropdownsImportsTransform(
    file,
    api,
    '@zendeskgarden/react-dropdowns',
    '@zendeskgarden/react-dropdowns.legacy'
  );

  const renameImportSourceTransformOutput = renameDropdownsImportsTransform(
    { source: renameImportSourceOutputDropdowns, path: file.path },
    api,
    '@zendeskgarden/react-dropdowns.next',
    '@zendeskgarden/react-dropdowns'
  );

  const subComponentsTransformOutput = updateSubComponentPropertiesTransform(
    { source: renameImportSourceTransformOutput, path: file.path },
    api,
    {
      importSource: '@zendeskgarden/react-dropdowns',
      subComponents: ['Hint', 'Label', 'Message'],
      mainComponent: 'Field'
    }
  );

  const root = j(subComponentsTransformOutput);

  let OptGroupLocalName;

  findRelevantImportDeclarations(root, j, '@zendeskgarden/react-dropdowns').forEach(path => {
    const OptGroupImportSpecifier = j(path).find(j.ImportSpecifier, {
      imported: { name: 'OptGroup' }
    });

    OptGroupLocalName = OptGroupImportSpecifier.size()
      ? OptGroupImportSpecifier.at(0).get().node.local?.name || 'OptGroup'
      : undefined;
  });

  // Skip files that don't import from @zendeskgarden/react-dropdowns and don't import OptGroup
  if (!OptGroupLocalName) {
    return root.toSource();
  }
  // Replace `label` prop with `legend` prop in OptGroup
  root.find(j.JSXOpeningElement, { name: { name: OptGroupLocalName } }).forEach(path => {
    j(path)
      .find(j.JSXAttribute, { name: { name: 'label' } })
      .forEach(attrPath => {
        attrPath.node.name.name = 'legend';
      });
  });

  return root.toSource({ quote: 'single' });
}
