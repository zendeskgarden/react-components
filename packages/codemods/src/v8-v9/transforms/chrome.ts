/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { API, FileInfo } from 'jscodeshift';

import { updateSubComponentPropertiesTransform } from './utils/updateSubComponentProperties';

export default function chromeMigrationTransform(file: FileInfo, api: API) {
  let output = updateSubComponentPropertiesTransform(file, api, {
    importSource: '@zendeskgarden/react-chrome',
    subComponents: {
      FooterItem: 'Item'
    },
    mainComponent: 'Footer'
  });

  output = updateSubComponentPropertiesTransform({ source: output, path: file.path }, api, {
    importSource: '@zendeskgarden/react-chrome',
    subComponents: {
      HeaderItem: 'Item',
      HeaderItemIcon: 'ItemIcon',
      HeaderItemText: 'ItemText',
      HeaderItemWrapper: 'ItemWrapper'
    },
    mainComponent: 'Header'
  });

  output = updateSubComponentPropertiesTransform({ source: output, path: file.path }, api, {
    importSource: '@zendeskgarden/react-chrome',
    subComponents: {
      NavItem: 'Item',
      NavItemIcon: 'ItemIcon',
      NavItemText: 'ItemText'
    },
    mainComponent: 'Nav'
  });

  return output;
}
