#!/usr/bin/env node

/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Typechecks the packed package in consumer projects.
 *
 * Usage: `pnpm check:consumers <path to tarball>`. Each row of `ROWS` becomes a consumer
 * project in a temp folder: it installs the tarball alongside React and styled-components,
 * then typechecks the `APP` source with TypeScript 4.9, 5.9 and 6.0 under `skipLibCheck:
 * false`, across `node10`, `node16`, `nodenext` and `bundler` module resolution in both ESM
 * and CJS. One line prints per run, with the error count split by origin. The script fails
 * only on errors inside `@zendeskgarden/react-components/dist`; errors in the app source or
 * in a dependency's own types are reported but allowed.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const NAME = '@zendeskgarden/react-components';

const log = message => {
  /* eslint-disable-next-line no-console */
  console.log(message);
};

const fail = message => {
  throw new Error(message);
};

const tarball = process.argv[2];

if (!tarball || !fs.existsSync(tarball)) {
  fail('usage: pnpm check:consumers <path to tarball>');
}

/* One consumer project per row. "Latest" versions are pinned on the day of the change. */
const ROWS = [
  {
    name: 'r16-sc608',
    react: '16.14.0',
    typesReact: '16.14.70',
    typesReactDom: '16.9.25',
    styledComponents: '6.0.8'
  },
  {
    name: 'r19-sc6',
    react: '19.3.1',
    typesReact: '19.3.0',
    typesReactDom: '19.3.0',
    styledComponents: '6.6.0'
  },
  {
    name: 'sc5',
    react: '18.3.1',
    typesReact: '18.3.31',
    typesReactDom: '18.3.7',
    styledComponents: '5.3.11',
    reactIs: '18.3.1',
    typesStyledComponents: '5.1.36'
  }
];

/* TypeScript through npm aliases, so one install carries every version */
const TSC = { ts49: '4.9.5', ts59: '5.9.3', ts60: '6.0.3' };

/* [moduleResolution, esm or cjs, module]. TypeScript 4.9 has no `nodenext` or `bundler`. */
const MODES = [
  ['node10', 'cjs', 'commonjs'],
  ['node16', 'esm', 'node16'],
  ['node16', 'cjs', 'node16'],
  ['nodenext', 'esm', 'nodenext'],
  ['nodenext', 'cjs', 'nodenext'],
  ['bundler', 'esm', 'esnext']
];

/* A consumer app that exercises the public API, with a `DefaultTheme` augmentation */
const APP = `import * as React from 'react';
import { useRef } from 'react';
import { styled, css } from 'styled-components';
import * as G from '@zendeskgarden/react-components';
import {
  DEFAULT_THEME,
  PALETTE,
  ThemeProvider,
  getColor,
  focusStyles,
  mediaQuery,
  retrieveComponentStyles,
  useText,
  useToast,
  type IButtonProps,
  type IGardenTheme,
  type IComboboxProps,
  type IModalProps,
  type ITooltipProps,
  type IToast
} from '@zendeskgarden/react-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme extends IGardenTheme {}
}

const theme: IGardenTheme = { ...DEFAULT_THEME, rtl: true };
export const color: string = getColor({ theme, variable: 'background.default' });
export const hue: string = PALETTE.blue[600];
export const media: string = mediaQuery('up', 'md', theme);

const Box = styled.div\`
  \${p => focusStyles({ theme: p.theme })};
  \${p => retrieveComponentStyles('custom.box', p)};
  color: \${p => getColor({ theme: p.theme, variable: 'foreground.default' })};
  \${css\`
    margin: 0;
  \`}
\`;

const svg = (
  <svg viewBox="0 0 16 16">
    <path d="M0 0h16v16H0z" />
  </svg>
);

const buttonProps: IButtonProps = { isPrimary: true, size: 'small' };
const comboProps: IComboboxProps = { isMultiselectable: false };
const modalProps: Partial<IModalProps> = { isLarge: true };
const tooltipProps: Partial<ITooltipProps> = { placement: 'top' };
const swatches = [[{ label: 'Black', value: '#000000' }]];
const noop = () => undefined;

const Toaster = () => {
  const { addToast } = useToast();
  const toast: Partial<IToast> = { id: '1' };
  const label = useText(G.Button, { 'aria-label': undefined }, 'aria-label', 'Default', true);

  return (
    <G.Button onClick={() => addToast(() => <G.Notification>{label}</G.Notification>)} data-toast={toast.id}>
      Toast
    </G.Button>
  );
};

export const App = () => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Box />
      <G.Accordion level={3}>
        <G.Accordion.Section>
          <G.Accordion.Header>
            <G.Accordion.Label>One</G.Accordion.Label>
          </G.Accordion.Header>
          <G.Accordion.Panel>Panel</G.Accordion.Panel>
        </G.Accordion.Section>
      </G.Accordion>
      <G.Alert type="info">
        <G.Alert.Title>T</G.Alert.Title>
        <G.Alert.Paragraph>P</G.Alert.Paragraph>
        <G.Alert.Close aria-label="close" />
      </G.Alert>
      <G.Anchor href="#a" isExternal>
        Link
      </G.Anchor>
      <G.Avatar>
        <G.Avatar.Text>AB</G.Avatar.Text>
      </G.Avatar>
      <G.Blockquote>Q</G.Blockquote>
      <G.Breadcrumb>
        <a href="#h">Home</a>
      </G.Breadcrumb>
      <G.Button {...buttonProps} ref={ref}>
        <G.Button.StartIcon>{svg}</G.Button.StartIcon>
        Save
        <G.Button.EndIcon isRotated>{svg}</G.Button.EndIcon>
      </G.Button>
      <G.Field>
        <G.Checkbox>
          <G.Field.Label>Check</G.Field.Label>
        </G.Checkbox>
      </G.Field>
      <G.ChevronButton aria-label="more" />
      <G.Field>
        <G.Field.Label>Label</G.Field.Label>
        <G.Field.Hint>Hint</G.Field.Hint>
        <G.Input validation="error" onChange={e => e.target.value} />
        <G.Field.Message validation="error">Err</G.Field.Message>
      </G.Field>
      <G.Field>
        <G.ClearableInput defaultValue="x" />
      </G.Field>
      <G.Code hue="red">x</G.Code>
      <G.CodeBlock language="tsx">const a = 1;</G.CodeBlock>
      <G.ColorPicker defaultColor="#17494D" />
      <G.ColorPickerDialog defaultColor="#17494D" />
      <G.ColorSchemeProvider initialColorScheme="system">
        <div />
      </G.ColorSchemeProvider>
      <G.ColorSwatch name="s" colors={swatches} />
      <G.ColorSwatchDialog name="s" colors={swatches} />
      <G.ComboboxField>
        <G.ComboboxField.Label>Label</G.ComboboxField.Label>
        <G.Combobox {...comboProps} onChange={change => change.type}>
          <G.Option value="a">
            <G.Option.Meta>m</G.Option.Meta>
          </G.Option>
          <G.OptGroup legend="g">
            <G.Option value="b" />
          </G.OptGroup>
        </G.Combobox>
      </G.ComboboxField>
      <G.ComboboxTag option={{ value: 'a' }}>
        <G.ComboboxTag.Avatar>
          <img alt="" />
        </G.ComboboxTag.Avatar>
      </G.ComboboxTag>
      <G.CursorPagination>
        <G.CursorPagination.First>F</G.CursorPagination.First>
        <G.CursorPagination.Previous>P</G.CursorPagination.Previous>
        <G.CursorPagination.Next>N</G.CursorPagination.Next>
        <G.CursorPagination.Last>L</G.CursorPagination.Last>
      </G.CursorPagination>
      <G.DatePicker value={new Date()} onChange={(date: Date) => date.getTime()}>
        <G.Input />
      </G.DatePicker>
      <G.DatePickerRange startValue={new Date()} endValue={new Date()} onChange={noop}>
        <G.DatePickerRange.Start>
          <G.Input />
        </G.DatePickerRange.Start>
        <G.DatePickerRange.End>
          <G.Input />
        </G.DatePickerRange.End>
        <G.DatePickerRange.Calendar />
      </G.DatePickerRange>
      <G.Dots size={32} />
      <G.Draggable>
        <G.Draggable.Grip />
        <G.Draggable.Content>Drag</G.Draggable.Content>
      </G.Draggable>
      <G.DraggableList>
        <G.DraggableList.Item>A</G.DraggableList.Item>
        <G.DraggableList.DropIndicator />
      </G.DraggableList>
      <G.Drawer isOpen onClose={noop}>
        <G.Drawer.Header>H</G.Drawer.Header>
        <G.Drawer.Body>B</G.Drawer.Body>
        <G.Drawer.Footer>
          <G.Drawer.FooterItem>
            <G.Button>OK</G.Button>
          </G.Drawer.FooterItem>
        </G.Drawer.Footer>
        <G.Drawer.Close />
      </G.Drawer>
      <G.Dropzone>
        <G.Dropzone.Icon>{svg}</G.Dropzone.Icon>
        <G.Dropzone.Message>Drop</G.Dropzone.Message>
      </G.Dropzone>
      <G.Ellipsis>Long</G.Ellipsis>
      <G.FauxInput>
        <G.FauxInput.StartIcon>{svg}</G.FauxInput.StartIcon>
      </G.FauxInput>
      <G.Fieldset>
        <G.Fieldset.Legend>Legend</G.Fieldset.Legend>
      </G.Fieldset>
      <G.FileList>
        <G.FileList.Item>
          <G.File type="pdf">
            doc.pdf
            <G.File.Close />
            <G.File.Delete />
          </G.File>
        </G.FileList.Item>
      </G.FileList>
      <G.FileUpload>Upload</G.FileUpload>
      <G.GlobalAlert type="info">
        <G.GlobalAlert.Content>
          <G.GlobalAlert.Title>T</G.GlobalAlert.Title>
        </G.GlobalAlert.Content>
        <G.GlobalAlert.Button>Act</G.GlobalAlert.Button>
        <G.GlobalAlert.Close />
      </G.GlobalAlert>
      <G.Grid>
        <G.Grid.Row>
          <G.Grid.Col size={6}>A</G.Grid.Col>
        </G.Grid.Row>
      </G.Grid>
      <G.IconButton aria-label="i">{svg}</G.IconButton>
      <G.Inline />
      <G.InputGroup>
        <G.Input />
      </G.InputGroup>
      <G.Kbd>Ctrl</G.Kbd>
      <G.LG>x</G.LG>
      <G.MD>x</G.MD>
      <G.SM>x</G.SM>
      <G.XL>x</G.XL>
      <G.XXL>x</G.XXL>
      <G.XXXL>x</G.XXXL>
      <G.MediaInput start={svg} />
      <G.Menu button="Menu" onChange={noop}>
        <G.Item value="a">
          <G.Item.Meta>m</G.Item.Meta>
        </G.Item>
        <G.Separator />
        <G.ItemGroup legend="g">
          <G.Item value="b" />
        </G.ItemGroup>
      </G.Menu>
      <G.Modal {...modalProps} onClose={noop}>
        <G.Modal.Header>H</G.Modal.Header>
        <G.Modal.Body>B</G.Modal.Body>
        <G.Modal.Footer>
          <G.Modal.FooterItem>
            <G.Button>OK</G.Button>
          </G.Modal.FooterItem>
        </G.Modal.Footer>
        <G.Modal.Close />
      </G.Modal>
      <G.Notification type="success">
        <G.Notification.Title>T</G.Notification.Title>
        <G.Notification.Paragraph>P</G.Notification.Paragraph>
        <G.Notification.Close />
      </G.Notification>
      <G.OffsetPagination totalPages={10} currentPage={3} onChange={(page: number) => page} />
      <G.OrderedList>
        <G.OrderedList.Item>one</G.OrderedList.Item>
      </G.OrderedList>
      <G.UnorderedList>
        <G.UnorderedList.Item>one</G.UnorderedList.Item>
      </G.UnorderedList>
      <G.PaneProvider totalPanesWidth={1000} totalPanesHeight={500} defaultRowValues={{ r: 1 }} defaultColumnValues={{ a: 1 }}>
        {({ getGridTemplateColumns }) => (
          <G.Pane style={{ gridTemplateColumns: getGridTemplateColumns() }}>
            <G.Pane.Content>Pane</G.Pane.Content>
            <G.Pane.Splitter layoutKey="a" min={0} max={2} orientation="end">
              <G.Pane.SplitterButton label="toggle" />
            </G.Pane.Splitter>
          </G.Pane>
        )}
      </G.PaneProvider>
      <G.Paragraph size="large">x</G.Paragraph>
      <G.Progress value={40} aria-label="p" />
      <G.Field>
        <G.Radio name="r" value="a">
          <G.Field.Label>A</G.Field.Label>
        </G.Radio>
      </G.Field>
      <G.Range defaultValue={30} />
      <G.Select>
        <option>a</option>
      </G.Select>
      <G.Sheet isOpen>
        <G.Sheet.Header>
          <G.Sheet.Title>T</G.Sheet.Title>
          <G.Sheet.Description>D</G.Sheet.Description>
        </G.Sheet.Header>
        <G.Sheet.Body>B</G.Sheet.Body>
        <G.Sheet.Footer>
          <G.Sheet.FooterItem>F</G.Sheet.FooterItem>
        </G.Sheet.Footer>
        <G.Sheet.Close />
      </G.Sheet>
      <G.Skeleton width="100px" />
      <G.SkipNav targetId="main">Skip</G.SkipNav>
      <G.Span isBold>
        <G.Span.StartIcon>{svg}</G.Span.StartIcon>
        <G.Span.Icon>{svg}</G.Span.Icon>
      </G.Span>
      <G.Spinner size="32" />
      <G.SplitButton>
        <G.Button>Main</G.Button>
        <G.ChevronButton aria-label="more" />
      </G.SplitButton>
      <G.StatusIndicator type="available">Online</G.StatusIndicator>
      <G.Stepper activeIndex={0}>
        <G.Stepper.Step>
          <G.Stepper.Label>S</G.Stepper.Label>
          <G.Stepper.Content>C</G.Stepper.Content>
        </G.Stepper.Step>
      </G.Stepper>
      <G.StyledBaseIcon />
      <G.Table size="small">
        <G.Table.Caption>Cap</G.Table.Caption>
        <G.Table.Head>
          <G.Table.HeaderRow>
            <G.Table.HeaderCell>H</G.Table.HeaderCell>
            <G.Table.SortableCell sort="asc">S</G.Table.SortableCell>
          </G.Table.HeaderRow>
        </G.Table.Head>
        <G.Table.Body>
          <G.Table.GroupRow>
            <G.Table.Cell>G</G.Table.Cell>
          </G.Table.GroupRow>
          <G.Table.Row isStriped>
            <G.Table.Cell>
              <G.Table.OverflowButton aria-label="more" />
            </G.Table.Cell>
          </G.Table.Row>
        </G.Table.Body>
      </G.Table>
      <G.Tabs selectedItem="a" onChange={noop}>
        <G.Tabs.TabList>
          <G.Tabs.Tab item="a">A</G.Tabs.Tab>
        </G.Tabs.TabList>
        <G.Tabs.TabPanel item="a">PA</G.Tabs.TabPanel>
      </G.Tabs>
      <G.Tag hue="blue">
        <G.Tag.Avatar>
          <img alt="" />
        </G.Tag.Avatar>
        Tag
        <G.Tag.Close />
      </G.Tag>
      <G.Textarea minRows={2} maxRows={4} />
      <G.Tiles name="tiles" onChange={noop}>
        <G.Tiles.Tile value="a">
          <G.Tiles.Icon>{svg}</G.Tiles.Icon>
          <G.Tiles.Label>L</G.Tiles.Label>
          <G.Tiles.Description>D</G.Tiles.Description>
        </G.Tiles.Tile>
      </G.Tiles>
      <G.Timeline>
        <G.Timeline.Item>
          <G.Timeline.OppositeContent>O</G.Timeline.OppositeContent>
          <G.Timeline.Content>C</G.Timeline.Content>
        </G.Timeline.Item>
      </G.Timeline>
      <G.ToastProvider limit={3}>
        <Toaster />
      </G.ToastProvider>
      <G.Field>
        <G.Toggle>
          <G.Field.Label>T</G.Field.Label>
        </G.Toggle>
      </G.Field>
      <G.ToggleButton isPressed>Toggle</G.ToggleButton>
      <G.ToggleIconButton aria-label="t" isPressed={false}>
        {svg}
      </G.ToggleIconButton>
      <G.Tooltip {...tooltipProps} content="Tip">
        <button type="button">Hover</button>
      </G.Tooltip>
      <G.TooltipDialog referenceElement={null} onClose={noop}>
        <G.TooltipDialog.Title>T</G.TooltipDialog.Title>
        <G.TooltipDialog.Body>B</G.TooltipDialog.Body>
        <G.TooltipDialog.Footer>
          <G.TooltipDialog.FooterItem>F</G.TooltipDialog.FooterItem>
        </G.TooltipDialog.Footer>
        <G.TooltipDialog.Close />
      </G.TooltipDialog>
      <G.Well>
        <G.Well.Title>T</G.Well.Title>
        <G.Well.Paragraph>P</G.Well.Paragraph>
      </G.Well>
    </ThemeProvider>
  );
};

/* The declarations must still reject bad props */
// @ts-expect-error unknown prop
export const Bad1 = () => <G.Button isNotAProp />;
// @ts-expect-error wrong union member
export const Bad2 = () => <G.Alert type="nope" />;
// @ts-expect-error missing required prop
export const Bad3 = () => <G.OffsetPagination />;
`;

/* styled-components 5 has no named `styled` export */
const APP_SC5 = APP.replace(
  "import { styled, css } from 'styled-components';",
  "import styled, { css } from 'styled-components';"
);

const run = (command, args, cwd) => {
  const result = spawnSync(command, args, { cwd, encoding: 'utf8' });

  if (result.status !== 0) {
    fail(`${command} ${args.join(' ')} failed in ${cwd}:\n${result.stdout}\n${result.stderr}`);
  }
};

const writeJson = (file, data) => fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'check-consumers-'));

try {
  fs.copyFileSync(tarball, path.join(tmp, 'rc.tgz'));

  for (const row of ROWS) {
    const dir = path.join(tmp, row.name);

    fs.mkdirSync(dir);
    writeJson(path.join(dir, 'package.json'), {
      name: `consumer-${row.name}`,
      private: true,
      dependencies: {
        [NAME]: 'file:../rc.tgz',
        react: row.react,
        'react-dom': row.react,
        'styled-components': row.styledComponents,
        ...(row.reactIs ? { 'react-is': row.reactIs } : {})
      },
      devDependencies: {
        '@types/node': '^24.0.0',
        '@types/react': row.typesReact,
        '@types/react-dom': row.typesReactDom,
        ...(row.typesStyledComponents
          ? { '@types/styled-components': row.typesStyledComponents }
          : {}),
        ts49: `npm:typescript@${TSC.ts49}`,
        ts59: `npm:typescript@${TSC.ts59}`,
        ts60: `npm:typescript@${TSC.ts60}`
      }
    });

    for (const kind of ['esm', 'cjs']) {
      const kindDir = path.join(dir, `ts${kind}`);

      fs.mkdirSync(kindDir);
      writeJson(path.join(kindDir, 'package.json'), {
        type: kind === 'esm' ? 'module' : 'commonjs'
      });
      fs.writeFileSync(path.join(kindDir, 'app.tsx'), row.typesStyledComponents ? APP_SC5 : APP);
    }

    log(`${row.name}: installing`);
    run(
      'pnpm',
      [
        'install',
        '--config.strict-peer-dependencies=false',
        `--store-dir=${path.join(tmp, 'store')}`
      ],
      dir
    );
  }

  const failures = [];
  let runs = 0;

  for (const row of ROWS) {
    const dir = path.join(tmp, row.name);

    for (const [ts] of Object.entries(TSC)) {
      for (const [resolution, kind, moduleKind] of MODES) {
        if (ts === 'ts49' && (resolution === 'nodenext' || resolution === 'bundler')) {
          continue;
        }

        const kindDir = path.join(dir, `ts${kind}`);

        writeJson(path.join(kindDir, 'tsconfig.json'), {
          compilerOptions: {
            strict: true,
            noEmit: true,
            jsx: 'react-jsx',
            target: 'es2022',
            lib: ['dom', 'dom.iterable', 'es2022'],
            types: ['node'],
            esModuleInterop: true,
            skipLibCheck: false,
            module: moduleKind,
            moduleResolution: ts === 'ts49' && resolution === 'node10' ? 'node' : resolution,
            ...(ts === 'ts60' && resolution === 'node10' ? { ignoreDeprecations: '6.0' } : {})
          },
          files: ['app.tsx']
        });

        const tsc = spawnSync(
          process.execPath,
          [path.join(dir, 'node_modules', ts, 'bin', 'tsc'), '-p', 'tsconfig.json'],
          { cwd: kindDir, encoding: 'utf8' }
        );
        const lines = `${tsc.stdout}${tsc.stderr}`
          .split('\n')
          .filter(line => line.includes('error TS'));
        const gardenLines = lines.filter(line => line.includes(`${NAME}/dist`));
        const garden = gardenLines.length;
        const app = lines.filter(line => line.startsWith('app.tsx')).length;

        runs++;
        log(
          `${row.name.padEnd(10)} ${ts} ${resolution.padEnd(9)} ${kind.padEnd(4)} garden=${garden} app=${app} deps=${lines.length - garden - app}`
        );

        if (garden > 0) {
          failures.push(`${row.name} ${ts} ${resolution} ${kind}:\n  ${gardenLines.join('\n  ')}`);
        }
      }
    }
  }

  if (failures.length > 0) {
    fail(`errors inside ${NAME}/dist:\n${failures.join('\n')}`);
  }

  log(`consumers OK: ${runs} runs, no errors inside ${NAME}/dist`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
