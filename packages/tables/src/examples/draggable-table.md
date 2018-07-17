This is an example of a draggable Table using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

This example includes:

- Drag-and-drop functionality
- Uses the `Grip` icon from `@zendeskgarden/svg-icons`
- Accessible ordering with the `Space/Up/Down` keys

```jsx
const {
  zdFontSizeBeta,
  zdFontWeightSemibold,
  zdSpacingSm
} = require('@zendeskgarden/css-variables');
const { DragDropContext, Droppable, Draggable } = require('react-beautiful-dnd');
const GripIcon = require('svg-react-loader?name=Settings!@zendeskgarden/svg-icons/src/12/grip.svg');

const StyledCaption = styled(Caption)`
  font-size: ${zdFontSizeBeta};
  font-weight: ${zdFontWeightSemibold};
  margin-bottom: ${zdSpacingSm};
`;

const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};

  ${props =>
    props.isDragging
      ? `
    display: table !important;
  `
      : ''};
`;

const DraggableCell = styled(Cell)`
  ${props =>
    props.isDragging
      ? `
    display: inline-block !important;
    width: 25%;
  `
      : ''};
`;

const DraggableContainer = styled.div`
  :focus {
    outline: none;
  }
`;

const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class DraggableExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(10)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const items = reorder(this.state.items, result.source.index, result.destination.index);

    this.setState(
      {
        items
      },
      () => {
        document.getElementById(result.draggableId).focus();
      }
    );
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Table>
          <StyledCaption>Your Unsolved Tickets</StyledCaption>
          <Head>
            <Row header>
              <HeaderCell minimum />
              <HeaderCell scope="col">Subject</HeaderCell>
              <HeaderCell scope="col">Requester</HeaderCell>
              <HeaderCell scope="col">Requested</HeaderCell>
              <HeaderCell scope="col">Type</HeaderCell>
            </Row>
          </Head>
          <Droppable droppableId="droppable">
            {(provided, droppableSnapshot) => {
              return (
                <Body
                  innerRef={provided.innerRef}
                  isDraggingOver={droppableSnapshot.isDraggingOver}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <DraggableRow
                          rowRef={provided.innerRef}
                          isDragging={snapshot.isDragging}
                          isDraggingOver={droppableSnapshot.isDraggingOver}
                          hovered={snapshot.isDragging}
                          focused={
                            droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                          }
                          {...provided.draggableProps.style}
                          {...provided.draggableProps}
                        >
                          <DraggableCell minimum>
                            <DraggableContainer id={item.id} {...provided.dragHandleProps}>
                              <GripIcon />
                            </DraggableContainer>
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>John Smith</DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging}>Ticket</DraggableCell>
                        </DraggableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Body>
              );
            }}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}
<DraggableExample />;
```
