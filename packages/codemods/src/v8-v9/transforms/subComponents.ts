/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { API, FileInfo } from 'jscodeshift';
import {
  JsCodeshiftDefaultOptions,
  SubComponentPropertiesOptions,
  SubComponentsTransformIds
} from '../../types';
import { getTransformOptions } from './utils';
import { updateSubComponentPropertiesTransform } from './utils/updateSubComponentProperties';

const OPTIONS: Record<SubComponentsTransformIds, SubComponentPropertiesOptions> = {
  'forms-subComponents': {
    importSource: '@zendeskgarden/react-forms',
    subComponents: ['Hint', 'Label', 'Message'],
    mainComponent: 'Field'
  },
  'grid-subComponents': {
    importSource: '@zendeskgarden/react-grid',
    subComponents: ['Col', 'Row'],
    mainComponent: 'Grid'
  },
  'modals-subComponents': {
    importSource: '@zendeskgarden/react-modals',
    subComponents: ['Body', 'Close', 'Footer', 'FooterItem', 'Header'],
    mainComponent: 'Modal'
  },
  'alert-subComponents': {
    importSource: '@zendeskgarden/react-notifications',
    subComponents: ['Close', 'Paragraph', 'Title'],
    mainComponent: 'Well',
    bannedComponents: ['Well', 'Notification']
  },
  'notification-subComponents': {
    importSource: '@zendeskgarden/react-notifications',
    subComponents: ['Close', 'Paragraph', 'Title'],
    mainComponent: 'Notification',
    bannedComponents: ['Alert', 'Well']
  },
  'well-subComponents': {
    importSource: '@zendeskgarden/react-notifications',
    subComponents: ['Paragraph', 'Title'],
    mainComponent: 'Well',
    bannedComponents: ['Alert', 'Notification']
  },
  'tables-subComponents': {
    importSource: '@zendeskgarden/react-tables',
    subComponents: [
      'Body',
      'Caption',
      'Cell',
      'GroupRow',
      'Head',
      'HeaderCell',
      'HeaderRow',
      'OverflowButton',
      'Row',
      'SortableCell'
    ],
    mainComponent: 'Table'
  },
  'tabs-subComponents': {
    importSource: '@zendeskgarden/react-tabs',
    subComponents: ['Tab', 'TabList', 'TabPanel'],
    mainComponent: 'Tabs'
  },
  'tooltips-subComponents': {
    importSource: '@zendeskgarden/react-tooltips',
    subComponents: ['Paragraph', 'Title'],
    mainComponent: 'Tooltip'
  }
};

export default function subComponentsTransform(
  file: FileInfo,
  api: API,
  options: JsCodeshiftDefaultOptions & {
    transformId: SubComponentsTransformIds;
  }
) {
  return updateSubComponentPropertiesTransform(
    file,
    api,
    getTransformOptions(options.transformId, OPTIONS)
  );
}
