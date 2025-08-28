# Garden documentation

The JSDoc applied to exported [element components](api.md#element-components) is
extracted during the [website](https://github.com/zendeskgarden/website) build
process and used to generate API prop tables seen on component pages. Therefore,
Garden adheres to a strict set of rules for element component documentation.
Other additional component documentation is generally left to developer
discretion, but should honor Garden [content
guidelines](https://garden.zendesk.com/content). The following list enumerates
the standard rules for Garden element component documentation:

- All element-level components **must** be embellished with the `@extends` JSDoc
  tag. These tags will indicate the HTMLElement interface of the element rendered
  by the component.
- All element component props **must** be documented
- Props will be consistently documented using [present
  simple](https://garden.zendesk.com/content/grammar#tense), [third
  person](https://garden.zendesk.com/content/grammar#pronouns)
  (understood) singular grammar. Prefer active vs. passive voice.
  - A good mechanism for formulation is to think _“it \_\_\_\_\_”_ where “it”
    refers to the prop being described and the filled-in blank becomes the prop’s
    description
  - Limited exceptions to this rule may be considered on a case-by-case basis
    where the grammar construct feels clunky
  - Do & don't examples:
    - :white_check_mark: “Specifies the font size”
    - :no_entry_sign: “Specify the font size”
    - :white_check_mark: “Determines light mode styling”
    - :no_entry_sign: “Whether light mode styling is used”
    - :white_check_mark: “Applies danger styling” (active)
    - :no_entry_sign: “Determines if danger styling is used” (passive)
  - Function-type props _must_ document all `@param` values and any relevant
    `@returns` value
  - Use lowercase for component names referenced within prop descriptions
  - Consider opportunities for adding internal cross-reference or external URL
    links
    - See the [Multiselect
      API](https://garden.zendesk.com/components/multiselect#multiselect)
      `renderItem` prop for an example of an internal cross-reference
    - See the [Dropdown
      API](https://garden.zendesk.com/components/select#dropdown) for an
      external linking example
  - Only add prop JSDoc to [TypeScript prop interfaces](typescript.md)
    - Refrain from documenting styled components props
  - Use `@ignore` to prevent a prop from being added to generated documentation.
    Use this tag sparingly to hide internal-only APIs.
