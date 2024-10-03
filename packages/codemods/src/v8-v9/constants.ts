/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export const PARSER_CHOICES = [
  { value: 'babel', name: 'JavaScript (Babel)' },
  { value: 'tsx', name: 'TypeScript (TSX)' }
] as const;

export const SUBCOMPONENTS_TRANSFORMER_CHOICES = [
  {
    name: 'Deprecated Components [react-forms]: Update subComponents (forms-subComponents)',
    value: 'forms-subComponents',
    description: `
Renames the following subcomponents:

- Hint -> Field.Hint
- Label -> Field.Label
- Message -> Field.Message
`
  },
  {
    name: 'Deprecated Components [react-grid]: Update subComponents (grid-subComponents)',
    value: 'grid-subComponents',
    description: `
Renames the following subcomponents:

- Col -> Grid.Col
- Row -> Grid.Row
`
  },
  {
    name: 'Deprecated Components [react-modals]: Update subComponents (modals-subComponents)',
    value: 'modals-subComponents',
    description: `
Renames the following subcomponents:

- Body -> Modal.Body
- Close -> Modal.Close
- Footer -> Modal.Footer
- FooterItem -> Modal.FooterItem
- Header -> Modal.Header
`
  },
  {
    name: 'Deprecated Components [react-notification - Well]: Update Well subComponents (well-subComponents)',
    value: 'well-subComponents',
    description: `
Renames the following subcomponents:

- Paragraph -> Well.Paragraph
- Title -> Well.Title
`
  },
  {
    name: 'Deprecated Components [react-notification - Alert]: Update Alert subComponents (alert-subComponents)',
    value: 'alert-subComponents',
    description: `
Renames the following subcomponents:

- Close -> Alert.Close
- Paragraph -> Alert.Paragraph
- Title -> Alert.Title
`
  },
  {
    name: 'Deprecated Components [react-notification - Notification]: Update Notification subComponents (notification-subComponents)',
    value: 'notification-subComponents',
    description: `
Renames the following subcomponents:

- Close -> Notification.Close
- Paragraph -> Notification.Paragraph
- Title -> Notification.Title
`
  },
  {
    name: 'Deprecated Components [react-tables]: Update subComponents (tables-subComponents)',
    value: 'tables-subComponents',
    description: `
Renames the following subcomponents:

- Body -> Table.Body
- Caption -> Table.Caption
- Cell -> Table.Cell
- GroupRow -> Table.GroupRow
- Head -> Table.Head
- HeaderCell -> Table.HeaderCell
- HeaderRow -> Table.HeaderRow
- OverflowButton -> Table.OverflowButton
- Row -> Table.Row
- SortableCell -> Table.SortableCell
`
  },
  {
    name: 'Deprecated Components [react-tabs]: Update subComponents (tabs-subComponents)',
    value: 'tabs-subComponents',
    description: `
Renames the following subcomponents:

- Tab -> Tabs.Tab
- TabList -> Tabs.TabList
- TabPanel -> Tabs.TabPanel
`
  },
  {
    name: 'Deprecated Components [react-tooltips]: Update subComponents (tooltips-subComponents)',
    value: 'tooltips-subComponents',
    description: `
Renames the following subcomponents:

- Paragraph -> Tooltip.Paragraph
- Title -> Tooltip.Title
`
  }
] as const;

export const RENAME_IMPORTS_TRANSFORMER_CHOICES = [
  {
    name: 'Breaking change [react-colorpickers]: Rename component imports (colorpickers-renameNamedImports)',
    value: 'colorpickers-renameNamedImports',
    description: `
Renames the following component imports:

- Colorpicker -> ColorPicker
- ColorpickerDialog -> ColorPickerDialog
`
  },
  {
    name: 'Breaking change [react-datepickers]: Rename component imports (datepickers-renameNamedImports)',
    value: 'datepickers-renameNamedImports',
    description: `
Renames the following component imports:

- Datepicker -> DatePicker
- DatepickerRange -> DatePickerRange
`
  },
  {
    name: 'Breaking change [react-modals]: Rename component imports (modals-renameNamedImports)',
    value: 'modals-renameNamedImports',
    description: `
Renames the following component imports:

- DrawerModal -> Drawer
- TooltipModal -> TooltipDialog
`
  },
  {
    name: 'Breaking change [react-pagination]: Rename component imports (pagination-renameNamedImports)',
    value: 'pagination-renameNamedImports',
    description: `
Renames the following component imports:

- Pagination -> OffsetPagination
`
  }
] as const;

export const CHROME_SUBCOMPONENTS_TRANSFORMER_CHOICE = {
  name: 'Deprecated Components [react-chrome]: Update subComponents (subcomponents-chrome)',
  value: 'subcomponents-chrome',
  description: `
Renames the following subcomponents:

- FooterItem -> Footer.Item
- HeaderItem -> Header.Item
- HeaderItemIcon -> Header.ItemIcon
- HeaderItemText -> Header.ItemText
- HeaderItemWrapper -> Header.ItemWrapper
- NavItem -> Nav.Item
- NavItemIcon -> Nav.ItemIcon
- NavItemText -> Nav.ItemText
`
} as const;

export const DROPDOWNS_MIGRATION_TRANSFORMER_CHOICE = {
  name: 'Breaking change [react-dropdowns]: Update react-dropdowns(.next) following the migration guide (migrate-dropdowns)',
  value: 'migrate-dropdowns',
  description: `
Renames the following import sources:
- @zendeskgarden/react-dropdowns -> @zendeskgarden/react-dropdowns.legacy
- @zendeskgarden/react-dropdowns.next -> @zendeskgarden/react-dropdowns

Then, renames the following subcomponents for renamed @zendeskgarden/react-dropdowns:
- Hint -> Field.Hint
- Label -> Field.Label
- Message -> Field.Message
`
} as const;

export const ALL_TRANSFORMER_CHOICES = [
  DROPDOWNS_MIGRATION_TRANSFORMER_CHOICE,
  ...RENAME_IMPORTS_TRANSFORMER_CHOICES,
  CHROME_SUBCOMPONENTS_TRANSFORMER_CHOICE,
  ...SUBCOMPONENTS_TRANSFORMER_CHOICES
] as const;

export const allTransformIds = ALL_TRANSFORMER_CHOICES.map(choice => choice.value);
