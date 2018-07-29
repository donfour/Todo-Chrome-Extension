# Complete React Course for Creating Amazing UI

## Files that we changed
- package.json and package-lock.json (due to our npm installation)
- src/App.js (where we added the reorder and onDragEnd functions)
- src/components/TodoList.js (where we added the react-beautiful-dnd components)

## Code that we copied
5:00 - Type this in your terminal to install react-beautiful-dnd ([source](https://github.com/atlassian/react-beautiful-dnd)):
```
npm install react-beautiful-dnd --save
```

5:40 - react-beautiful-dnd sample code snippet ([source](https://codesandbox.io/s/k260nyxq9v)):
```
<DragDropContext onDragEnd={this.onDragEnd}>
  <Droppable droppableId="droppable">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        style={getListStyle(snapshot.isDraggingOver)}
      >
        {this.state.items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                {item.content}
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>
```

6:25 - onDragEnd function ([source](https://codesandbox.io/s/k260nyxq9v)):

```
onDragEnd(result) {
  // dropped outside the list
  if (!result.destination) {
    return;
  }

  const items = reorder(
    this.state.items,
    result.source.index,
    result.destination.index
  );

  this.setState({
    items,
  });
}
```

7:45 - imports from react-beautiful-dnd ([source](https://codesandbox.io/s/k260nyxq9v)):
```
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
```

11:05 - reorder function ([source](https://codesandbox.io/s/k260nyxq9v)):
```
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
```
