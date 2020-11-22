const attributeDragEndReducer = ( state: any, action: any ) => {
  const { destination, source, draggableId } = action.result;

  if ( !destination ) {
    return state;
  }
  if (
    destination.droppableId === source.droppableId
    && destination.index === source.index
  ) {
    return state;
  }

  const start = state.columns[source.droppableId];
  const finish = state.columns[destination.droppableId]

  if ( start === finish ) {
    const newItemsId: string[] = [ ...start.itemsId ];
    newItemsId.splice( source.index, 1 );
    newItemsId.splice( destination.index, 0, draggableId );

    const newColumn = {
      ...start,
      itemsId: newItemsId
    }

    return {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn
      }
    }
  }

  const startItemsId: string[] = [ ...start.itemsId ];
  startItemsId.splice( source.index, 1 );
  const startColumn = {
    ...start,
    itemsId: startItemsId
  }

  const finishItemsId: string[] = [ ...finish.itemsId ];
  finishItemsId.splice( destination.index, 0, draggableId );
  const finishColumn = {
    ...finish,
    itemsId: finishItemsId
  }

  return {
    ...state,
    columns: {
      ...state.columns,
      [startColumn.id]: startColumn,
      [finishColumn.id]: finishColumn
    }
  }
}

export default attributeDragEndReducer;