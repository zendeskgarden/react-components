## `@zendeskgarden/react-dropdowns` Components

- [Dropdown](#dropdown)
- [Trigger](#trigger)
- [Select](#select)
- [Autocomplete](#autocomplete)
- [Menus](#menus)
  - [Items](#items)
    - [AddItem](#additem)
    - [HeaderIcon](#headericon)
    - [HeaderItem](#headeritem)
    - [Item](#item)
    - [ItemMeta](#itemmeta)
    - [MediaBody](#mediabody)
    - [MediaFigure](#mediafigure)
    - [MediaItem](#mediaitem)
    - [NextItem](#nextitem)
    - [PreviousItem](#previousitem)
  - [Menu](#menu)
  - [Separator](#separator)
- [Fields](#fields)
  - [Field](#field)
  - [Label](#label)
  - [Hint](#hint)
  - [Message](#message)

### Props

#### Dropdown

Component that provides state and a11y through the context API to its consumers.

| Prop name        | Type   | Default | Description |
| ---------------- | ------ | ------- | ----------- |
| downshiftProps   | object |         |             |
| highlightedIndex | number |         |             |
| inputValue       | string |         |             |
| isOpen           | bool   |         |             |
| onSelect         | func   |         |             |
| onStateChange    | func   |         |             |
| selectedItem     | any    |         |             |
| selectedItems    | any[]  |         |             |

#### Trigger

Applies state and a11y attributes to its children. Must be nested within a `<Dropdown>` component.

All props are spread onto the child element when rendered.

| Prop name | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| refKey    | string | ref     |             |

### Menus

#### Menu

Accepts all `<ul>` props

| Prop name       | Type   | Default        | Description                                                                                                                                                                                                                                                          |
| --------------- | ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animate         | bool   | true           |                                                                                                                                                                                                                                                                      |
| arrow           | bool   |                |                                                                                                                                                                                                                                                                      |
| eventsEnabled   | bool   | true           |                                                                                                                                                                                                                                                                      |
| hidden          | bool   |                |                                                                                                                                                                                                                                                                      |
| maxHeight       | string | 400px          |                                                                                                                                                                                                                                                                      |
| placement       | enum   | `bottom-start` | These placements differ from the default naming of Popper.JS placements to help assist with RTL layouts. One of: `auto`, `top`, `top-start`, `top-end`, `end`, `end-top`, `end-bottom`, `bottom`, `bottom-start`, `bottom-end`, `start`, `start-top`, `start-bottom` |
| popperModifiers | object |                | [PopperJS](https://popper.js.org/popper-documentation.html) customization object                                                                                                                                                                                     |
| small           | bool   |                |                                                                                                                                                                                                                                                                      |
| zIndex          | number | 1000           |                                                                                                                                                                                                                                                                      |

#### Separator

Accepts all `<li>` props

#### AddItem

Accepts all `<li>` props

| Prop name | Type | Default | Description                           |
| --------- | ---- | ------- | ------------------------------------- |
| active    | bool |         |                                       |
| disabled  | bool |         |                                       |
| focused   | bool |         |                                       |
| hovered   | bool |         |                                       |
| value     | any  |         | Value provided to `onSelect` callback |

#### HeaderIcon

Accepts all `<div>` props

#### HeaderItem

Accepts all `<li>` props

#### Item

Accepts all `<li>` props

| Prop name | Type | Default      | Description                           |
| --------- | ---- | ------------ | ------------------------------------- |
| active    | bool |              |                                       |
| checked   | bool |              |                                       |
| component | any  | `StyledItem` |                                       |
| disabled  | bool |              |                                       |
| focused   | bool |              |                                       |
| hovered   | bool |              |                                       |
| value     | any  |              | Value provided to `onSelect` callback |

#### ItemMeta

Accepts all `<div>` props

#### MediaBody

Accepts all `<div>` props

#### MediaFigure

Accepts all `<div>` props

#### MediaItem

Accepts all `<li>` props

| Prop name | Type | Default | Description                           |
| --------- | ---- | ------- | ------------------------------------- |
| active    | bool |         |                                       |
| checked   | bool |         |                                       |
| disabled  | bool |         |                                       |
| focused   | bool |         |                                       |
| hovered   | bool |         |                                       |
| value     | any  |         | Value provided to `onSelect` callback |

#### NextItem

Accepts all `<li>` props

| Prop name | Type | Default | Description                           |
| --------- | ---- | ------- | ------------------------------------- |
| active    | bool |         |                                       |
| checked   | bool |         |                                       |
| disabled  | bool |         |                                       |
| focused   | bool |         |                                       |
| hovered   | bool |         |                                       |
| value     | any  |         | Value provided to `onSelect` callback |

#### PreviousItem

Accepts all `<li>` props

| Prop name | Type | Default | Description                           |
| --------- | ---- | ------- | ------------------------------------- |
| active    | bool |         |                                       |
| checked   | bool |         |                                       |
| disabled  | bool |         |                                       |
| focused   | bool |         |                                       |
| hovered   | bool |         |                                       |
| value     | any  |         | Value provided to `onSelect` callback |

#### Select

Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.

| Prop name   | Type | Default | Description                                           |
| ----------- | ---- | ------- | ----------------------------------------------------- |
| bare        | bool |         | Removes all borders and styling                       |
| disabled    | bool |         |                                                       |
| focusInset  | bool |         | Applies inset box-shadow styling on focus             |
| focused     | bool |         |                                                       |
| hovered     | bool |         |                                                       |
| mediaLayout | bool |         | Applies flex layout to support MediaFigure components |
| open        | bool |         | Displays select open state                            |
| small       | bool |         |                                                       |
| tagLayout   | bool |         | Allows flush spacing of Tab elements                  |
| validation  | enum |         | One of: `success`, `warning`, `error`                 |

#### Autocomplete

Applies state and a11y attributes to its children. Must be nested within a `<Field>` component.

| Prop name   | Type | Default | Description                                           |
| ----------- | ---- | ------- | ----------------------------------------------------- |
| bare        | bool |         | Removes all borders and styling                       |
| disabled    | bool |         |                                                       |
| focusInset  | bool |         | Applies inset box-shadow styling on focus             |
| focused     | bool |         |                                                       |
| hovered     | bool |         |                                                       |
| mediaLayout | bool |         | Applies flex layout to support MediaFigure components |
| open        | bool |         | Displays select open state                            |
| small       | bool |         |                                                       |
| tagLayout   | bool |         | Allows flush spacing of Tab elements                  |
| validation  | enum |         | One of: `success`, `warning`, `error`                 |

### Fields

#### Field

Accepts all `<div>` props

| Prop name | Type | Default | Description         |
| --------- | ---- | ------- | ------------------- |
| inline    | bool |         | Shows inline layout |

#### Label

Accepts all `<label>` props

#### Hint

Accepts all `<div>` props

| Prop name | Type | Default | Description           |
| --------- | ---- | ------- | --------------------- |
| regular   | bool |         | Shows regular styling |
| small     | bool |         | Shows small styling   |

#### Message

Accepts all `<div>` props

| Prop name  | Type | Default | Description                                |
| ---------- | ---- | ------- | ------------------------------------------ |
| validation | enum |         | One of: `success`, `warning`, `validation` |
