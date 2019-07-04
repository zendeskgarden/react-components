### DEPRECATION WARNING

This container has been deprecated in favor of our new hook based container
[@zendeskgarden/container-accordion](https://garden.zendesk.com/react-containers/storybook/?path=/story/accordion-container--useaccordion).

This container will be removed in a future major release.

```jsx
const {
  zdSpacing,
  zdSpacingSm,
  zdSpacingXs,
  zdColorGrey300
} = require('@zendeskgarden/css-variables');
const DownIcon = require('@zendeskgarden/svg-icons/src/16/chevron-down-fill.svg').default;

const UpIcon = styled(DownIcon)`
  transform: rotate(180deg);
`;

const StyledAccordion = styled.div`
  border: 1px solid ${zdColorGrey300};
  border-radius: ${zdSpacingXs};
`;

const StyledHeadingButton = styled.button`
  background: none;
  border: 0;
  display: block;
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  padding: ${zdSpacingSm} ${zdSpacing};
  position: relative;
  text-align: left;
  width: 100%;
`;

const StyledIconWrapper = styled.div`
  float: right;
`;

const StyledPanel = styled.div`
  margin: 0;
  padding: ${zdSpacingSm} ${zdSpacing};
  border-top: 1px solid ${zdColorGrey300};

  display: ${props => (props.hidden ? 'none' : 'block')};
`;

<AccordionContainer>
  {({ getHeadingProps, getHeadingButtonProps, getPanelProps, expanded }) => (
    <StyledAccordion>
      <div {...getHeadingProps({ headingLevel: 2 })}>
        <StyledHeadingButton {...getHeadingButtonProps()}>
          Accordion Header With Custom Styling
          <StyledIconWrapper>{expanded ? <UpIcon /> : <DownIcon />}</StyledIconWrapper>
        </StyledHeadingButton>
        <StyledPanel {...getPanelProps({ hidden: !expanded })}>Panel contents</StyledPanel>
      </div>
    </StyledAccordion>
  )}
</AccordionContainer>;
```
