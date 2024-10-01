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
import transform from './subComponents';

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
    { transformId: 'alert-subComponents' },
    `
import { Well, Close, Paragraph, Title, Notification } from '@zendeskgarden/react-notifications';

const MyComponent = () => (
  <Well>
    <Title>Title</Title>
    <Paragraph>Paragraph</Paragraph>
    <Close>Close</Close>
    <Notification>Notification</Notification>
  </Well>
);
`,
    'Skips transformation if banned components are present'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'forms-subComponents' },
    `
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const MyComponent = () => (
  <Row>
    <Col>1</Col>
  </Row>
  );
  `,
    'Skips transformation if targeted import source is not present'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const MyComponent = () => (
  <Row>
    <Col>1</Col>
  </Row>
  );
  `,
    'Adds main component if not already imported'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  // This is a comment
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const MyComponent = () => (
  <Row>
    <Col>1</Col>
  </Row>
  );
  `,
    'Transforms import statements while maintaining comments'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'forms-subComponents' },
    `
import { Field, Label, Checkbox } from '@zendeskgarden/react-forms';

const MyComponent = () => (
<Field>
  <Checkbox>
    <Label>Needs indirect light</Label>
  </Checkbox>
</Field>
);
`,
    'Transforms subcomponents wih additional components'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const StyledRow = styled(Row)\`
    background-color: hotpink;
  \`;
  
  const MyComponent = () => (
  <StyledRow>
    <Col>1</Col>
  </StyledRow>
  );
  `,
    'Transforms subcomponents wrapped in styled() constructor'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const StyledRow = styled(Row).attrs({
    'data-garden-version': PACKAGE_VERSION
  })\`
    background-color: hotpink;
  \`;
  
  const MyComponent = () => (
  <StyledRow>
    <Col>1</Col>
  </StyledRow>
  );
  `,
    'Transforms subcomponents wrapped in styled() constructor chained with attrs()'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { withTheme } from '@zendeskgarden/react-theming';
  import { Col, Row } from '@zendeskgarden/react-grid';
  
  const ThemedRow = withTheme(Row)
  
  const MyComponent = () => (
  <ThemedRow>
    <Col>1</Col>
  </ThemedRow>
  );
  `,
    'Transforms subcomponents passed as arguments to functions'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Col, Row as GardenRow } from '@zendeskgarden/react-grid';
  
  const MyComponent = () => (
  <GardenRow>
    <Col>1</Col>
  </GardenRow>
  );
  `,
    'Transforms aliased subcomponents'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'forms-subComponents' },
    `
import { Field as GardenField, Label, Checkbox } from '@zendeskgarden/react-forms';

const MyComponent = () => (
<GardenField>
  <Checkbox>
    <Label>Needs indirect light</Label>
  </Checkbox>
</GardenField>
);
`,
    'Transforms subcomponents wih aliased main components'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Col, Row as GardenRow } from '@zendeskgarden/react-grid';

  const StyledGardenRow = styled(GardenRow)\`
    background-color: hotpink;
  \`;
  
  const MyComponent = () => (
  <StyledGardenRow>
    <Col>1</Col>
  </StyledGardenRow>
  );
  `,
    'Transforms aliased subcomponents and wrapped in styled() constructor'
  );

  defineSnapshotTest(
    transform,
    { transformId: 'grid-subComponents' },
    `
  import { Field, Label, Checkbox } from '@zendeskgarden/react-forms';
  import { Row, Col } from '@zendeskgarden/react-grid';

  const Example = () => (
  <Row justifyContent="center">
    <Col size="auto">
      <Field>
        <Checkbox defaultChecked disabled>
          <Label>Needs indirect light</Label>
        </Checkbox>
      </Field>
      <Field>
        <Checkbox disabled>
          <Label>Prefers moist soil</Label>
        </Checkbox>
      </Field>
    </Col>
  </Row>
  );
  `,
    'Transforms only components associated with transformId'
  );
});
