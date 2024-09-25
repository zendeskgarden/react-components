/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { NodePath } from '@babel/core';
import { JSCodeshift, ASTPath, Collection, ImportDeclaration } from 'jscodeshift';

// Replace node while preserving comments
export function replaceWithComments(
  j: JSCodeshift,
  path: ASTPath<any>,
  newNode: NodePath<any>['node']
) {
  if (path.node.comments) {
    newNode.comments = path.node.comments;
  }
  j(path).replaceWith(newNode);
}

export function findRelevantImportDeclarations(
  root: Collection<any>,
  j: JSCodeshift,
  importSource: string
): Collection<ImportDeclaration> {
  return root.find(j.ImportDeclaration, {
    source: {
      // ensure deep equal check
      value: (val: string) => val === importSource
    }
  });
}

export function getTransformOptions<T extends Record<string, any>>(
  transformId: string | undefined,
  options: T
): T[keyof T] {
  if (!transformId) {
    throw new Error('transformId is missing.');
  }
  const transformOptions = (options as any)[transformId];

  if (!transformOptions) {
    throw new Error(`Transform for "${transformId}" not recognized.`);
  }

  return transformOptions;
}
