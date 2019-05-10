This is an example of a draggable Table using [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd)

This example includes:

- Drag-and-drop functionality
- Uses the `Grip` icon from `@zendeskgarden/svg-icons`
- Accessible ordering with the `Space/Up/Down` keys

```jsx
const { zdSpacingSm } = require('@zendeskgarden/css-variables');
const { DragDropContext, Droppable, Draggable } = require('react-beautiful-dnd');
const GripIcon = require('@zendeskgarden/svg-icons/src/12/grip.svg').default;
const { XL } = require('@zendeskgarden/react-typography/src');

const DraggableRow = styled(Row)`
  ${props =>
    props.isDraggingOver
      ? `
    :hover {
      background-color: inherit !important;
    }
  `
      : ''};
`;

const DraggableCell = styled(Cell)`
  ${props =>
    props.isDragging
      ? `
    display: inline-block !important;
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
          <XL tag={Caption} style={{ marginBottom: zdSpacingSm }}>
            Your Unsolved Tickets
          </XL>
          <Head>
            <HeaderRow>
              <HeaderCell minimum />
              <HeaderCell width="25%">Subject</HeaderCell>
              <HeaderCell width="25%">Requester</HeaderCell>
              <HeaderCell width="25%">Requested</HeaderCell>
              <HeaderCell width="25%">Type</HeaderCell>
            </HeaderRow>
          </Head>
          <Droppable droppableId="droppable">
            {(provided, droppableSnapshot) => {
              return (
                <Body ref={provided.innerRef} isDraggingOver={droppableSnapshot.isDraggingOver}>
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <DraggableRow
                          ref={provided.innerRef}
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
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            {item.content}
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            John Smith
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            15 minutes ago
                          </DraggableCell>
                          <DraggableCell isDragging={snapshot.isDragging} width="25%">
                            Ticket
                          </DraggableCell>
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
