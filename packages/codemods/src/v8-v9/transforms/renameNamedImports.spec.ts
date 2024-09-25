/* eslint-disable jest/require-hook */
/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

//  https://github.com/facebook/jscodeshift/blob/main/README.md#unit-testing
// @ts-expect-error - TS7016: Could not find a declaration file for module
import { defineSnapshotTest } from 'jscodeshift/dist/testUtils';
import { API, FileInfo } from 'jscodeshift';
import transform from './renameNamedImports';

const colorpickersOptions = {
  transformId: 'colorpickers-renameNamedImports'
};

const modalsOptions = {
  transformId: 'modals-renameNamedImports'
};

const paginationOptions = {
  transformId: 'pagination-renameNamedImports'
};

describe('subComponentsTransform', () => {
  describe('error handling', () => {
    let mockFileInfo: FileInfo;
    let mockAPI: API;

    beforeEach(() => {
      mockFileInfo = {
        path: 'path/to/file.tsx',
        source: ''
      };
      mockAPI = {
        jscodeshift: jest.fn(),
        stats: jest.fn(),
        report: jest.fn()
      } as unknown as API;
    });

    it('should throw an error if transformId is missing', () => {
      expect(() => transform(mockFileInfo, mockAPI, {} as any)).toThrow('transformId is missing.');
    });

    it('should throw an error if transform is not recognized', () => {
      expect(() => transform(mockFileInfo, mockAPI, { transformId: 'unknown' as any })).toThrow(
        'Transform for "unknown" not recognized.'
      );
    });
  });

  defineSnapshotTest(
    transform,
    colorpickersOptions,
    `
import { Pagination } from '@zendeskgarden/react-pagination';

const MyComponent = () => (
  <div>
    <Pagination />
  </div>
);
`,
    'Skips transformation if targeted import source is not present'
  );

  defineSnapshotTest(
    transform,
    modalsOptions,
    `
import { Modal } from '@zendeskgarden/react-modals';

const MyComponent = () => (
  <div>
    <Modal />
  </div>
);
`,
    'Skips transformation if component to rename is not present'
  );

  defineSnapshotTest(
    transform,
    colorpickersOptions,
    `
import { Colorpicker, ColorpickerDialog } from '@zendeskgarden/react-colorpickers';

const MyComponent = () => (
  <div>
    <Colorpicker />
    <ColorpickerDialog />
  </div>
);
`,
    'Renames Colorpicker and ColorpickerDialog'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'datepickers-renameNamedImports' },
    `
import { Datepicker, DatepickerRange } from '@zendeskgarden/react-datepickers';

const MyComponent = () => (
  <div>
    <Datepicker />
    <DatepickerRange />
  </div>
);
`,
    'Renames Datepicker and DatepickerRange'
  );

  defineSnapshotTest(
    transform,
    modalsOptions,
    `
import { DrawerModal, TooltipModal } from '@zendeskgarden/react-modals';

const MyComponent = () => (
  <div>
    <DrawerModal />
    <TooltipModal />
  </div>
);
`,
    'Renames DrawerModal and TooltipModal'
  );

  defineSnapshotTest(
    transform,
    paginationOptions,
    `
import { Pagination } from '@zendeskgarden/react-pagination';

const MyComponent = () => (
  <div>
    <Pagination />
  </div>
);
`,
    'Renames Pagination'
  );

  defineSnapshotTest(
    transform,
    colorpickersOptions,
    `
import { Colorpicker as CP, ColorpickerDialog as CPD } from '@zendeskgarden/react-colorpickers';

const MyComponent = () => (
  <div>
    <CP />
    <CPD />
  </div>
);
`,
    'Renames aliased components'
  );

  defineSnapshotTest(
    transform,
    paginationOptions,
    `
import { Pagination } from '@zendeskgarden/react-pagination';

const StyledPagination = styled(Pagination)\`
  background-color: hotpink;
\`;

const MyComponent = () => (
  <div>
    <StyledPagination />
  </div>
);
`,
    'Renames components wrapped in styled() constructor'
  );

  defineSnapshotTest(
    transform,
    paginationOptions,
    `
import { Pagination as GardenPagination } from '@zendeskgarden/react-pagination';

const StyledPagination = styled(GardenPagination)\`
  background-color: hotpink;
\`;

const MyComponent = () => (
  <div>
    <StyledPagination />
  </div>
);
`,
    'Renames aliased components wrapped in styled() constructor'
  );
});

defineSnapshotTest(
  transform,
  paginationOptions,
  `
import { Pagination } from '@zendeskgarden/react-pagination';

const StyledPagination = styled(Pagination).attrs({
  'data-garden-version': PACKAGE_VERSION
})\`
  background-color: hotpink;
\`;

const MyComponent = () => (
<div>
  <StyledPagination />
</div>
);
`,
  'Renames components wrapped in styled() constructor chained with attrs()'
);
