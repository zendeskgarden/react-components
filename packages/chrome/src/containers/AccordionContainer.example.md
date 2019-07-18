```jsx
const { PALETTE } = require('@zendeskgarden/react-theming/src');
const DownIcon = require('@zendeskgarden/svg-icons/src/16/chevron-down-fill.svg').default;

const UpIcon = styled(DownIcon)`
  transform: rotate(180deg);
`;

const StyledAccordion = styled.div`
  border: 1px solid ${PALETTE.grey[300]};
  border-radius: ${DEFAULT_THEME.borderRadii.md};
`;

const StyledHeadingButton = styled.button`
  background: none;
  border: 0;
  display: block;
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  padding: ${DEFAULT_THEME.space.sm} ${DEFAULT_THEME.space.md};
  position: relative;
  text-align: left;
  width: 100%;
`;

const StyledIconWrapper = styled.div`
  float: right;
`;

const StyledPanel = styled.div`
  margin: 0;
  padding: ${DEFAULT_THEME.space.sm} ${DEFAULT_THEME.space.md};
  border-top: 1px solid ${PALETTE.grey[300]};

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
