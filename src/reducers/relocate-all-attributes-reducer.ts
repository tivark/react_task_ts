const relocateAllAttributesReducer = ( state: any, action: any ) => {
  const { fromColumnId } = action;
  let fromColumn, targetColumn;

  for ( let key in state.columns ) {
    const column = state.columns[key];
    if ( column.id === fromColumnId ) {
      fromColumn = column;
    } else {
      targetColumn = column;
    }
  }
  const newItemsId: string[] = [ ...targetColumn.itemsId, ...fromColumn.itemsId ];
  const newColumn = {
    ...fromColumn,
    itemsId: []
  }
  const newTargetColumn = {
    ...targetColumn,
    itemsId: newItemsId
  }

  return {
    ...state,
    columns: {
      ...state.columns,
      [newColumn.id]: newColumn,
      [newTargetColumn.id]: newTargetColumn
    }
  }
}

export default relocateAllAttributesReducer;